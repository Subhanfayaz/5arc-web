import { Globe, Smartphone, Layers, Code, Users, Clock, Quote, Star, BarChart3, ShoppingBag, Activity, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hyperspeed from '../components/Hyperspeed/Hyperspeed';
import Lightning from '../components/Lightning';

export default function Home() {
  const heroEffectOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x071E26,
      shoulderLines: 0x0E5D6C,
      brokenLines: 0x0E5D6C,
      leftCars: [0x0E5D6C, 0x17A2B8, 0x0B8FAD],
      rightCars: [0x5BC0BE, 0x17A2B8, 0x0E5D6C],
      sticks: 0x17A2B8,
    },
  };

  const services = [
    {
      title: 'Website Development',
      icon: <Globe size={32} className="text-[#071E26]" />,
      desc: 'Scalable, high-performance web applications built with modern frameworks.',
      features: ['CMS Platforms', 'Custom Web Apps', 'E-commerce Solutions'],
      link: '/websites'
    },
    {
      title: 'Mobile Applications',
      icon: <Smartphone size={32} className="text-[#071E26]" />,
      desc: 'Native and cross-platform mobile experiences that users love.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform (React Native)'],
      link: '/apps'
    },
    {
      title: 'SEO Optimization',
      icon: <Search size={32} className="text-[#071E26]" />,
      desc: 'Data-driven search engine optimization to boost visibility and organic traffic.',
      features: ['On-Page SEO', 'Technical Audits', 'Content Strategy'],
      link: '/seo'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Custom Architecture',
      icon: <Layers size={24} className="text-white" />,
      desc: 'Every project is built from scratch with a tailored architecture that fits your exact requirements.'
    },
    {
      title: 'Scalable Code',
      icon: <Code size={24} className="text-white" />,
      desc: 'Our codebases are engineered for growth, ensuring your platform can handle increased demand effortlessly.'
    },
    {
      title: 'Seamless UX',
      icon: <Users size={24} className="text-white" />,
      desc: 'We obsess over user experience, crafting interfaces that are intuitive, accessible, and delightful to use.'
    },
    {
      title: 'On-Time Delivery',
      icon: <Clock size={24} className="text-white" />,
      desc: 'Rigorous project management ensures every milestone is met without compromising quality.'
    }
  ];

  const portfolio = [
    { name: 'FinTrack Dashboard', category: 'CMS Platform', icon: <BarChart3 size={40} className="text-white opacity-50" />, gradient: 'from-[#071E26] to-[#17A2B8]' },
    { name: 'ShopVerse', category: 'E-commerce Portal', icon: <ShoppingBag size={40} className="text-white opacity-50" />, gradient: 'from-[#071E26] to-[#071E26]' },
    { name: 'HealthPulse', category: 'Custom Web App', icon: <Activity size={40} className="text-white opacity-50" />, gradient: 'from-[#17A2B8] to-[#5BC0BE]' },
    { name: 'RideSync', category: 'iOS & Android App', icon: <Smartphone size={40} className="text-white opacity-50" />, gradient: 'from-[#071E26] to-[#071E26]' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, FinTrack',
      text: '5ARCS transformed our outdated platform into a modern, scalable dashboard. Their attention to detail and technical expertise exceeded all expectations.'
    },
    {
      name: 'James Rodriguez',
      role: 'CTO, ShopVerse',
      text: 'The e-commerce platform they built handles thousands of transactions daily with zero downtime. The team\'s commitment to quality is unmatched.'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, HealthPulse',
      text: 'From concept to launch, 5ARCS delivered a healthcare app that our users love. Their cross-platform expertise saved us months of development time.'
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
<section className="relative w-full h-screen min-h-[600px] flex items-center bg-[#071E26] z-20">
  <div className="absolute inset-0 z-0 bg-[#071E26]">
    <Hyperspeed effectOptions={heroEffectOptions} />
  </div>
  
  <div className="container mx-auto px-6 relative z-10 flex">
    {/* Removed white background card classes, leaving only layout constraints */}
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
        We Engineer High-Impact Digital Experiences
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Bespoke Websites and Mobile Applications designed to scale your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => scrollToSection('services')}
          className="bg-[#0d343f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#071E26] transition-all duration-300 text-center border border-white/10"
        >
          View Services
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#071E26] transition-all duration-300 text-center"
        >
          Talk to an Expert
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Fixed Lightning Background (visible on all sections below hero, hidden on mobile) */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none hidden md:block">
        <Lightning
          hue={190}
          xOffset={0}
          speed={0.8}
          intensity={0.3}
          size={1.5}
        />
      </div>
      
      {/* Wrapper for rest of page to sit above lightning */}
      <div className="relative z-10">

      {/* 2. Services Overview */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Our Core Services</h2>
            <p className="text-gray-600 text-lg">End-to-end digital solutions tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#F0F7F8] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#071E26] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-[#071E26]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17A2B8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="inline-flex items-center text-[#071E26] font-semibold hover:text-[#17A2B8] transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose 5ARCS */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[#F0F7F8] opacity-50 -z-10"></div>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-16">Why Choose 5ARCS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto bg-[#071E26] rounded-full flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071E26] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-16 text-center">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-r ${item.gradient} group cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-[1.03]`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-bold text-xl mb-1">{item.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="py-24 px-6 border-y border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-6">Your Premier Development Partner</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At 5ARCS, we turn complex requirements into seamless software. We partner with ambitious brands to design, engineer, and scale digital products that stand out in today's fast-paced market.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach combines cutting-edge technology with deep strategic thinking. Whether you are launching a new startup or modernizing enterprise legacy systems, our team is dedicated to building robust architectures that drive real business value.
              </p>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="bg-[#F0F7F8] rounded-xl p-8 text-center flex flex-col justify-center h-40">
                <span className="text-4xl font-bold text-[#071E26] mb-2">50+</span>
                <span className="text-gray-600 font-medium">Projects Delivered</span>
              </div>
              <div className="bg-[#F0F7F8] rounded-xl p-8 text-center flex flex-col justify-center h-40">
                <span className="text-4xl font-bold text-[#071E26] mb-2">98%</span>
                <span className="text-gray-600 font-medium">Client Satisfaction</span>
              </div>
              <div className="bg-[#F0F7F8] rounded-xl p-8 text-center flex flex-col justify-center h-40">
                <span className="text-4xl font-bold text-[#071E26] mb-2">5+</span>
                <span className="text-gray-600 font-medium">Years Experience</span>
              </div>
              <div className="bg-[#F0F7F8] rounded-xl p-8 text-center flex flex-col justify-center h-40">
                <span className="text-4xl font-bold text-[#071E26] mb-2">24/7</span>
                <span className="text-gray-600 font-medium">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[#F0F7F8] opacity-50 -z-10"></div>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <Quote size={32} className="text-[#17A2B8] opacity-50 mb-6" />
                <p className="text-gray-600 italic mb-8 grow leading-relaxed">"{t.text}"</p>
                <div className="mt-auto">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-[#071E26]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Form */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Start Your Project</h2>
            <p className="text-gray-600 text-lg">Tell us about your vision and we'll bring it to life.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Form */}
            <div className="lg:w-2/3">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none appearance-none">
                    <option value="">Select an option</option>
                    <option value="website">Website</option>
                    <option value="mobile_app">Mobile App</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="custom_solution">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none resize-none placeholder-gray-400" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="bg-[#17A2B8] text-white w-full py-4 rounded-xl font-semibold hover:bg-[#0E5D6C] transition shadow-md">
                  Submit Request
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Email Us</h4>
                  <a href="mailto:hello@5arcs.com" className="text-gray-600 hover:text-[#071E26] transition">hello@5arcs.com</a>
                </div>
              </div>
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Call Us</h4>
                  <a href="tel:+15552345678" className="text-gray-600 hover:text-[#071E26] transition">+1 (555) 234-5678</a>
                </div>
              </div>
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Visit Us</h4>
                  <p className="text-gray-600">San Francisco, CA<br/>United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div> {/* End Lightning Wrapper */}
    </div>
  );
}
