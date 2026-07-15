import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
// Import the footer logo from your assets folder
import logoFooterImg from "../assets/logof.png";

export default function Footer() {
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
              Engineering premium digital experiences that transform businesses. We build bespoke websites and mobile applications designed for scale.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F0F7F8]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><a href="/#about" className="text-white/80 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/#contact" className="text-white/80 hover:text-white transition-colors duration-300">Contact</a></li>
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
                <a href="mailto:hello@5arcs.com" className="hover:text-white transition-colors">hello@5arcs.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={20} className="text-[#17A2B8]" />
                <a href="tel:+15552345678" className="hover:text-white transition-colors">+1 (555) 234-5678</a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="text-[#17A2B8] shrink-0 mt-1" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© 2026 5ARCS. All rights reserved.</p>
          <p>Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}