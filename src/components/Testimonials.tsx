import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import jamesImage from '../assets/images/james.webp';
import sophiaImage from '../assets/images/sophia.webp';
import mustafaImage from '../assets/images/mustafa-ali.webp';
import nagmaImage from '../assets/images/nagma.webp';
import nawazImage from '../assets/images/nawaz-akhtar.webp';
import operationsImage from '../assets/images/operations.webp';
import manufacturingImage from '../assets/images/manufacturing.webp';
import firmImage from '../assets/images/firm.webp';
import automationImage from '../assets/images/automation.webp';
import energyImage from '../assets/images/energy.webp';


type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  photoUrl: string;
  featuredImage: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "PSR Equipment's CNC machines have run flawlessly for three years with minimal downtime. Their engineering precision speaks for itself.",
    name: "James Anderson",
    title: "Plant Operations Manager",
    company: "Automotive Components Mfg",
    photoUrl: jamesImage,
    featuredImage: operationsImage,
    rating: 5
  },
  {
    id: 2,
    quote: "From initial consultation to installation, PSR's team understood our production goals and delivered equipment that exceeded spec.",
    name: "Sophia Martinez",
    title: "Head of Manufacturing",
    company: "Aerospace Parts Supplier",
    photoUrl: sophiaImage,
    featuredImage: manufacturingImage,
    rating: 5
  },
  {
    id: 3,
    quote: "What sets PSR apart is their after-sales support. Spare parts and maintenance response times are unmatched in the industry.",
    name: "Mustafa Ali",
    title: "Technical Director",
    company: "Industrial Fabrication Firm",
    photoUrl: mustafaImage,
    featuredImage: firmImage,
    rating: 5
  },
  {
    id: 4,
    quote: "We scaled our production line with PSR's automation systems and saw a measurable efficiency gain within the first quarter.",
    name: "Nagma Khan",
    title: "VP of Operations",
    company: "Electronics Manufacturer",
    photoUrl: nagmaImage,
    featuredImage: automationImage,
    rating: 5
  },
  {
    id: 5,
    quote: "PSR Equipment brought both technical expertise and genuine partnership to a complex plant upgrade. Highly recommended.",
    name: "Nawaz Akhtar",
    title: "Chief Engineer",
    company: "Energy Sector Client",
    photoUrl: nawazImage,
    featuredImage: energyImage,
    rating: 5
  }
];

// Custom hook for Carousel Logic
function useCarousel(length: number, intervalMs = 6000) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
  }, [index]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, next, intervalMs]);

  return { index, direction, next, prev, goTo, setIsPaused };
}

// Subcomponents
const CarouselControls = ({ onPrev, onNext }: { onPrev: () => void, onNext: () => void }) => (
  <div className="flex items-center gap-4 mt-8 md:mt-12">
    <button
      onClick={onPrev}
      aria-label="Previous testimonial"
      className="w-12 h-12 rounded-full border-2 border-[#0B4DA2] flex items-center justify-center text-[#0B4DA2] hover:bg-[#F58220] hover:border-[#F58220] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] focus-visible:ring-offset-2"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={onNext}
      aria-label="Next testimonial"
      className="w-12 h-12 rounded-full border-2 border-[#0B4DA2] flex items-center justify-center text-[#0B4DA2] hover:bg-[#F58220] hover:border-[#F58220] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] focus-visible:ring-offset-2"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
);

const DotIndicators = ({ count, current, onChange }: { count: number, current: number, onChange: (idx: number) => void }) => (
  <div className="flex items-center gap-2 mt-8 md:mt-12">
    {Array.from({ length: count }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onChange(idx)}
        aria-label={`Go to slide ${idx + 1}`}
        className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] focus-visible:ring-offset-2 ${idx === current ? 'w-8 bg-[#F58220]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
          }`}
      />
    ))}
  </div>
);

// Animation Variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  })
};

export default function Testimonials() {
  const { index, direction, next, prev, goTo, setIsPaused } = useCarousel(testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-[#F1F5F9] relative overflow-hidden z-10">
      {/* Decorative SVG Motif */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px]">
          <ellipse cx="50" cy="50" rx="48" ry="15" stroke="#0B4DA2" strokeWidth="0.5" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="48" ry="15" stroke="#0B4DA2" strokeWidth="0.5" transform="rotate(30 50 50)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="inline-block text-xs md:text-sm font-bold text-[#F58220] uppercase tracking-[0.2em] mb-4">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0B4DA2] mb-6">
            Trusted by Manufacturers Worldwide
          </h2>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-sans">
            Hear directly from the plant managers, engineers, and operations leaders who rely on PSR Equipment for their production lines.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="relative h-auto md:h-[500px] w-full flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">

                  {/* Left Column: Quote */}
                  <div className="md:col-span-7 relative" aria-live="polite">
                    {/* Oversized Quote SVG */}
                    <div className="absolute -top-10 -left-6 text-[#F58220] opacity-10 select-none z-0">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.41 14.591C16.924 13.25 17.514 11.531 17.514 9.875C17.514 6.75 15.394 5 12.875 5C10.021 5 7.854 7.271 7.854 10.125C7.854 12.979 9.875 15.104 12.562 15.104C12.875 15.104 13.125 15.062 13.333 15.021L11.52 21H14.017ZM6.163 21L8.556 14.591C9.07 13.25 9.66 11.531 9.66 9.875C9.66 6.75 7.54 5 5.021 5C2.167 5 0 7.271 0 10.125C0 12.979 2.021 15.104 4.708 15.104C5.021 15.104 5.271 15.062 5.479 15.021L3.667 21H6.163Z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < testimonials[index].rating ? 'text-[#F58220] fill-[#F58220]' : 'text-gray-300 fill-gray-300'}`} />
                        ))}
                      </div>

                      <motion.blockquote
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-heading font-semibold text-[#0F172A] leading-tight mb-8"
                      >
                        "{testimonials[index].quote}"
                      </motion.blockquote>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={testimonials[index].photoUrl}
                          alt={testimonials[index].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-[#0B4DA2] text-lg">{testimonials[index].name}</h4>
                          <p className="text-[#64748B] text-sm md:text-base">
                            {testimonials[index].title}, <span className="font-medium text-[#0F172A]">{testimonials[index].company}</span>
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Column: Featured Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="hidden md:block md:col-span-5 h-[300px] md:h-[400px] w-full"
                  >
                    <img
                      src={testimonials[index].featuredImage}
                      alt="Facility"
                      className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-100"
                    />
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
            <DotIndicators count={testimonials.length} current={index} onChange={goTo} />
            <CarouselControls onPrev={prev} onNext={next} />
          </div>

        </div>
      </div>
    </section>
  );
}
