import { Link } from 'react-router-dom';
import { Code, Layers, Palette, GitBranch, Rocket, Target, Eye, Zap, Shield, Heart, Users, CheckCircle } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import SEO from '../components/SEO';

export default function About() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ];

  const pillars = [
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
      desc: 'Setting up simple, automated workflows to seamlessly push completed products directly to web hosting platforms.',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      icon: <Shield size={24} className="text-[#17A2B8]" />,
      desc: 'Every line of code is reviewed, tested, and optimized. We never cut corners — your product deserves the best.',
    },
    {
      title: 'Client-Centric',
      icon: <Heart size={24} className="text-[#17A2B8]" />,
      desc: 'Your goals are our goals. We listen, iterate, and collaborate closely to make sure we deliver exactly what you need.',
    },
    {
      title: 'Transparency',
      icon: <Eye size={24} className="text-[#17A2B8]" />,
      desc: 'No hidden costs, no surprises. We keep you in the loop at every stage with clear communication and honest timelines.',
    },
    {
      title: 'Innovation',
      icon: <Zap size={24} className="text-[#17A2B8]" />,
      desc: 'We stay on top of emerging technologies and best practices to give your business a competitive edge in the digital world.',
    },
    {
      title: 'Results-Driven',
      icon: <Target size={24} className="text-[#17A2B8]" />,
      desc: 'We build solutions designed to generate measurable impact — faster load times, higher conversions, and real business growth.',
    },
    {
      title: 'Long-Term Partnership',
      icon: <Users size={24} className="text-[#17A2B8]" />,
      desc: 'We don\'t disappear after launch. We offer ongoing support, maintenance, and improvements to help you scale over time.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground variant="constellation" />
      <SEO
        title="About Us — 5ARCS | Custom Web & Mobile Development Agency"
        description="Learn about 5ARCS — a full-service digital agency that builds high-performance websites, mobile apps, and SEO strategies. Discover our mission, values, and approach."
        keywords="about 5arcs, web development agency, digital agency, custom software development team"
        url="/about"
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Engineering Digital Products That Drive Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          We're a team of developers, designers, and strategists passionate about turning ideas into powerful digital experiences.
        </p>
      </section>

      {/* Who We Are */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At 5ARCS, we are a full-service digital agency that builds high-performance websites and custom applications. We combine modern UI/UX design with clean, fast code to help your business stand out online. Instead of using generic templates, we specialize in custom web development from scratch, ensuring your site is fast, secure, and perfectly tailored to your brand.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our team takes your business goals and turns them into user-friendly layouts and professional front-end development. Whether you need a brand-new startup website or want to upgrade your current platform, we deliver the reliable digital solutions you need to grow your business and scale with confidence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Based in Dallas, TX, we serve clients globally — from early-stage startups looking for their first digital product to established businesses seeking a complete platform overhaul. Our approach combines technical excellence with strategic thinking, ensuring every project we deliver creates real, measurable value.
              </p>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#F0F7F8] rounded-xl p-8 text-center flex flex-col justify-center h-40">
                  <span className="text-4xl font-bold text-[#071E26] mb-2">{stat.value}</span>
                  <span className="text-gray-600 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#071E26] rounded-3xl p-10">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Target size={28} className="text-[#17A2B8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To empower businesses of all sizes with custom-built digital solutions that are fast, scalable, and beautifully designed. We believe every business deserves a digital presence that truly reflects its quality and ambition — not a cookie-cutter template, but a purposefully engineered product.
              </p>
            </div>
            <div className="bg-[#071E26] rounded-3xl p-10">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={28} className="text-[#17A2B8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To become the most trusted digital product agency for growth-focused businesses worldwide. We envision a future where every company — from a local startup to a global enterprise — has access to professional-grade digital solutions that accelerate their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">The 5 Pillars of 5ARCS</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Every letter in our name stands for a core pillar of how we build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {pillars.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
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

      {/* Our Values */}
      <section className="relative z-10 py-20 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do — from the first call to post-launch support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-[#F0F7F8] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071E26] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071E26] mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A straightforward process designed around delivering quality — on time, every time.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery & Strategy', desc: 'We start by deeply understanding your business, audience, and goals. Through research and strategic planning, we define the project scope, technology stack, and roadmap to ensure we build the right product from day one.' },
              { step: '02', title: 'Design & Prototyping', desc: 'Our designers create wireframes and high-fidelity prototypes that bring your vision to life. We iterate with you to perfect the user experience and visual design before writing any code.' },
              { step: '03', title: 'Development & Engineering', desc: 'Our engineers build your product using modern, scalable technologies. Clean architecture, optimized performance, and responsive design are built into every component from the start.' },
              { step: '04', title: 'Testing & Quality Assurance', desc: 'Before launch, we rigorously test across devices and browsers, fixing every edge case. We ensure your product is fast, secure, accessible, and ready for real users.' },
              { step: '05', title: 'Launch & Ongoing Support', desc: 'We handle deployment and post-launch monitoring. After launch, we provide ongoing maintenance, updates, and support to ensure your product continues to perform and evolve.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 bg-[#071E26] rounded-2xl flex items-center justify-center">
                  <span className="text-[#17A2B8] font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#071E26] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#071E26] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss your next project and create something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#071E26] px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
