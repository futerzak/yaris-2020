import { useState } from 'react'
import { faqItems } from '../data/carData'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Najczęstsze Pytania
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Wszystko, Co Chcesz Wiedzieć
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
            Odpowiadamy szczerze na pytania, które zadaje każdy kupujący.
          </p>

          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50"
                >
                  <span className="pr-4 font-bold text-neutral-900">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red]/10 text-[--color-tokyo-red] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="border-t border-neutral-200 bg-neutral-50 p-6"
                  >
                    <p className="leading-relaxed text-neutral-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[--color-tokyo-red]/5 to-neutral-100 p-6">
            <div className="flex items-start gap-4">
              <div aria-hidden="true" className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red] text-xl text-white">
                💬
              </div>
              <div>
                <div className="font-bold text-neutral-900">Masz inne pytania?</div>
                <p className="mt-2 text-neutral-700">
                  Zadzwoń, napisz na WhatsApp — chętnie odpowiemy na wszystkie wątpliwości. Nie ukrywamy nic, bo nie
                  mamy czego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

