import { Zap, ShieldCheck, Smartphone, Monitor, Layers, Gauge } from 'lucide-react';

const contentPillars = [
  {
    title: 'Built From Scratch, Never Templated',
    icon: <Layers size={22} className="text-white" />,
    desc: 'Every custom website we build starts as a blank canvas, not a recycled theme. Your architecture, your components, your brand — engineered specifically for how your business actually operates.',
  },
  {
    title: 'Responsive Web Design, By Default',
    icon: <Smartphone size={22} className="text-white" />,
    desc: 'Mobile-first isn\'t a checkbox for us. Every layout is stress-tested across phones, tablets, and desktops so your site looks intentional on any screen, not just the one it was designed on.',
  },
  {
    title: 'Consistent, Everywhere It Runs',
    icon: <Monitor size={22} className="text-white" />,
    desc: 'Chrome, Safari, an old tablet in the break room — your site should look and work the same no matter where someone opens it. We test across real environments, not just the ones that are convenient.',
  },
  {
    title: 'Performance That Holds Under Load',
    icon: <Gauge size={22} className="text-white" />,
    desc: 'A beautiful site that takes six seconds to load is a broken site. We optimize assets, code, and delivery so your pages feel instant, even as traffic scales.',
  },
  {
    title: 'Security Built Into the Foundation',
    icon: <ShieldCheck size={22} className="text-white" />,
    desc: 'From data handling to server configuration, security isn\'t bolted on after launch. It\'s part of how we architect every custom web application from the very first line of code.',
  },
  {
    title: 'Fast Iteration, Without the Rebuild',
    icon: <Zap size={22} className="text-white" />,
    desc: 'Your business will change, and your website should be able to change with it. We build maintainable, well-documented codebases so future updates don\'t mean starting over.',
  },
];

export default function WebsiteContent() {
  return (
    <section className="py-24 px-6 relative bg-[#071E26]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#17A2B8] font-semibold text-sm uppercase tracking-widest mb-4">
            Website Development
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Websites Engineered to Perform, Not Just Look Good
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            A great website is more than a digital brochure — it's the fastest-loading,
            most persuasive salesperson your business has. We design and build custom
            websites and web applications that combine clean, modern design with
            fast, secure, SEO-friendly code, so your business shows up, loads instantly,
            and converts visitors into customers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contentPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-[#17A2B8]/40 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[#17A2B8] flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing statement / secondary content block */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Your Website Should Work as Hard as You Do
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you need a brand-new business website, a scalable web application,
            or an e-commerce platform built to handle real traffic, our web development
            team designs every project around one goal: helping your business grow
            online with a site that's fast, secure, and built to last.
          </p>
        </div>

      </div>
    </section>
  );
}