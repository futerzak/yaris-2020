import { useState } from 'react'
import { faqItems } from '../data/carData'
import { SectionHeader } from './SectionHeader'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader kicker="FAQ" title="Pytania" />

          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {faqItems.map((item, index) => (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 font-medium text-neutral-900">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`text-neutral-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="pb-5 text-neutral-700 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
