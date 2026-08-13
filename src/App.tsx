import { Hero } from './components/Hero'
import { ProofStrip } from './components/ProofStrip'
import { Gallery } from './components/Gallery'
import { ConditionSection } from './components/ConditionSection'
import { OwnerStory } from './components/OwnerStory'
import { ExpertSection } from './components/ExpertSection'
import { InteriorSection } from './components/InteriorSection'
import { ServiceHistory } from './components/ServiceHistory'
import { Addons } from './components/Addons'
import { WheelsSection } from './components/WheelsSection'
import { ValueBreakdown } from './components/ValueBreakdown'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { StickyBar } from './components/StickyBar'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-dvh bg-white">
      <ScrollProgress />
      <Hero />
      <ProofStrip />
      <Gallery />
      <ConditionSection />
      <OwnerStory />
      <ExpertSection />
      <InteriorSection />
      <ServiceHistory />
      <Addons />
      <WheelsSection />
      <ValueBreakdown />
      <FAQ />
      <CTA />
      <StickyBar />
    </div>
  )
}

export default App
