import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-white pt-20 pb-8 border-t-[6px] border-brand-orange">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link to="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <img src={logoImg} alt="PSR Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-brand-gray/80 mb-6 font-medium">
              Precision engineering and robust industrial machinery solutions for global manufacturing leaders since 1998.
            </p>
            <div className="flex items-center gap-4 text-brand-white/70">
              <a href="#" className="hover:text-brand-orange transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-brand-gray/80 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-brand-gray/80 hover:text-brand-orange transition-colors">Our Machinery</Link></li>
              <li><Link to="/services" className="text-brand-gray/80 hover:text-brand-orange transition-colors">Services & Maintenance</Link></li>
              <li><Link to="/industries" className="text-brand-gray/80 hover:text-brand-orange transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="text-brand-gray/80 hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-brand-gray/80">142 Industrial Blvd, Suite 100<br />Manufacturing City, TX 78000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-brand-gray/80">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-brand-gray/80">sales@psrequipment.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-white">Newsletter</h4>
            <p className="text-brand-gray/80 mb-4 font-medium">Subscribe for industry insights and equipment updates.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-brand-dark border border-brand-gray/30 rounded-md px-4 py-2.5 text-brand-white focus:outline-none focus:border-brand-orange transition-colors placeholder:text-brand-gray/50"
                required
              />
              <button type="submit" className="bg-brand-orange text-brand-white font-medium rounded-md px-4 py-2.5 hover:bg-opacity-90 transition-all text-center">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray/60 text-sm">
            © {new Date().getFullYear()} PSR Equipment. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-gray/60">
            <Link to="#" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
