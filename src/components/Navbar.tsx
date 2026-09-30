import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, MessageCircle, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo.jpeg';

// Data structures
const productsMenu = [
  [
    { label: "Cooking Equipment", href: "/products/cooking" },
    { label: "Refrigeration Equipment", href: "/products/refrigeration" },
    { label: "Table & Sinks", href: "/products/table-sinks" },
  ],
  [
    { label: "Trolley & Racks", href: "/products/trolley-racks" },
    { label: "Display Cabinets", href: "/products/display-cabinets" },
    { label: "Preparation Equipment", href: "/products/preparation" },
  ],
  [
    { label: "Island Kitchen", href: "/products/island-kitchen" },
    { label: "Exhaust Equipment", href: "/products/exhaust" },
    { label: "Imported Products", href: "/products/imported" },
  ]
];

const servicesMenu = [
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Layout Designing & Kitchen Solutions", href: "/services/layout-design" },
  { label: "L.P.G Pipeline Designing & Installation", href: "/services/lpg-pipeline" },
  { label: "Exhaust System Ducting", href: "/services/exhaust-ducting" },
  { label: "Fresh Air Supply System", href: "/services/fresh-air" },
  { label: "AMC", href: "/services/amc" },
];

const resourcesMenu = [
  { label: "Company / About Us", href: "/about" },
  { label: "Quality Policies & Certifications", href: "/certifications" },
  { label: "Projects / Portfolio", href: "/projects" },
  { label: "News & Events", href: "/news" },
  { label: "Blog", href: "/blog" },
];

// Helper hooks
function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useOnClickOutside(navRef, () => setActiveDropdown(null));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-3' : 'py-5 shadow-sm'
      }`}
      ref={navRef}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group z-50 relative">
          <img src={logoImg} alt="PSR Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {/* Products Mega Menu */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-heading font-medium text-[#0F172A] hover:text-[#F58220] transition-colors py-2 cursor-pointer">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
                >
                  <div className="container-custom py-8">
                    <div className="grid grid-cols-4 gap-8">
                      {productsMenu.map((col, idx) => (
                        <div key={idx} className="flex flex-col">
                          {col.map((item, i) => (
                            <Link 
                              key={i}
                              to={item.href} 
                              className="block text-[#0F172A] hover:text-[#F58220] py-4 border-b border-gray-100 last:border-0 transition-colors text-base"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      
                      {/* Featured Column */}
                      <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center items-start border border-gray-100">
                        <h4 className="font-heading font-bold text-[#0F172A] mb-2 text-lg">PSR Machinery Solutions</h4>
                        <p className="text-sm text-gray-600 mb-6">Discover our complete range of high-performance industrial equipment.</p>
                        <Link to="/products" className="bg-[#F58220] text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-[#D66C0F] transition-colors inline-flex items-center">
                          View All Products <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-heading font-medium text-[#0F172A] hover:text-[#F58220] transition-colors py-2 cursor-pointer">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-[320px] bg-white shadow-xl border border-gray-100 overflow-hidden py-1"
                >
                  <ul className="flex flex-col">
                    {servicesMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          to={item.href} 
                          className="block text-[#0F172A] hover:text-[#F58220] py-3 px-5 border-b border-gray-100 last:border-0 transition-colors text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-heading font-medium text-[#0F172A] hover:text-[#F58220] transition-colors py-2 cursor-pointer">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'resources' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-[240px] bg-white shadow-xl rounded border border-gray-100 overflow-hidden py-2"
                >
                  <ul className="flex flex-col">
                    {resourcesMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          to={item.href} 
                          className="block text-sm font-medium text-[#0F172A] hover:text-[#F58220] hover:bg-orange-50 px-4 py-2 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `text-sm font-heading font-medium transition-colors py-2 ${isActive ? 'text-[#F58220]' : 'text-[#0F172A] hover:text-[#F58220]'}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA & WhatsApp */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="https://wa.me/1234567890?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20machinery." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors shadow-md"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-[#F58220] text-white font-bold rounded hover:bg-[#D66C0F] transition-colors shadow-md text-sm tracking-wide uppercase"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#0F172A] p-2 -mr-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white z-40 lg:hidden flex flex-col pt-20 pb-6 px-4 overflow-y-auto"
          >
            <div className="flex-grow flex flex-col gap-2">
              {/* Mobile Products Accordion */}
              <div className="border-b border-gray-100 py-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-heading font-medium text-lg text-[#0F172A]"
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-products' ? null : 'mobile-products')}
                >
                  Products
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-products' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 pl-4 flex flex-col gap-4">
                        {productsMenu.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-0">
                            {col.map((item, i) => (
                              <Link 
                                key={i} 
                                to={item.href} 
                                className="text-sm font-medium text-gray-700 hover:text-[#F58220] py-3 border-b border-gray-100 last:border-0"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100 py-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-heading font-medium text-lg text-[#0F172A]"
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="py-4 pl-4 space-y-3">
                        {servicesMenu.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="text-sm font-medium text-gray-700 hover:text-[#F58220]">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Resources Accordion */}
              <div className="border-b border-gray-100 py-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-heading font-medium text-lg text-[#0F172A]"
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-resources' ? null : 'mobile-resources')}
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-resources' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="py-4 pl-4 space-y-3">
                        {resourcesMenu.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="text-sm font-medium text-gray-700 hover:text-[#F58220]">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="py-2">
                <Link to="/contact" className="block w-full font-heading font-medium text-lg text-[#0F172A]">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              <Link 
                to="/contact" 
                className="w-full py-3.5 bg-[#F58220] text-white font-bold uppercase tracking-wide rounded hover:bg-[#D66C0F] transition-colors shadow-md text-center text-sm"
              >
                Get a Quote
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20machinery." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] text-white font-bold uppercase tracking-wide rounded hover:bg-[#128C7E] transition-colors shadow-md text-center flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
