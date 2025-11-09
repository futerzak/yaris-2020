import { Hero } from './components/Hero'
import { OwnerStory } from './components/OwnerStory'
import { TrustBadges } from './components/TrustBadges'
import { ExpertSection } from './components/ExpertSection'
import { Gallery } from './components/Gallery'
import { InteriorSection } from './components/InteriorSection'
import { ServiceHistory } from './components/ServiceHistory'
import { Addons } from './components/Addons'
import { WheelsSection } from './components/WheelsSection'
import { ValueBreakdown } from './components/ValueBreakdown'
import { WhyWorth } from './components/WhyWorth'
import { ConditionSection } from './components/ConditionSection'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'

function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Hero />
      <OwnerStory />
      <TrustBadges />
      <ExpertSection />
      <Gallery />
      <InteriorSection />
      <ServiceHistory />
      <Addons />
      <WheelsSection />
      <ValueBreakdown />
      <WhyWorth />
      <ConditionSection />
      <FAQ />
      <CTA />
    </div>
  )
}

export default App
