import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import singleBurnerImg from '../assets/product/single-burner.webp';
import doubleBurnerImg from '../assets/product/double-burner.webp';
import threeBurnerImg from '../assets/product/3burner.webp';
import burnerRangeImg from '../assets/product/burner-range.webp';
import chineseImg from '../assets/product/chinese.webp';
import chapattiImg from '../assets/product/chapatti.webp';
import griddlePlateImg from '../assets/product/griddle-plate.webp';
import doubleDeepFatFryerImg from '../assets/product/double-deep-fat fryer.webp';
import salamanderImg from '../assets/product/salamander.webp';
import hotDogTrolleyImg from '../assets/product/hot-dog-trolley.webp';
import masalaTrolleyImg from '../assets/product/masala.webp';
import platformTrolleyImg from '../assets/product/platform-trolley20200415421.webp';
import bussingCartImg from '../assets/product/bussing-cart20200415425.webp';
import teaServiceTrolleyImg from '../assets/product/tea-service-trolley20200415430.webp';
import luggageTrolleyImg from '../assets/product/luggage-trolley20200415435.webp';
import gnPanTrolleyImg from '../assets/product/gn-pan-trolley20200415450.webp';
import plateRack1Img from '../assets/product/plate-rack120200415455.webp';
import trayRackTrolleyImg from '../assets/product/tray-rack-trolley20200415457.webp';
import cleanDishRackImg from '../assets/product/clean-dish-rack20200415501.webp';
import aluminumRackImg from '../assets/product/aluminum-rack20200415505.webp';
import potRackImg from '../assets/product/pot-rack20200415509.webp';
import vegetableRackImg from '../assets/product/vegetable-rack20200415511.webp';
import plateRack2Img from '../assets/product/plate-rack20200415519.webp';
import storageRackImg from '../assets/product/storage-rack20200415525.webp';
import islandSuitesSideAImg from '../assets/product/island-suites-side-a.jpg';
import islandSuitesSideBImg from '../assets/product/island-suites-side-b.jpg';
import islandSuitesNewSideAImg from '../assets/product/island-suites-new-side-a.jpg';
import islandSuitesNewSideBImg from '../assets/product/island-suites-new-side-b.jpg';

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

export const trolleyRacksProducts = [
  { name: 'Hot Dog Trolley', image: hotDogTrolleyImg },
  { name: 'Masala Trolley', image: masalaTrolleyImg },
  { name: 'Platform Trolley', image: platformTrolleyImg },
  { name: 'Bussing Cart', image: bussingCartImg },
  { name: 'Tea Service Trolley', image: teaServiceTrolleyImg },
  { name: 'Luggage Trolley', image: luggageTrolleyImg },
  { name: 'GN Pan Trolley', image: gnPanTrolleyImg },
  { name: 'Plate Rack', image: plateRack1Img },
  { name: 'Tray Rack Trolley', image: trayRackTrolleyImg },
  { name: 'Clean Dish Rack', image: cleanDishRackImg },
  { name: 'Aluminium Rack', image: aluminumRackImg },
  { name: 'Pot Rack', image: potRackImg },
  { name: 'Vegetable Rack', image: vegetableRackImg },
  { name: 'Plate Rack', image: plateRack2Img },
  { name: 'Storage Rack', image: storageRackImg },
];

export const islandKitchenProducts = [
  { name: 'Island Suites Side-A', image: islandSuitesSideAImg },
  { name: 'Island Suites Side-B', image: islandSuitesSideBImg },
  { name: 'Island Suites New Series Side-A', image: islandSuitesNewSideAImg },
  { name: 'Island Suites New Series Side-B', image: islandSuitesNewSideBImg },
];

export default function ProductCategory() {
  const { category } = useParams();
  const location = useLocation();

  // Format category string (e.g. 'cooking' -> 'Cooking Equipment')
  const currentCategory = categories.find(c => c.href.includes(category || '')) ||
    { label: category?.replace(/-/g, ' ') || 'Products', href: '#' };

  let displayedProducts = [];
  if (category === 'trolley-racks') {
    displayedProducts = trolleyRacksProducts;
  } else if (category === 'island-kitchen') {
    displayedProducts = islandKitchenProducts;
  } else {
    displayedProducts = cookingProducts;
  }

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
              {displayedProducts.map((product, idx) => (
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
