import { Link } from 'react-router-dom';
import { Settings, Cog, Zap } from 'lucide-react';

const products = [
  { id: 'cnc-alpha-500', name: 'Alpha 500 CNC Mill', category: 'CNC Machining', icon: Cog },
  { id: 'titan-press-x', name: 'Titan Press X', category: 'Custom Fabrication', icon: Zap },
  { id: 'omni-lifter-pro', name: 'Omni Lifter Pro', category: 'Material Handling', icon: Settings },
];

export default function Products() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-navy text-brand-white py-20 angled-bottom mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Machinery Catalog</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto">
            Browse our comprehensive range of high-performance industrial equipment.
          </p>
        </div>
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="card block group">
              <div className="aspect-video bg-brand-light flex items-center justify-center p-8">
                 <p.icon className="w-16 h-16 text-brand-gray/30 group-hover:text-brand-orange transition-colors" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2 block">{p.category}</span>
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">{p.name}</h3>
                <p className="text-sm text-brand-gray mb-4">Precision engineered for maximum throughput and reliability.</p>
                <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors flex items-center gap-1">
                  View Specs &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
