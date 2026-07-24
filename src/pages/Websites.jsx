import { useLocation, useNavigate } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import { Code, ShoppingCart, Cloud, CheckCircle, Zap, Star, TrendingUp, Building2 } from 'lucide-react';
import WebsiteContent from '../components/Websitecontent';
import FAQ from '../components/FAQ';
import { websiteFAQs } from '../data/faqData';
import SEO from '../components/SEO';

export default function Websites() {
  const location = useLocation();
  const navigate = useNavigate();

  const offerings = [
    {
      title: 'Custom Web Development',
      icon: <Code size={32} className="text-[#071E26]" />,
      desc: 'Tailored, lightning-fast React platforms engineered from the ground up. Every line of code is purposefully crafted for your specific business logic and user workflows.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'Admin Dashboards'],
    },
    {
      title: 'E-commerce Solutions',
      icon: <ShoppingCart size={32} className="text-[#071E26]" />,
      desc: 'High-converting headless commerce platforms with secure payment integrations, inventory management, and analytics built in from day one.',
      features: ['Headless Commerce', 'Payment Integration', 'Inventory Systems'],
    },
    {
      title: 'SaaS Development',
      icon: <Cloud size={32} className="text-[#071E26]" />,
      desc: 'Scalable, multi-tenant SaaS platforms built for reliability and growth—from MVP to full-scale product, with subscription billing and cloud-native architecture baked in.',
      features: ['Multi-tenant Architecture', 'Stripe Billing', 'AWS/GCP'],
    },
  ];

  const packages = [
    {
      name: 'Basic',
      icon: <Zap size={24} className="text-[#17A2B8]" />,
      price: '$199',
      originalPrice: '$399',
      priceNote: 'one-time',
      pages: '1–3 Pages',
      bestFor: 'Small businesses, startups, and personal brands looking for a clean, professional online presence.',
      features: [
        'Responsive design for mobile, tablet & desktop',
        'Contact form & social media integration',
        'Fast-loading modern tech structure',
        'Fully functional ready-to-launch website',
        'Basic maintenance guidance',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Standard',
      icon: <TrendingUp size={24} className="text-white" />,
      price: '$349',
      originalPrice: '$449',
      priceNote: 'one-time',
      pages: '3–5 Pages',
      bestFor: 'Growing businesses looking to expand their digital footprint and improve lead generation.',
      features: [
        'Professional multi-page layout with custom UI',
        'Essential SEO optimization',
        'CMS integration for easy updates',
        'Enhanced contact forms & CTA sections',
        'Growth-ready website for user engagement',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Premium',
      icon: <Star size={24} className="text-[#17A2B8]" />,
      price: '$799',
      originalPrice: '$899',
      priceNote: 'one-time',
      pages: 'Up to 7 Pages',
      bestFor: 'Established brands looking to scale conversions and provide advanced digital experiences.',
      features: [
        'Advanced UI/UX custom design',
        'Comprehensive on-page & technical SEO',
        'Interactive animations & dynamic visuals',
        'Custom integrations (booking, analytics, CRM)',
        'Priority deployment & performance optimization',
        'High-conversion commercial website',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Custom',
      icon: <Building2 size={24} className="text-[#17A2B8]" />,
      price: 'Custom',
      originalPrice: null,
      priceNote: 'upon consultation',
      pages: 'Fully Custom Scope',
      bestFor: 'Enterprises and unique projects requiring bespoke software architecture, specialized web apps, or custom integrations.',
      features: [
        'Bespoke application & frontend architecture',
        'Tailored workflows, database & custom APIs',
        'Scalable infrastructure for heavy traffic',
        'Complex business logic support',
        'End-to-end development, testing & CI/CD',
        'Dedicated development team support',
      ],
      cta: 'Get Consultation',
      highlighted: false,
    },
  ];

  const techStack = ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Wordpress', 'Shopify', 'Stripe', 'PayPal', 'GraphQL', 'REST APIs'];

  return (
    <div className="relative min-h-screen bg-white">
      <SEO
        title="Website Development Services — Custom React Websites | 5ARCS"
        description="Tailored, high-performance websites built with React, Next.js, and modern frameworks. Custom web development, e-commerce, and SaaS platforms engineered for growth."
        keywords="custom web development, React development, e-commerce development, SaaS development, progressive web apps"
        url="/websites"
      />
      <ParticlesBackground variant="constellation" />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Web Engineering
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Websites Built for Performance & Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          From concept to launch, we engineer web experiences that convert visitors into customers.
        </p>
      </section>

      {/* Core Offerings Section */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
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

      {/* Pricing Packages */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Website Development Packages</h2>
      <p className="text-gray-600 text-lg">Simple, transparent pricing — no hidden fees.</p>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-[#071E26] shadow-2xl border-2 border-[#17A2B8] lg:-translate-y-2'
                    : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#17A2B8] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pkg.highlighted ? 'bg-white/10' : 'bg-[#F0F7F8]'}`}>
                      {pkg.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${pkg.highlighted ? 'text-white' : 'text-[#071E26]'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price with strikethrough */}
                  <div className="mb-2 flex items-baseline gap-2 flex-wrap">
                    {pkg.originalPrice && (
                      <span className={`text-lg line-through ${pkg.highlighted ? 'text-white/40' : 'text-gray-400'}`}>
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className={`text-4xl font-black ${pkg.highlighted ? 'text-white' : 'text-[#071E26]'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.priceNote && (
                    <span className={`text-xs mb-4 ${pkg.highlighted ? 'text-white/50' : 'text-gray-400'}`}>
                      {pkg.priceNote}
                    </span>
                  )}

                  {/* Pages badge */}
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 w-fit ${pkg.highlighted ? 'bg-[#17A2B8]/20 text-[#17A2B8]' : 'bg-[#E7F2F4] text-[#0E5D6C]'}`}>
                    {pkg.pages}
                  </span>

                  {/* Best for */}
                  <p className={`text-sm leading-relaxed mb-5 ${pkg.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                    {pkg.bestFor}
                  </p>

                  {/* Divider */}
                  <div className={`border-t mb-5 ${pkg.highlighted ? 'border-white/10' : 'border-gray-100'}`} />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#17A2B8] shrink-0 mt-0.5" />
                        <span className={`text-sm ${pkg.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-xl font-bold border-2 transition-all duration-300 cursor-pointer ${
                      pkg.highlighted
                        ? 'bg-[#17A2B8] border-[#17A2B8] text-white hover:bg-transparent hover:text-[#17A2B8]'
                        : 'bg-[#071E26] border-[#071E26] text-white hover:bg-transparent hover:text-[#071E26]'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="relative z-10 py-20 px-6 overflow-hidden bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26]">Our Technology Stack</h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee gap-4">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl px-6 py-3 flex items-center gap-2 font-medium text-[#071E26] hover:border-[#071E26] hover:shadow-md transition-all duration-300 whitespace-nowrap cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebsiteContent />

      {/* FAQ Section */}
      <FAQ
        faqs={websiteFAQs}
        title="Website Development FAQs"
        subtitle="Common questions about our web development services and process"
      />

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#071E26] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Extraordinary?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss your web project and create something remarkable together.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#071E26] px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}