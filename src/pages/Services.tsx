import { Link } from 'react-router-dom';

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
            { title: "Commercial Kitchen Consulting", desc: "Future-proofing operations with AI-driven spatial design and next-gen workflow optimization.", link: "/services/consultancy" },
            { title: "Layout Designing & Kitchen Solutions", desc: "Orchestrating optimal spatial flow and operational geometry for the next generation of hospitality infrastructure.", link: "/services/layout-design" },
            { title: "L.P.G Pipeline Designing & Installation", desc: "Ensuring a standardized and perfectly safe L.P.G pipeline network in the Kitchen.", link: "/services/lpg-pipeline" },
            { title: "Exhaust System Ducting", desc: "Modern exhaust hoods with suppression systems to ensure a healthy working atmosphere.", link: "/services/exhaust-ducting" },
            { title: "Fresh Air Supply System", desc: "Providing comfortable, energy-efficient, and safe indoor environments with advanced replacement air.", link: "/services/fresh-air" },
            { title: "AMC (Annual Maintenance Contract)", desc: "Scheduled service plans and complete freedom from worries related to your product.", link: "/services/amc" },
            { title: "Installation & Commissioning", desc: "Expert on-site setup ensuring your new machinery is integrated seamlessly into your production line." },
            { title: "Spare Parts Dispatch", desc: "Global warehousing ensures critical replacement parts reach your facility within 24 hours." },
            { title: "Custom Fabrication", desc: "Tailored engineering solutions modifying existing machinery or building entirely new systems from scratch." }
          ].map((srv, i) => {
            return srv.link ? (
              <Link to={srv.link} key={i} className="card p-8 group block hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{srv.title}</h3>
                <p className="text-brand-gray leading-relaxed">{srv.desc}</p>
              </Link>
            ) : (
              <div key={i} className="card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">{srv.title}</h3>
                <p className="text-brand-gray leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
