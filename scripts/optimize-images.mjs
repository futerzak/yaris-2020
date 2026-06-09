// One-off / reusable image optimizer for public/Yaris.
// Resizes + recompresses referenced JPGs in place and emits .webp siblings.
// Usage: node scripts/optimize-images.mjs [--delete-unused]
import sharp from 'sharp'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'public/Yaris'
const HERO = '20250901_131522.jpg'
const HERO_W = 1920
const DEFAULT_W = 1400
const JPG_Q = 80
const WEBP_Q = 78

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

console.log(`Referenced: ${kept.length} | Unused: ${unused.length} | Total files: ${all.length}\n`)

for (const f of kept) {
  const p = join(DIR, f)
  const w = f === HERO ? HERO_W : DEFAULT_W
  const origSize = statSync(p).size
  before += origSize
  const input = readFileSync(p)
  // overwrite jpg (resize, no enlargement, mozjpeg)
  const jpg = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).jpeg({ quality: JPG_Q, mozjpeg: true }).toBuffer()
  const { writeFileSync } = await import('node:fs')
  writeFileSync(p, jpg)
  after += jpg.length
  // webp sibling
  const webpPath = p.replace(/\.(jpe?g|png)$/i, '.webp')
  const webp = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: WEBP_Q }).toBuffer()
  writeFileSync(webpPath, webp)
  webpTotal += webp.length
  console.log(`  ${f}: ${human(origSize)} -> jpg ${human(jpg.length)} | webp ${human(webp.length)}`)
}

console.log(`\nJPG referenced: ${human(before)} -> ${human(after)}`)
console.log(`WebP generated: ${human(webpTotal)}`)
console.log(`Payload (webp where available): ~${human(webpTotal)}\n`)

const unusedBytes = unused.reduce((s, f) => s + statSync(join(DIR, f)).size, 0)
console.log(`Unused files: ${unused.length} (${human(unusedBytes)})`)
import('node:fs').then(({ writeFileSync }) =>
  writeFileSync('scripts/.unused-images.txt', unused.map((f) => join(DIR, f)).join('\n') + '\n')
)
console.log('Unused list written to scripts/.unused-images.txt')
