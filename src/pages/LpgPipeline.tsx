import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Layout Designing & Kitchen Solutions", href: "/services/layout-design" },
  { label: "L.P.G Pipeline Designing & Installation", href: "/services/lpg-pipeline" },
  { label: "Exhaust System Ducting", href: "/services/exhaust-system" },
  { label: "Fresh Air Supply System", href: "/services/fresh-air" },
  { label: "AMC", href: "/services/amc" },
];

export default function LpgPipeline() {
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
            L.P.G Pipeline Designing & Installation
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
            <span className="text-brand-orange">L.P.G Pipeline</span>
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
              <p className="mb-6 text-xl font-medium text-brand-navy border-l-4 border-brand-orange pl-4">
                L.P.G is the necessity of every Kitchen.
              </p>
              
              <p className="mb-5">
                Ensuring a standardized L.P.G pipeline in the Kitchen is the main objective of PSR Equipment's Installation team. L.P.G Pipeline Installation needs an experienced workforce in order to maintain the Safety of the Kitchen & its equipments.
              </p>
              
              <p className="mb-5">
                PSR Equipment has its own specialized L.P.G Pipeline Installation team who ensures proper fitting as per ISI standards & safety of the kitchen environment.
              </p>
              
              <p className="mb-8">
                We use the best quality branded C-class pipelines, pressure regulators, valves, and other supporting components ensuring the safety norms.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
                <h4 className="text-lg font-heading font-bold text-brand-navy mb-4">SHOW IN PROCESS</h4>
                <ul className="space-y-3">
                  {[
                    "Estimating the gas consumption of the kitchen equipments at peak load.",
                    "Visiting the site to determine technical & practical implementation of L.P.G Pipelines.",
                    "Creating the detailed CAD layout of pipeline showing all required stations where L.P.G pipeline will be available in the kitchen."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
