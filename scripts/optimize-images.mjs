// One-off / reusable image optimizer for public/Yaris.
// Resizes + recompresses referenced JPGs in place, emits .webp siblings
// (base + responsive -640/-1024 variants used by OptimizedImage srcSet),
// a social og-image.jpg (1200x630) and apple-touch-icon.png.
//
// ⚠️  Po dodaniu nowego zdjęcia do src/data/photos.ts URUCHOM ten skrypt —
//     OptimizedImage zakłada, że istnieją warianty <nazwa>-640.webp i <nazwa>-1024.webp.
//
// Usage: node scripts/optimize-images.mjs [--delete-unused]
import sharp from 'sharp'
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'public/Yaris'
const HERO = '20250901_131546.jpg'
const HERO_W = 1920
const DEFAULT_W = 1400
const JPG_Q = 80
const WEBP_Q = 78
const WEBP_Q_FALLBACKS = [64, 50, 40] // gdy webp wyjdzie większy niż jpg
const VARIANT_W = [640, 1024]
const OG_SOURCE = 'FB_IMG_1615045136405.jpg'

// 1. Collect referenced filenames from photos.ts + index.html
const photos = readFileSync('src/data/photos.ts', 'utf8')
const html = readFileSync('index.html', 'utf8')
const refs = new Set()
for (const m of photos.matchAll(/img\('([^']+)'\)/g)) refs.add(m[1])
for (const src of [photos, html]) {
  for (const m of src.matchAll(/Yaris\/([^"')\s]+\.(?:jpe?g|png))/gi)) refs.add(m[1])
}

const all = readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f))
const kept = all.filter((f) => refs.has(f))
const unused = all.filter((f) => !refs.has(f))

const human = (b) => (b / 1048576).toFixed(2) + ' MB'
let before = 0, after = 0, webpTotal = 0
const warnings = []

console.log(`Referenced: ${kept.length} | Unused: ${unused.length} | Total files: ${all.length}\n`)

for (const f of kept) {
  const p = join(DIR, f)
  const w = f === HERO ? HERO_W : DEFAULT_W
  const origSize = statSync(p).size
  before += origSize
  const input = readFileSync(p)
  const meta = await sharp(input).rotate().metadata()

  // overwrite jpg (resize, no enlargement, mozjpeg)
  const jpg = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).jpeg({ quality: JPG_Q, mozjpeg: true }).toBuffer()
  writeFileSync(p, jpg)
  after += jpg.length

  // webp sibling — guard: musi być mniejszy niż jpg, inaczej schodzimy z jakością
  const webpPath = p.replace(/\.(jpe?g|png)$/i, '.webp')
  let webp = null
  for (const q of [WEBP_Q, ...WEBP_Q_FALLBACKS]) {
    const candidate = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: q }).toBuffer()
    if (candidate.length < jpg.length) {
      webp = candidate
      if (q !== WEBP_Q) console.log(`  ↳ ${f}: webp q${q} (q78 przerósł jpg)`)
      break
    }
  }
  if (webp) {
    writeFileSync(webpPath, webp)
    webpTotal += webp.length
  } else {
    warnings.push(`${f}: webp większy niż jpg nawet przy q40 — pominięto, <source> da 404 i fallback do jpg`)
  }

  // responsive variants dla srcSet (pomiń, gdy oryginał węższy niż wariant)
  const stem = p.replace(/\.(jpe?g|png)$/i, '')
  const variants = []
  for (const vw of VARIANT_W) {
    if (!meta.width || meta.width <= vw) continue
    const buf = await sharp(input).rotate().resize({ width: vw }).webp({ quality: WEBP_Q }).toBuffer()
    writeFileSync(`${stem}-${vw}.webp`, buf)
    webpTotal += buf.length
    variants.push(`${vw}w ${human(buf.length)}`)
  }

  console.log(`  ${f}: ${human(origSize)} -> jpg ${human(jpg.length)} | webp ${webp ? human(webp.length) : 'SKIPPED'}${variants.length ? ' | ' + variants.join(', ') : ''}`)
}

// og-image 1200x630 (social card) — z kadru źródłowego
try {
  const og = await sharp(readFileSync(join(DIR, OG_SOURCE)))
    .rotate()
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer()
  writeFileSync(join(DIR, 'og-image.jpg'), og)
  console.log(`\nog-image.jpg: 1200x630, ${human(og.length)} (z ${OG_SOURCE})`)
} catch (e) {
  warnings.push(`og-image.jpg nie wygenerowany: ${e.message}`)
}

// apple-touch-icon 180x180 z favicon.svg
try {
  const icon = await sharp(readFileSync('public/favicon.svg'), { density: 300 })
    .resize(180, 180)
    .png()
    .toBuffer()
  writeFileSync('public/apple-touch-icon.png', icon)
  console.log(`apple-touch-icon.png: 180x180, ${human(icon.length)}`)
} catch (e) {
  warnings.push(`apple-touch-icon.png nie wygenerowany: ${e.message}`)
}

console.log(`\nJPG referenced: ${human(before)} -> ${human(after)}`)
console.log(`WebP generated (base + variants): ${human(webpTotal)}`)

if (warnings.length) {
  console.log('\n⚠️  UWAGI:')
  for (const w of warnings) console.log(`  - ${w}`)
}

const unusedBytes = unused.reduce((s, f) => s + statSync(join(DIR, f)).size, 0)
console.log(`\nUnused files: ${unused.length} (${human(unusedBytes)})`)
writeFileSync('scripts/.unused-images.txt', unused.map((f) => join(DIR, f)).join('\n') + '\n')
console.log('Unused list written to scripts/.unused-images.txt')

if (process.argv.includes('--delete-unused')) {
  const { rmSync } = await import('node:fs')
  for (const f of unused) {
    rmSync(join(DIR, f))
    const webpSibling = join(DIR, f.replace(/\.(jpe?g|png)$/i, '.webp'))
    try { rmSync(webpSibling) } catch { /* brak siblinga */ }
  }
  console.log(`Deleted ${unused.length} unused files (+ webp siblings)`)
}
