import { Globe, Smartphone, Layers, Code, Users, Clock, Quote, Star, BarChart3, ShoppingBag, Activity, Search, Palette, GitBranch, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hyperspeed from '../components/Hyperspeed/Hyperspeed';
import Lightning from '../components/Lightning';
import { useState, useEffect, useRef } from 'react';
import Homecontent from '../components/Homecontent';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import TrustedBy from '../components/TrustedBy';

function TestimonialsCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((newIndex + testimonials.length) % testimonials.length);
    startTimer();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative max-w-2xl mx-auto">

      {/* Prev Button */}
      <button
        onClick={goPrev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#071E26] hover:text-white transition-colors duration-300 text-[#071E26] cursor-pointer"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#071E26] hover:text-white transition-colors duration-300 text-[#071E26] cursor-pointer"
      >
        <ChevronRight size={22} />
      </button>

      {/* Cards with swipe support */}
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full shrink-0 px-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col min-h-[280px]">
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
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === index ? 'w-6 bg-[#071E26]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  // --- ADDED FOR EMAILJS ---
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    // Validation
    const errors = [];
    if (!formRef.current.name.value.trim()) errors.push('Name');
    if (!formRef.current.email.value.trim()) errors.push('Email');
    if (!formRef.current.phone.value.trim()) errors.push('Phone Number');
    if (!formRef.current.projectType.value) errors.push('Project Type');
    if (!formRef.current.message.value.trim()) errors.push('Message');

    if (errors.length > 0) {
      alert(`Please fill in the following fields:\n• ${errors.join('\n• ')}`);
      return;
    }

    setLoading(true);

    const SERVICE_ID = 'service_yb4bt6h';
    const TEMPLATE_ID = 'template_w6q4sq5'; // Replace with your EmailJS Template ID
    const PUBLIC_KEY = '26ljKpcMKuwAJwuGy';   // Replace with your EmailJS Public Key

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Your request has been sent successfully!',
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again later.',
          });
          console.error('EmailJS Error:', error);
        }
      );
  };
  // -------------------------

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
      title: 'System Architecture',
      icon: <Layers size={24} className="text-white" />,
      desc: 'Designing the blueprint of the application, mapping how data flows, and structuring the software for speed and scalability.',
    },
    {
      title: 'Frontend Engineering',
      icon: <Code size={24} className="text-white" />,
      desc: 'Building user-facing digital experiences using modern frameworks, codebases, and interactive web elements.',
    },
    {
      title: 'UI/UX & Product Design',
      icon: <Palette size={24} className="text-white" />,
      desc: 'Crafting visual identities, modern layouts, and intuitive user journeys before a single line of code is written.',
    },
    {
      title: 'Source Control & Optimization',
      icon: <GitBranch size={24} className="text-white" />,
      desc: 'Managing the codebase via Git/GitHub, refactoring code for maximum performance, and ensuring maintainability.',
    },
    {
      title: 'Automated Deployment & Delivery',
      icon: <Rocket size={24} className="text-white" />,
      desc: 'Setting up simple, automated workflows (like code-to-live pipelines) to seamlessly push completed products directly to web hosting platforms.',
    },
  ];

  const portfolio = [
    {
      name: 'Samhelp',
      url: 'https://samhelp.net',
      category: 'Landing Page',
      description: 'A professional React-based landing page for a consultancy specializing in expert grant research and government RFP proposals. Features a modern dark-themed UI, conversion-focused contact forms, and a floating WhatsApp button.',
      gradient: 'from-[#1E3A8A] to-[#3B82F6]',
      icon: '🚀',
      tech: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp API'],
    },
    {
      name: 'Creative Digital Crew',
      url: 'https://creativedigitalcrew.com',
      category: 'Agency Website',
      description: 'A dynamic multi-page agency website showcasing automated marketplace, social commerce, and writing services. Built with modern tech stack and optimized for conversions.',
      gradient: 'from-[#EC4899] to-[#F472B6]',
      icon: '✨',
      tech: ['React', 'Vite', 'Tailwind CSS', 'E-commerce'],
    },
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
    },
    {
      name: 'Daniel Osei',
      role: 'Founder, RideSync',
      text: 'Honestly wasn\'t expecting this level of communication from an agency. They caught issues before I even noticed them and shipped on schedule.'
    },
    {
      name: 'Emily Zhang',
      role: 'Marketing Lead, Northgate Retail',
      text: 'Our old site was a nightmare on mobile. 5ARCS rebuilt it from scratch and our bounce rate dropped almost immediately after launch.'
    },
    {
      name: 'Marcus Bell',
      role: 'Co-Founder, Lumen Analytics',
      text: 'We came in with a rough idea and a messy spreadsheet of requirements. They turned it into an actual product without losing what made it useful.'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Operations Director, Coastal Logistics',
      text: 'What stood out was how they pushed back when we asked for something that would\'ve hurt performance. That kind of honesty is rare.'
    },
    {
      name: 'Tom Whitfield',
      role: 'Owner, Whitfield & Co.',
      text: 'Not a huge company, so we needed something we could actually maintain ourselves after launch. They built it clean and documented everything.'
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="5ARCS — Custom Web Development, Mobile Apps & SEO Agency"
        description="5ARCS is a premier digital product agency engineering high-impact websites, mobile applications, and SEO strategies designed to scale your business."
        keywords="web development agency, mobile app development, SEO services, custom software development"
        url="/"
      />
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center bg-[#071E26] z-20">
        <div className="absolute inset-0 z-0 bg-[#071E26]">
          <Hyperspeed effectOptions={heroEffectOptions} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Custom Software Engineering & Digital Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We engineer custom web and mobile apps built on 5 pillars: architectural design, frontend engineering, UI/UX, optimized code, and automated deployment.
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

      {/* Fixed Lightning Background */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none hidden md:block">
        <Lightning
          hue={190}
          xOffset={0}
          speed={0.8}
          intensity={0.3}
          size={1.5}
        />
      </div>
      
      {/* Wrapper for rest of page */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Why Choose 5ARCS</h2>
            <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
              Every letter in our name stands for a core pillar of how we build.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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

        <Homecontent />

        {/* 4. Portfolio */}
        <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-white to-[#F0F7F8]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Selected Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Transforming ideas into digital experiences that drive results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {portfolio.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="p-8 relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#071E26] mb-3">{item.name}</h3>
                      <p className="text-sm font-semibold text-[#17A2B8] uppercase tracking-wide">{item.category}</p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-[#071E26] uppercase tracking-wide mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-[#E7F2F4] text-[#071E26] text-xs font-medium rounded-full hover:bg-[#071E26] hover:text-white transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#071E26] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d343f] transition-all duration-300 group/btn"
                    >
                      Visit Project
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#17A2B8]/20 to-[#071E26]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-6">Who We Are</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At 5ARCS, we are a full-service digital agency that builds high-performance websites and custom applications. We combine modern UI/UX design with clean, fast code to help your business stand out online. Instead of using generic templates, we specialize in custom web development from scratch, ensuring your site is fast, secure, and perfectly tailored to your brand.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team takes your business goals and turns them into user-friendly layouts and professional front-end development. Whether you need a brand-new startup website or want to upgrade your current platform, we deliver the reliable digital solutions you need to grow your business and scale with confidence.
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

        <TrustedBy />

        {/* 6. Testimonials */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-[#F0F7F8] opacity-50 -z-10"></div>
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What Our Clients Say</h2>

            <TestimonialsCarousel testimonials={testimonials} />
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
                <form
                  ref={formRef}
                  className="space-y-6"
                  onSubmit={handleContactSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="Website">Website</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none resize-none placeholder-gray-400"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#17A2B8] text-white w-full py-4 rounded-xl font-semibold hover:bg-[#0E5D6C] transition shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </button>

                  {status.message && (
                    <p className={`text-center font-medium text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {status.message}
                    </p>
                  )}
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
                    <a href="mailto:info@5arcs.net" className="text-gray-600 hover:text-[#071E26] transition">info@5arcs.net</a>
                  </div>
                </div>
                <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#071E26] mb-1">Call Us</h4>
                    <a href="tel:+1(510) 244-6744" className="text-gray-600 hover:text-[#071E26] transition">+1 (510) 244-6744</a>
                  </div>
                </div>
                <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                    <Users size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-[#071E26] mb-1">Visit Us</h4>
                    <p className="text-gray-600">Dallas, TX<br/>United States</p>
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