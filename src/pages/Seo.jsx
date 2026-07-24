import { useLocation, useNavigate } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import { Search, FileText, Settings, BarChart3, TrendingUp, Target, CheckCircle, ArrowUpRight, Star } from 'lucide-react';
import SeoContentSection from '../components/SeoContentSection';
import FAQ from '../components/FAQ';
import { seoFAQs } from '../data/faqData';
import SEO from '../components/SEO';

export default function Seo() {
  const location = useLocation();
  const navigate = useNavigate();

  const offerings = [
    {
      title: 'On-Page SEO',
      icon: <FileText size={32} className="text-[#071E26]" />,
      desc: 'Strategic keyword optimization, meta tags, content structure, and internal linking engineered to maximize every page\'s search potential.',
      features: ['Keyword Research & Mapping', 'Meta Tag Optimization', 'Content Structuring'],
    },
    {
      title: 'Technical SEO',
      icon: <Settings size={32} className="text-[#071E26]" />,
      desc: 'Deep-level site auditing and performance tuning — from crawlability and indexing to Core Web Vitals and schema markup.',
      features: ['Site Speed Optimization', 'Schema Markup', 'Crawl & Index Management'],
    },
    {
      title: 'Content Strategy',
      icon: <TrendingUp size={32} className="text-[#071E26]" />,
      desc: 'Data-backed content planning that aligns with search intent, builds topical authority, and drives sustainable organic growth.',
      features: ['Content Audits', 'Topic Clustering', 'Competitor Gap Analysis'],
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'SEO Audit',
      icon: <Search size={24} />,
      desc: 'Comprehensive analysis of your current site health, keyword rankings, backlink profile, and competitive landscape.',
    },
    {
      step: '02',
      title: 'Strategy & Roadmap',
      icon: <Target size={24} />,
      desc: 'A prioritized action plan with clear KPIs, targeting quick wins and long-term growth opportunities.',
    },
    {
      step: '03',
      title: 'Implementation',
      icon: <Settings size={24} />,
      desc: 'Hands-on execution of on-page, technical, and content optimizations across your entire digital presence.',
    },
    {
      step: '04',
      title: 'Monitor & Scale',
      icon: <BarChart3 size={24} />,
      desc: 'Continuous performance tracking, A/B testing, and iterative improvements to compound your search visibility.',
    },
  ];

  const tools = [
    'Google Analytics', 'Google Search Console', 'Ahrefs', 'SEMrush',
    'Screaming Frog', 'Moz Pro', 'Surfer SEO', 'Google PageSpeed',
  ];

  const pricingPackages = [
    {
      name: 'Basic',
      price: 129,
      cutPrice: 199,
      bestFor: 'Small local businesses and startups looking to establish basic search engine visibility.',
      features: [
        'Initial SEO audit & keyword research (up to 10 keywords)',
        'On-page optimization (titles, descriptions, headers)',
        'Google Business Profile setup & optimization',
        'Monthly progress tracking report',
      ],
      deliverable: 'Foundational optimization to help local customers find your business online.',
      highlighted: false,
    },
    {
      name: 'Standard',
      price: 199,
      cutPrice: 299,
      bestFor: 'Growing businesses looking to increase organic traffic and rank for competitive keywords.',
      features: [
        'Keyword research & competitor analysis (up to 25 keywords)',
        'Advanced on-page & technical SEO fixes',
        'Content optimization & meta tag refinement',
        'Local SEO & directory submissions',
        'Bi-weekly performance & ranking reports',
      ],
      deliverable: 'A steady increase in organic visibility and targeted search traffic.',
      highlighted: true,
    },
    {
      name: 'Advanced',
      price: 349,
      cutPrice: 449,
      bestFor: 'Established companies and e-commerce brands scaling their digital reach and lead generation.',
      features: [
        'Keyword strategy & mapping (up to 50 keywords)',
        'Technical SEO audit & continuous monitoring',
        'Authority-building & off-page SEO outreach',
        'Conversion rate optimization (CRO) insights',
        'Weekly reporting & strategy consultations',
      ],
      deliverable: 'High-tier optimization focused on search dominance and conversions.',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 599,
      cutPrice: 699,
      bestFor: 'Enterprises and large-scale digital platforms demanding aggressive market growth.',
      features: [
        'Unlimited keyword tracking & enterprise strategy',
        'Full technical architecture optimization',
        'Advanced link-building & digital PR outreach',
        'Dedicated SEO manager & custom funnels',
        'Real-time analytics dashboard & weekly reviews',
      ],
      deliverable: 'Maximum market authority, top-tier rankings, and organic ROI.',
      highlighted: false,
    },
  ];

  const handleHashLink = (hash) => {
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollTo', hash);
      navigate('/');
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <SEO
        title="SEO Services — Rank Higher & Drive Organic Growth | 5ARCS"
        description="Data-driven SEO strategies covering on-page, technical, and content optimization. We help businesses dominate search rankings and grow organic traffic."
        keywords="SEO agency, technical SEO, on-page SEO, content strategy, search engine optimization services"
        url="/seo"
      />
      <ParticlesBackground variant="network" />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Search Engine Optimization
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Dominate Search Rankings & Drive Organic Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Data-driven SEO strategies that put your brand in front of the right audience at the right time.
        </p>
      </section>

      {/* Core Offerings Section */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What We Optimize</h2>

          {/* Cards — no hover effect, no Get Started button inside */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-white md:bg-white/80 md:backdrop-blur-sm border border-gray-100 rounded-2xl p-8">
                <div className="bg-[#F0F7F8] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#071E26] mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-[#071E26] font-medium">
                      <CheckCircle size={20} className="text-[#17A2B8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase inline-block">
              Limited-Time Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">SEO Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent, one-time pricing built to match where your business is today and where you're headed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-[#071E26] text-white shadow-2xl lg:-translate-y-3'
                    : 'bg-white border border-gray-100 text-[#071E26] hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#17A2B8] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                    <Star size={12} className="fill-white" /> Most Popular
                  </span>
                )}

                <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-[#071E26]'}`}>
                  {pkg.name}
                </h3>

                <p className={`text-sm mb-6 leading-relaxed ${pkg.highlighted ? 'text-white/70' : 'text-gray-600'}`}>
                  {pkg.bestFor}
                </p>

                <div className="mb-6 flex items-baseline gap-2 flex-wrap">
                  <span className={`text-4xl font-extrabold ${pkg.highlighted ? 'text-white' : 'text-[#071E26]'}`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.highlighted ? 'text-white/60' : 'text-gray-500'}`}>one-time</span>
                  <span className={`text-sm line-through ${pkg.highlighted ? 'text-white/40' : 'text-gray-400'}`}>
                    ${pkg.cutPrice}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-2.5 text-sm ${pkg.highlighted ? 'text-white/90' : 'text-[#071E26]'}`}
                    >
                      <CheckCircle
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-[#17A2B8]' : 'text-[#17A2B8]'}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className={`text-xs mb-6 leading-relaxed ${pkg.highlighted ? 'text-white/60' : 'text-gray-500'}`}>
                  {pkg.deliverable}
                </p>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 rounded-full font-bold border-2 transition-all duration-300 cursor-pointer ${
                    pkg.highlighted
                      ? 'bg-white text-[#071E26] border-white hover:bg-transparent hover:text-white'
                      : 'bg-[#071E26] text-white border-[#071E26] hover:bg-white hover:text-[#071E26]'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Our SEO Methodology</h2>
            <p className="text-lg text-gray-600">A proven framework that delivers measurable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {methodology.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-[#071E26] rounded-2xl p-8 h-full hover:bg-[#0d343f] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#17A2B8]">{item.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-[#17A2B8] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {/* Connector arrow between cards */}
                {idx < methodology.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowUpRight size={20} className="text-[#17A2B8] rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="relative z-10 py-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26]">Tools & Platforms We Use</h2>
        </div>

        {/* Moving ticker */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-4">
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl px-6 py-3 flex items-center gap-2 font-medium text-[#071E26] hover:border-[#071E26] hover:shadow-md transition-all duration-300 whitespace-nowrap cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SeoContentSection />

      <FAQ
        faqs={seoFAQs}
        title="SEO FAQs"
        subtitle="Answers to frequently asked questions about our SEO services"
      />

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#071E26] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Climb the Rankings?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's build an SEO strategy that drives real, measurable growth for your business.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#071E26] px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              Let's Talk SEO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}