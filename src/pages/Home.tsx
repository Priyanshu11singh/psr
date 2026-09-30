import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Settings, Factory, Cog, Building, ChefHat, PlusSquare, GraduationCap, Briefcase
} from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import centralParkLogo from '../assets/logo/central-park.webp';
import esicLogo from '../assets/logo/esic.webp';
import fortisLogo from '../assets/logo/fortis.webp';
import jaypeeLogo from '../assets/logo/jaypee.webp';
import nandosLogo from '../assets/logo/nandos.webp';

const clientLogos = [
  { name: 'Central Park', src: centralParkLogo },
  { name: 'ESIC', src: esicLogo },
  { name: 'Fortis', src: fortisLogo },
  { name: 'Jaypee', src: jaypeeLogo },
  { name: 'Nandos', src: nandosLogo }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="pt-20 lg:pt-0">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST BAR */}
      <section className="py-16 border-b border-brand-gray/10 bg-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">Our Esteemed Clients</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy">Trusted by Industry Leaders Worldwide</h2>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full group">
          {/* Gradient Edges for smooth fade in/out */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex flex-nowrap items-center gap-10 md:gap-20 w-max pl-10 md:pl-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {/* We duplicate the logos array 4 times to ensure seamless infinite scroll even on wide screens */}
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-32 md:w-44 h-24 flex items-center justify-center group/logo bg-white rounded-xl p-4 hover:shadow-xl hover:shadow-brand-orange/10 border border-transparent hover:border-brand-gray/10 transition-all duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500 group-hover/logo:scale-110" 
                  loading="lazy" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
                Decades of excellence in manufacturing.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-brand-gray/80 text-lg mb-6 leading-relaxed">
                Since 1998, PSR Equipment has been at the forefront of industrial innovation. Our machinery powers the production lines of the world's most demanding sectors—delivering uncompromising precision, reliability, and efficiency.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  Learn more about our legacy <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "10k+", label: "Machines Delivered" },
                { number: "45", label: "Countries Served" },
                { number: "24/7", label: "Global Support" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-light p-8 rounded-lg border border-brand-gray/10 text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold tracking-wide text-brand-gray uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="section-padding bg-brand-light angled-top angled-bottom relative z-10 pb-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Core Capabilities</h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">Explore our extensive range of industrial machinery designed for optimal performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cog, title: "CNC Machining", desc: "High-precision automated milling and turning centers." },
              { icon: Factory, title: "Material Handling", desc: "Conveyors, lifters, and automated storage systems." },
              { icon: Settings, title: "Manufacturing Automation", desc: "Robotics and integrated assembly line solutions." },
              { icon: Zap, title: "Custom Fabrication", desc: "Tailored equipment built to your exact specifications." },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 group cursor-pointer bg-brand-white"
              >
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-brand-white transition-colors duration-300">
                  <cat.icon className="w-7 h-7 text-brand-navy group-hover:text-brand-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">{cat.title}</h3>
                <p className="text-brand-gray/80 text-sm mb-6">{cat.desc}</p>
                <span className="text-sm font-semibold text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Category <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 7. INDUSTRIES SERVED - 2026 NEXT-GEN DESIGN */}
      <section className="relative section-padding bg-[#051124] overflow-hidden text-center z-10">
        {/* Animated Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0B4DA2]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-blue-200/70 text-lg max-w-2xl mx-auto font-medium">
              Providing specialized equipment configurations tailored to the rigorous demands of key sectors.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {[
              { 
                title: "Hotels",
                icon: Building,
                desc: "Chefs are delighted to work with advanced & durable equipment. PSR Equipment has taken this challenge to provide a wide range of equipment that is precisely manufactured keeping in mind every need in a commercial kitchen setup."
              },
              {
                title: "Restaurants",
                icon: ChefHat,
                desc: "Our team of experts created a list of essential restaurant equipment, so you can be sure that all of your bases are covered when planning your kitchen with us."
              },
              {
                title: "Hospitals",
                icon: PlusSquare,
                desc: "PSR Equipment has proved its excellence as the manufacturer of kitchen equipment for both Government & Private Hospitals all over the country. PSR offers a full range of commercial kitchen equipment for the healthcare industry."
              },
              {
                title: "Educational Institutions",
                icon: GraduationCap,
                desc: "Educational institutions, a place of utmost diversity. Different backgrounds, different tastes demand an extensive food cuisines. PSR specialises in planning a..."
              },
              {
                title: "Industrial Canteens",
                icon: Factory,
                desc: "Food-serving counters/ stalls or booths, either in a line or allowing arbitrary walking paths. Customers take the food that they desire as they walk along, placing it on a..."
              },
              {
                title: "Other Industries",
                icon: Briefcase,
                desc: "PSR's market leadership in India is a result of our persistence and dedication in satisfying the needs of our potential customers coming from different..."
              }
            ].map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-default"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B4DA2]/30 to-[#F58220]/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#F58220]/30 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(11,77,162,0.1)] group-hover:shadow-[0_0_30px_rgba(245,130,32,0.2)]">
                    <ind.icon className="w-8 h-8 text-blue-300 group-hover:text-[#F58220] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                    {ind.title}
                  </h3>
                  
                  <p className="text-blue-200/60 text-sm md:text-base leading-relaxed group-hover:text-blue-200/90 transition-colors duration-500">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. CTA BANNER */}
      <section className="py-24 bg-brand-orange text-brand-navy relative overflow-hidden">
        <motion.div 
          className="absolute -left-20 -bottom-20 w-64 h-64 border-[30px] border-brand-navy/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to upgrade your production line?</h2>
          <p className="text-brand-navy/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Consult with our engineering team today to find the perfect machinery configuration for your facility's needs.
          </p>
          <Link to="/contact" className="btn-primary bg-brand-navy text-brand-white hover:bg-brand-dark shadow-xl hover:shadow-2xl">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
