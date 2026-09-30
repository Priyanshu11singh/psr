import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../assets/images/hero-video.mp4';

const slides = [
  { lineOne: "Leading Manufacturer of", lineTwo: "Industrial Machinery" },
  { lineOne: "Precision Engineering for", lineTwo: "Modern Industry" },
  { lineOne: "Most Advanced &", lineTwo: "Most Durable" },
  { lineOne: "Artisans in Industrial", lineTwo: "Equipment Manufacturing" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay Layer */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(11, 77, 162, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)'
        }}
      />

      {/* Decorative Orbit-Swoosh SVG */}


      {/* Content Layer */}
      <div className="container-custom relative z-20 w-full pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rotating Headline */}
          <div className="h-[140px] md:h-[180px] lg:h-[220px] relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
                  <span className="block text-white mb-2">{slides[currentSlide].lineOne}</span>
                  <span className="block text-[#F58220]">{slides[currentSlide].lineTwo}</span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Engineering reliability into every machine we build — from precision CNC to full production line automation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F58220] hover:bg-[#D66C0F] text-[#08386E] font-bold rounded-md text-lg transition-colors text-center"
            >
              Plan Your Project
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#08386E] font-bold rounded-md text-lg transition-colors text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#F58220] w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
