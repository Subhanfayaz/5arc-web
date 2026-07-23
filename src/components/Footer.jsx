import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
// Import the footer logo from your assets folder
import logoFooterImg from "../assets/logof.png";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Reuses your logic from Header to cross-page navigate and scroll
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
    <footer className="relative z-20 bg-[#071E26] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block max-w-max">
              <img 
                src={logoFooterImg} 
                alt="5ARCS Logo" 
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
              />
            </Link>
            <p className="text-white/80 leading-relaxed">
              We build custom web and mobile applications with clean code and modern design to help your business stand out.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.facebook.com/people/5arcs/61592066397527/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#17A2B8] transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              
              <a
                href="https://www.instagram.com/5arcs_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#17A2B8] transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              
              <a
                href="https://www.linkedin.com/company/5arcs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#17A2B8] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F0F7F8]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">Home</Link></li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F0F7F8]">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/websites" className="text-white/80 hover:text-white transition-colors duration-300">Website Development</Link></li>
              <li><Link to="/apps" className="text-white/80 hover:text-white transition-colors duration-300">Mobile Applications</Link></li>
              <li><Link to="/seo" className="text-white/80 hover:text-white transition-colors duration-300">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F0F7F8]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={20} className="text-[#17A2B8]" />
                <a href="mailto:info@5arcs.net" className="hover:text-white transition-colors">info@5arcs.net</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={20} className="text-[#17A2B8]" />
                <a href="tel:+15102446744" className="hover:text-white transition-colors">+1 (510) 244-6744</a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="text-[#17A2B8] shrink-0 mt-1" />
                <span>Dallas, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© 2026 5ARCS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p>Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}