import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Settings className="w-20 h-20 text-brand-orange mx-auto mb-6 animate-spin-slow" />
        <h1 className="text-5xl font-heading font-bold text-brand-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Page Not Found</h2>
        <p className="text-brand-gray mb-8">The requested page does not exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
