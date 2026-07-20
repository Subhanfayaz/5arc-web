import { useLocation, useNavigate } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import { Smartphone, Repeat, Rocket, Search, Palette, Code, ShieldCheck, CheckCircle } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import AppContent from '../components/Appcontent';


export default function Apps() {
  const location = useLocation();
  const navigate = useNavigate();

  const offerings = [
    {
      title: 'iOS & Android Apps',
      icon: <Smartphone size={32} className="text-[#071E26]" />,
      desc: 'High-performance native mobile experiences built with platform-specific SDKs for maximum speed and seamless integration with device capabilities.',
      features: ['Native iOS (Swift)', 'Native Android (Kotlin)', 'Platform APIs'],
    },
    {
      title: 'Cross-Platform Apps',
      icon: <Repeat size={32} className="text-[#071E26]" />,
      desc: 'Cost-effective, single-codebase applications using React Native and Flutter that deliver near-native performance without doubling your development investment.',
      features: ['React Native', 'Flutter', 'Shared Codebase'],
    },
    {
      title: 'App Store Launch',
      icon: <Rocket size={32} className="text-[#071E26]" />,
      desc: 'Full support from app store optimization through deployment. We handle compliance, metadata, screenshots, and launch strategy to maximize your app\'s visibility.',
      features: ['ASO Strategy', 'Store Compliance', 'Launch Support'],
    },
  ];

   const techStack = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Tailwind CSS', 'Express', 'Android Studio', 'Xcode', 'PostgreSQL', 'MongoDB'];


  const processSteps = [
    {
      title: 'Discovery',
      icon: <Search size={24} />,
      desc: 'We dive deep into your business goals, target audience, and technical requirements to establish a clear project roadmap.',
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      desc: 'Our designers create pixel-perfect wireframes and interactive prototypes that bring your vision to life before a single line of code is written.',
    },
    {
      title: 'Development',
      icon: <Code size={24} />,
      desc: 'Our engineers build your application using modern frameworks and best practices, with regular check-ins and sprint demos.',
    },
    {
      title: 'QA Testing',
      icon: <ShieldCheck size={24} />,
      desc: 'Rigorous testing across devices, screen sizes, and edge cases ensures your app performs flawlessly in every scenario.',
    },
    {
      title: 'Deployment',
      icon: <Rocket size={24} />,
      desc: 'From app store submission to server provisioning, we handle every aspect of launching your application to the world.',
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
      <ParticlesBackground variant="bokeh" />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Mobile Engineering
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Native & Cross-Platform Apps That Users Love
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          We craft mobile experiences that feel native, perform flawlessly, and delight users on every platform.
        </p>
      </section>

      {/* Core Offerings Section */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] text-center mb-16">What We Develop</h2>

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
              onClick={() => handleHashLink('contact')}
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

<AppContent />  

      {/* Process Timeline */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">A proven methodology that delivers results</p>
          </div>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={60}
          itemScale={0.02}
          itemStackDistance={20}
          stackPosition="15%"
          scaleEndPosition="8%"
          baseScale={0.88}
          rotationAmount={0}
          blurAmount={0}
        >
          {processSteps.map((step, idx) => (
            <ScrollStackItem key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center justify-between sm:contents">
                  <div className="fade-on-stack shrink-0 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17A2B8] leading-none w-12 sm:w-14 md:w-16 text-center sm:order-1">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="fade-on-stack shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#0F2E38] border border-white/10 text-[#17A2B8] flex items-center justify-center sm:order-3">
                    {step.icon}
                  </div>
                </div>
                <div className="process-box sm:order-2">
                  <span className="text-[#17A2B8] font-bold text-xs mb-1 block tracking-widest uppercase">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#071E26] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have an App Idea?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's turn your concept into a product that users can't put down.
            </p>
            <button
              onClick={() => handleHashLink('contact')}
              className="bg-white text-[#071E26] px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}