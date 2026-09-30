import { motion } from 'framer-motion';
import { Target, Clock, Users, ClipboardCheck, Eye, Cpu, type LucideIcon } from 'lucide-react';
import whyImage from '../assets/images/why.webp';

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Precision engineering",
    description:
      "Every component is machined to ±0.01mm tolerance and verified through first-article inspection before it leaves the shop floor.",
    icon: Target,
  },
  {
    title: "On-time, on-budget delivery",
    description:
      "94% of orders ship within 48 hours of the confirmed date — the same figure we lock into your contract at sign-off.",
    icon: Clock,
  },
  {
    title: "One engineer, start to finish",
    description:
      "A single technical contact stays assigned to your account from quotation through commissioning. No call-centre handoffs.",
    icon: Users,
  },
  {
    title: "We walk the floor before we quote",
    description:
      "Layout, load capacity, and utility requirements get mapped on-site before a single machine is specified.",
    icon: ClipboardCheck,
  },
  {
    title: "A shared project log",
    description:
      "Fabrication stage, QC checkpoints, and shipping status are visible to you in real time, updated at every milestone.",
    icon: Eye,
  },
  {
    title: "5-axis CNC, in-house metrology",
    description:
      "Robotic welding cells and calibrated measurement labs keep tolerances tight without adding to your lead time.",
    icon: Cpu,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left: image panel with integrated heading + annotation callouts */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[440px] lg:sticky lg:top-8 lg:self-start lg:h-[620px] overflow-hidden"
        >
          <img
            src={whyImage}
            alt="CNC machining in progress at a PSR Equipment production facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08386E] via-[#08386E]/30 to-transparent" />

          {/* datum / registration marks — technical drawing motif */}
          <div className="absolute top-6 left-6 w-4 h-4 border border-white/50 rounded-full flex items-center justify-center">
            <div className="w-px h-2 bg-white/50 absolute" />
            <div className="h-px w-2 bg-white/50 absolute" />
          </div>
          <div className="absolute bottom-6 right-6 w-4 h-4 border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-px h-2 bg-white/30 absolute" />
            <div className="h-px w-2 bg-white/30 absolute" />
          </div>

          {/* annotation callouts with leader lines */}
          <div className="hidden md:flex absolute top-16 right-8 items-center gap-2">
            <span className="font-mono text-[11px] tracking-wide text-white/90 bg-[#08386E]/60 backdrop-blur-sm px-2 py-1 rounded-sm">
              ±0.01mm tolerance
            </span>
            <div className="w-8 h-px bg-white/60" />
          </div>
          <div className="hidden md:flex absolute bottom-28 left-8 items-center gap-2">
            <div className="w-8 h-px bg-white/60" />
            <span className="font-mono text-[11px] tracking-wide text-white/90 bg-[#08386E]/60 backdrop-blur-sm px-2 py-1 rounded-sm">
              ISO 9001:2015 certified
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl leading-[1.1] max-w-sm">
              Why manufacturers choose PSR
            </h2>
          </div>
        </motion.div>

        {/* Right: reasons as spec-plate rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 md:px-12 py-12 lg:py-8"
        >
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className={`group flex items-start gap-5 py-6 transition-colors duration-300 hover:bg-[#F1F5F9]/60 -mx-4 px-4 rounded-sm ${idx !== reasons.length - 1 ? 'border-b border-[#E2E8F0]' : ''
                }`}
            >
              {/* icon plate — cut top-right corner echoes the PSR logo's angled geometry */}
              <div
                className="flex-shrink-0 w-12 h-12 bg-[#0B4DA2] group-hover:bg-[#F58220] transition-colors duration-300 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                }}
              >
                <reason.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#0B4DA2] text-lg mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-md">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}