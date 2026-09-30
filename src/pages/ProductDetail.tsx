import { useParams, Link } from 'react-router-dom';
import { cookingProducts } from './ProductCategory';

export default function ProductDetail() {
  const { category, slug } = useParams();

  // Find the product data based on the slug
  const product = cookingProducts.find(
    (p) => p.name.toLowerCase().replace(/ /g, '-') === slug
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom pt-8">
        <Link to={`/products/${category}`} className="text-sm text-brand-orange font-semibold hover:underline mb-8 inline-block">
          &larr; Back to {category?.replace(/-/g, ' ') || 'Products'}
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white aspect-square rounded-xl flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden p-6">
            {product ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
              />
            ) : (
              <span className="text-brand-gray/50 font-heading text-xl">Product Image ({slug})</span>
            )}
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4 capitalize">
              {slug?.replace(/-/g, ' ')}
            </h1>
            <p className="text-lg text-brand-gray mb-8">
              Advanced industrial solution designed to elevate your production line's efficiency, precision, and overall output.
            </p>
            
            <h3 className="text-xl font-heading font-bold text-brand-navy mb-4">Technical Specifications</h3>
            <table className="w-full text-left border-collapse mb-8">
              <tbody>
                {[
                  { label: "Power Requirement", val: "480V 3-Phase" },
                  { label: "Footprint (WxD)", val: "120in x 80in" },
                  { label: "Max Capacity", val: "5,000 lbs" },
                  { label: "Control Interface", val: "15-inch Touch HMI" },
                  { label: "Certifications", val: "CE, ISO 9001, UL" },
                ].map((spec, i) => (
                  <tr key={i} className="border-b border-brand-gray/20">
                    <th className="py-3 text-brand-navy font-semibold">{spec.label}</th>
                    <td className="py-3 text-brand-gray">{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link to="/contact" className="btn-primary w-full md:w-auto">Request a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
