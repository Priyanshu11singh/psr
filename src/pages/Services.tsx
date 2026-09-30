export default function Services() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-navy text-brand-white py-20 angled-bottom mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Services & Maintenance</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto">
            Comprehensive support to keep your operations running at peak efficiency.
          </p>
        </div>
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Installation & Commissioning", desc: "Expert on-site setup ensuring your new machinery is integrated seamlessly into your production line." },
            { title: "Preventative Maintenance", desc: "Scheduled service plans designed to minimize downtime and extend equipment lifespan." },
            { title: "Spare Parts Dispatch", desc: "Global warehousing ensures critical replacement parts reach your facility within 24 hours." },
            { title: "Custom Fabrication", desc: "Tailored engineering solutions modifying existing machinery or building entirely new systems from scratch." }
          ].map((srv, i) => (
            <div key={i} className="card p-8">
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">{srv.title}</h3>
              <p className="text-brand-gray leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
