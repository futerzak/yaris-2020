import { Hero } from './components/Hero'
import { ExpertSection } from './components/ExpertSection'
import { Gallery } from './components/Gallery'
import { InteriorSection } from './components/InteriorSection'
import { ServiceHistory } from './components/ServiceHistory'
import { Addons } from './components/Addons'
import { WheelsSection } from './components/WheelsSection'
import { ConditionSection } from './components/ConditionSection'
import { CTA } from './components/CTA'

function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Hero />
      <ExpertSection />
      <Gallery />
      <InteriorSection />
      <ServiceHistory />
      <Addons />
      <WheelsSection />
      <ConditionSection />
      <CTA />
    </div>
  )
}

export default App
