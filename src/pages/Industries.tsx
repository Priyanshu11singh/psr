import { Factory, Building2, Battery, Cpu } from 'lucide-react';

export default function Industries() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-navy text-brand-white py-20 angled-bottom mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto">
            Specialized solutions for the world's most demanding manufacturing sectors.
          </p>
        </div>
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: Factory, name: "Automotive", desc: "High-volume assembly and precision machining for modern vehicle manufacturing." },
            { icon: Building2, name: "Construction & Heavy Duty", desc: "Rugged equipment built to fabricate structural steel and heavy components." },
            { icon: Battery, name: "Energy Sector", desc: "Specialized machinery for oil, gas, and renewable energy component production." },
            { icon: Cpu, name: "Electronics & Semiconductor", desc: "Ultra-precise material handling and automated assembly for delicate components." }
          ].map((ind, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-16 h-16 shrink-0 bg-brand-light rounded-lg flex items-center justify-center text-brand-orange">
                <ind.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-3">{ind.name}</h3>
                <p className="text-brand-gray leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
