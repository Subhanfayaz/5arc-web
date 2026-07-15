import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Smartphone, Search } from 'lucide-react';
import logoImg from "../assets/logof.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'Website Development', path: '/websites', icon: <Globe size={18} /> },
    { name: 'Mobile Applications', path: '/apps', icon: <Smartphone size={18} /> },
    { name: 'SEO Optimization', path: '/seo', icon: <Search size={18} /> },
  ];

  const handleHashLink = (hash) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + hash);
    }
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const isServicePage = ['/websites', '/apps', '/seo'].includes(location.pathname);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0E5D6C]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#0E5D6C] py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-white transition-colors duration-300 font-medium ${location.pathname === '/' ? 'text-white border-b-2 border-white' : 'text-white/80 hover:text-white'}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center gap-1.5 text-white transition-colors duration-300 font-medium ${isServicePage ? 'text-white border-b-2 border-white' : 'text-white/80 hover:text-white'}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-300 origin-top ${servicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#071E26]/95 border-l border-t border-white/15"></div>
              
              <div className="bg-[#071E26]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl overflow-hidden">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className={`flex items-center gap-3 px-5 py-3.5 transition-all duration-200 ${location.pathname === service.path ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                  >
                    <span className="text-[#17A2B8]">{service.icon}</span>
                    <span className="font-medium text-sm">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleHashLink('about')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-medium cursor-pointer bg-transparent border-none"
          >
            About
          </button>

          <button
            onClick={() => handleHashLink('contact')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-medium cursor-pointer bg-transparent border-none"
          >
            Contact
          </button>

          <button
            onClick={() => handleHashLink('contact')}
            className="bg-white text-[#071E26] px-6 py-2 rounded-full font-semibold hover:bg-[#F0F7F8] transition-colors duration-300"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#071E26] shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-6 flex flex-col gap-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`text-white text-lg font-medium py-2 ${location.pathname === '/' ? 'opacity-100' : 'opacity-80'}`}
          >
            Home
          </Link>

          {/* Mobile Services Collapsible */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full text-white text-lg font-medium py-2 ${isServicePage ? 'opacity-100' : 'opacity-80'}`}
            >
              Services
              <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                  className={`flex items-center gap-3 text-white/80 py-2 pl-4 text-base ${location.pathname === service.path ? 'text-white' : 'hover:text-white'}`}
                >
                  <span className="text-[#17A2B8]">{service.icon}</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleHashLink('about')}
            className="text-white/80 text-lg font-medium py-2 text-left bg-transparent border-none cursor-pointer"
          >
            About
          </button>

          <button
            onClick={() => handleHashLink('contact')}
            className="text-white/80 text-lg font-medium py-2 text-left bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>

          <button
            onClick={() => handleHashLink('contact')}
            className="bg-white text-[#071E26] text-center px-6 py-3 rounded-full font-semibold mt-2"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}