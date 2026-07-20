import { FileText, Sparkles, Search, Layers, CheckCircle2 } from 'lucide-react';

export default function SeoContentSection() {
  const contentFeatures = [
    {
      icon: <Search className="text-[#17A2B8]" size={22} />,
      title: "Keyword-Driven Strategy",
      desc: "Target high-intent search terms that attract qualified leads directly to your services."
    },
    {
      icon: <FileText className="text-[#17A2B8]" size={22} />,
      title: "Optimized On-Page Copy",
      desc: "Engaging headlines, structured headers, and meta descriptions crafted to rank and convert."
    },
    {
      icon: <Layers className="text-[#17A2B8]" size={22} />,
      title: "Content Architecture",
      desc: "Logical site structure and internal linking strategies that make search engines love your site."
    },
    {
      icon: <Sparkles className="text-[#17A2B8]" size={22} />,
      title: "Authority Building",
      desc: "Technical and informational content designed to establish your brand as an industry leader."
    }
  ];

  return (
    <section className="bg-[#071E26] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#17A2B8] font-semibold text-sm uppercase tracking-wider bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            SEO Content Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[#F0F7F8]">
            Content That Ranks High & Converts Visitors
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Great SEO isn't just about keywords it's about crafting valuable, search-optimized content that speaks directly to your audience and drives measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentFeatures.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#17A2B8]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}