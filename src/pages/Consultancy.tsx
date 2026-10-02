import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Consultancy() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Commercial Kitchen Planning & Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Future-proofing your culinary operations with AI-driven spatial design, IoT integration, and next-generation workflow optimization for 2026 and beyond.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-brand-gray"
            >
              <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Navigating the Future of Foodservice</h2>
              <p className="mb-6">
                Ready to establish or upgrade your commercial kitchen, but unsure how to integrate the rapid technological shifts of the mid-2020s? We can help. We understand that in 2026, a foodservice establishment is no longer just a room with equipment—it is a highly calibrated, data-driven ecosystem. 
              </p>
              <p className="mb-8">
                Equipped with decades of legacy experience combined with cutting-edge spatial analytics, our senior commercial kitchen consultants design customized environments that exceed modern standards of energy efficiency, automated quality control, and strict global compliance.
              </p>

              <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Our Modern Delivery Methodology</h3>
              <p className="mb-6">
                Creating a successful commercial kitchen layout today requires blending solid ergonomic principles with smart-kitchen components. We focus on hybrid operations—balancing human-centric design with robotics integration, smart cold storage tracking, and algorithmic service movements for commissary, finishing kitchens, and cloud-kitchen concepts.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h4 className="text-xl font-heading font-bold text-brand-navy mb-6">How We Plan Your Setup:</h4>
                <ul className="space-y-4">
                  {[
                    "Predictive needs assessment using spatial AI modeling",
                    "Conceptualizing hybrid layouts for human and automated workflow",
                    "Advanced plumbing, thermodynamic heating, and energy recovery systems",
                    "Circadian rhythm and task-specific intelligent lighting options",
                    "Sustainable, antimicrobial, and nano-coated kitchen materials",
                    "Procurement of IoT-enabled, next-gen smart equipment",
                    "Turnkey execution with real-time digital twin monitoring"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-brand-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-4">Ready to Start?</h3>
              <p className="text-brand-gray mb-6">Speak with our senior consultants to map out your next-generation kitchen infrastructure.</p>
              <Link to="/contact" className="btn-primary w-full flex justify-center items-center gap-2">
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-brand-navy rounded-2xl shadow-sm p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-orange/10 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-heading font-bold mb-4 relative z-10">Download Our 2026 Vision Brochure</h3>
              <p className="text-white/80 mb-6 relative z-10 text-sm">Explore our latest methodologies in sustainable and automated kitchen designs.</p>
              <button className="border border-white/30 hover:bg-white hover:text-brand-navy text-white px-6 py-3 rounded-lg font-medium transition-colors w-full relative z-10">
                Download PDF
              </button>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
