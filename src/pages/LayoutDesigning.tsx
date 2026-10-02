import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const serviceCategories = [
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Layout Designing & Kitchen Solutions", href: "/services/layout-design" },
  { label: "L.P.G Pipeline Designing & Installation", href: "/services/lpg-pipeline" },
  { label: "Exhaust System Ducting", href: "/services/exhaust-system" },
  { label: "Fresh Air Supply System", href: "/services/fresh-air" },
  { label: "AMC", href: "/services/amc" },
];

export default function LayoutDesigning() {
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
            Layout Designing & Kitchen Solutions
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
            <span className="text-brand-orange">Layout Designing</span>
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
                Kitchen is the heart of the Hospitality Industry.
              </p>
              
              <p className="mb-5">
                Proper Kitchen Planning & Layout Designing is a major concern before the execution of the kitchen starts. The kitchen's layout must ensure the best space utilization along with the easy movement of moveable equipment in the kitchen corridors.
              </p>
              
              <p className="mb-5">
                PSR Equipment's design team works hard over the layout designing of every project in order to ensure the practical implementation of equipment in the space provided.
              </p>
              
              <p className="mb-5">
                Our Design Team has the main aim to make proper utilization of space so that every section of the kitchen avails enough space to perform operations with ease.
              </p>
              
              <p className="mb-8">
                Every kitchen has an optimal workflow. With the help of skilled kitchen designers, we can design custom kitchen environments based on operational needs and the unique needs of a chef's menu. The result is more efficient, more fluid kitchens where inspiration thrives.
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
