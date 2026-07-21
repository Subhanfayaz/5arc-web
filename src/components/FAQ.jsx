import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ faqs, title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our services" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle size={32} className="text-[#17A2B8]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26]">{title}</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-300 ${openIndex === idx ? 'z-50' : 'z-10'}`}
            >
              <div
                className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? 'border-[#17A2B8] shadow-2xl'
                    : 'border-gray-100 hover:border-[#17A2B8] hover:shadow-lg'
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className={`w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                    openIndex === idx
                      ? 'bg-gradient-to-r from-[#071E26] to-[#0d5d6c]'
                      : 'bg-white hover:bg-[#F0F7F8]'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-grow">
                    <span className={`text-lg md:text-xl font-bold flex-shrink-0 transition-colors duration-300 ${
                      openIndex === idx ? 'text-[#17A2B8]' : 'text-[#0E5D6C]'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      openIndex === idx ? 'text-white' : 'text-[#071E26]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 transition-all duration-300 ml-4 ${
                      openIndex === idx ? 'text-white rotate-180' : 'text-[#17A2B8] rotate-0'
                    }`}
                  />
                </button>

                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 py-6 border-t-2 border-[#E7F2F4] dark:border-[#134856] bg-gradient-to-r from-[#F0F7F8] to-white dark:from-[#092731] dark:to-[#0d343f]">
  <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                      {faq.answer}
                    </p>

                    {/* Features/Key Points */}
                    {faq.features && faq.features.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#E7F2F4] dark:border-[#134856]">
                        <ul className="space-y-2">
                          {faq.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#17A2B8]/20 text-[#17A2B8] flex-shrink-0 mt-0.5 text-xs font-bold">
                                ✓
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}