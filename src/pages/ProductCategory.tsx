import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, ArrowRight } from 'lucide-react';
import singleBurnerImg from '../assets/product/single-burner.webp';
import doubleBurnerImg from '../assets/product/double-burner.webp';
import threeBurnerImg from '../assets/product/3burner.webp';
import burnerRangeImg from '../assets/product/burner-range.webp';
import chineseImg from '../assets/product/chinese.webp';
import chapattiImg from '../assets/product/chapatti.webp';
import griddlePlateImg from '../assets/product/griddle-plate.webp';
import doubleDeepFatFryerImg from '../assets/product/double-deep-fat fryer.webp';
import salamanderImg from '../assets/product/salamander.webp';
const categories = [
  { label: "Cooking Equipment", href: "/products/cooking" },
  { label: "Refrigeration Equipment", href: "/products/refrigeration" },
  { label: "Table & Sinks", href: "/products/table-sinks" },
  { label: "Trolley & Racks", href: "/products/trolley-racks" },
  { label: "Display Cabinets", href: "/products/display-cabinets" },
  { label: "Preparation Equipment", href: "/products/preparation" },
  { label: "Island Kitchen", href: "/products/island-kitchen" },
  { label: "Exhaust Equipment", href: "/products/exhaust" },
  { label: "Imported Products", href: "/products/imported" },
];

export const cookingProducts = [
  { name: 'Single Burner', image: singleBurnerImg },
  { name: 'Double Burner', image: doubleBurnerImg },
  { name: '3 Burner Range', image: threeBurnerImg },
  { name: '4 Burner Range With Oven', image: burnerRangeImg },
  { name: 'Chinese Range', image: chineseImg },
  { name: 'Chapatti Plate With Puffer', image: chapattiImg },
  { name: 'Griddle Plate', image: griddlePlateImg },
  { name: 'Double Deep Fat Fryer', image: doubleDeepFatFryerImg },
  { name: 'Salamander', image: salamanderImg },
];

export default function ProductCategory() {
  const { category } = useParams();
  const location = useLocation();

  // Format category string (e.g. 'cooking' -> 'Cooking Equipment')
  const currentCategory = categories.find(c => c.href.includes(category || '')) ||
    { label: category?.replace(/-/g, ' ') || 'Products', href: '#' };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Inner Banner */}
      <section className="bg-brand-navy py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container-custom relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 capitalize"
          >
            {currentCategory.label}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-sm font-medium text-white/70"
          >
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-brand-orange transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-orange">{currentCategory.label}</span>
          </motion.nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Grid Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cookingProducts.map((product, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 6) * 0.05 }}
                  key={idx}
                >
                  <Link
                    to={`/products/${category}/${product.name.toLowerCase().replace(/ /g, '-')}`}
                    className="block bg-white border border-gray-100 p-4 rounded-xl hover:shadow-xl hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative flex items-center justify-center p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center pb-2">
                      <h4 className="text-[#0e509a] font-bold text-sm md:text-base group-hover:text-brand-orange transition-colors leading-snug">
                        {product.name}
                      </h4>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <h3 className="bg-brand-navy text-white px-6 py-4 font-heading font-bold uppercase tracking-wider text-sm">
                Product Categories
              </h3>
              <ul className="divide-y divide-gray-100">
                {categories.map((cat, i) => {
                  const isActive = location.pathname.includes(cat.href);
                  return (
                    <li key={i}>
                      <Link
                        to={cat.href}
                        className={`block px-6 py-3.5 text-sm font-medium transition-colors ${isActive
                            ? 'text-brand-orange bg-brand-orange/5 border-l-4 border-brand-orange'
                            : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50 border-l-4 border-transparent'
                          }`}
                      >
                        {cat.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Download Brochure CTA */}

          </aside>

        </div>
      </section>
    </div>
  );
}
