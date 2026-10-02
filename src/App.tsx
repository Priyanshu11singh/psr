import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductCategory = lazy(() => import('./pages/ProductCategory'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Consultancy = lazy(() => import('./pages/Consultancy'));
const LayoutDesigning = lazy(() => import('./pages/LayoutDesigning'));
const LpgPipeline = lazy(() => import('./pages/LpgPipeline'));
const ExhaustDucting = lazy(() => import('./pages/ExhaustDucting'));
const FreshAir = lazy(() => import('./pages/FreshAir'));
const Amc = lazy(() => import('./pages/Amc'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/services/layout-design" element={<LayoutDesigning />} />
            <Route path="/services/lpg-pipeline" element={<LpgPipeline />} />
            <Route path="/services/exhaust-ducting" element={<ExhaustDucting />} />
            <Route path="/services/fresh-air" element={<FreshAir />} />
            <Route path="/services/amc" element={<Amc />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
