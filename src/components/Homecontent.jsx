import { CheckCircle2, Clock, Wallet, LifeBuoy } from 'lucide-react';

const reasons = [
  {
    title: 'No Templates, No Shortcuts',
    icon: <CheckCircle2 size={20} className="text-[#17A2B8]" />,
    desc: 'Every project is coded from the ground up around your business, not assembled from a marketplace theme you could\'ve bought yourself.',
  },
  {
    title: 'Timelines You Can Actually Plan Around',
    icon: <Clock size={20} className="text-[#17A2B8]" />,
    desc: 'You get a real schedule with real milestones — not a vague "a few weeks" that quietly turns into a few months.',
  },
  {
    title: 'Pricing With No Surprise Invoices',
    icon: <Wallet size={20} className="text-[#17A2B8]" />,
    desc: 'You know the cost before we start. If scope changes, you\'re told before it happens, not billed for it after.',
  },
  {
    title: 'We Don\'t Disappear After Launch',
    icon: <LifeBuoy size={20} className="text-[#17A2B8]" />,
    desc: 'Launch day isn\'t the finish line. We stick around for support, fixes, and the next round of ideas once real users start showing up.',
  },
];

export default function HomeContent() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-[#17A2B8] font-semibold text-sm uppercase tracking-widest mb-4">
            Why Businesses Choose to Work With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071E26] mb-6 leading-tight">
            Your Competitors Already Have a Website. <br className="hidden md:block" />
            Does Theirs Actually Convert?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A slow, outdated, or badly built site isn't just an inconvenience — it's lost
            revenue every single day it stays online. We build websites and apps that
            don't just look the part, but actively turn visitors into paying customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: reasons list */}
          <div className="space-y-6">
            {reasons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#F0F7F8] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#071E26] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA card */}
          <div className="bg-[#F0F7F8] rounded-3xl p-10 md:p-12 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#071E26] mb-4">
              Let's Find Out What's Costing You Customers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Book a free, no-pressure consultation. We'll look at what you have now,
              tell you honestly what's working and what isn't, and show you what a
              site built to actually perform would look like for your business.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="/#contact"
                className="bg-[#071E26] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d343f] transition-all duration-300 text-center"
              >
                Get Your Free Consultation
              </a>
              <a
                href="/#portfolio"
                className="border-2 border-[#071E26] text-[#071E26] px-8 py-4 rounded-full font-semibold hover:bg-[#071E26] hover:text-white transition-all duration-300 text-center"
              >
                See Our Work First
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              No commitment. No sales pressure. Just an honest look at your options.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}