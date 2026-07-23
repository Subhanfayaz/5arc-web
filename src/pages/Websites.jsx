import { useLocation, useNavigate } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import { Code, ShoppingCart, Cloud, CheckCircle } from 'lucide-react';
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

  const techStack = ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Wordpress', 'Shopify', 'Stripe', 'PayPal', 'GraphQL', 'REST APIs'];

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
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What We Build</h2>

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

          {/* Single Get Started button below all cards */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#071E26] text-white px-10 py-4 rounded-full font-bold border-2 border-[#071E26] hover:bg-white hover:text-[#071E26] transition-all duration-300 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
<section className="relative z-10 py-20 px-6 overflow-hidden">
  <div className="container mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#071E26]">Our Technology Stack</h2>
  </div>

  {/* Moving ticker */}
  <div className="relative w-full overflow-hidden">
    {/* Left fade */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
    {/* Right fade */}
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