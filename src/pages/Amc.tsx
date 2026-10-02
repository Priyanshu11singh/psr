import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Wrench } from 'lucide-react';

const serviceCategories = [
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Layout Designing & Kitchen Solutions", href: "/services/layout-design" },
  { label: "L.P.G Pipeline Designing & Installation", href: "/services/lpg-pipeline" },
  { label: "Exhaust System Ducting", href: "/services/exhaust-ducting" },
  { label: "Fresh Air Supply System", href: "/services/fresh-air" },
  { label: "AMC", href: "/services/amc" },
];

export default function Amc() {
  const location = useLocation();

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Inner Banner */}
      <section className="bg-brand-navy py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container-custom relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Annual Maintenance Contract (AMC)
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-sm font-medium text-white/70"
          >
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/services" className="hover:text-brand-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-orange">AMC</span>
          </motion.nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Article Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 text-brand-gray text-base leading-relaxed"
            >
              
              <div className="mb-8 flex flex-col md:flex-row items-center p-8 bg-brand-orange/10 rounded-xl border border-brand-orange/20 text-brand-navy">
                <div className="bg-brand-orange p-4 rounded-full text-white mb-4 md:mb-0 md:mr-6 shrink-0">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">PSR Kitchen Promise Program</h3>
                  <p className="font-medium text-brand-gray">
                    Keeping your kitchen running smoothly for long years is imperative to your operation's success.
                  </p>
                </div>
              </div>
              
              <p className="mb-5">
                It is a new way of Kitchen maintenance being offered exclusively by PSR Equipment for our valued customers. By extending this promise we show that we at PSR Equipment always care for your kitchen needs. It is a promise that ensures complete freedom from all worries related to our product.
              </p>
              
              <p className="mb-5 font-semibold text-brand-navy">
                The PSR Kitchen Promise Program ensures that we are always there at each step.
              </p>

              <p className="mb-8">
                Just pick up a phone, and we are there at your service. We ensure smooth functioning of your product, through assured maintenance visits. Our absolutely genuine spares assurance means that you no longer need to worry over spares!
              </p>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <Link to="/contact" className="btn-primary">
                  Send Enquiry
                </Link>
                <Link to="/contact" className="px-6 py-3 rounded-lg font-bold border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-32">
              <h3 className="bg-brand-navy text-white px-6 py-4 font-heading font-bold uppercase tracking-wider text-sm">
                Services
              </h3>
              <ul className="divide-y divide-gray-100">
                {serviceCategories.map((cat, i) => {
                  const isActive = location.pathname === cat.href;
                  return (
                    <li key={i}>
                      <Link
                        to={cat.href}
                        className={`block px-6 py-3.5 text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-brand-orange bg-brand-orange/5 border-l-4 border-brand-orange'
                            : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        {cat.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
