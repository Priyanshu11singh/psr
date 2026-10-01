import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Check, ArrowRight, ChevronRight, ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

interface FooterLink {
  label: string;
  to: string;
}

const highlights: string[] = [
  'Quality Products',
  'Durable & Reliable',
  'Customized Solutions',
  'On-Time Delivery',
];

const quickLinks: FooterLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

const productLinks: FooterLink[] = [
  { label: 'Commercial Kitchen Equipment', to: '/products' },
  { label: 'Cooking Equipment', to: '/products/cooking' },
  { label: 'Refrigeration Equipment', to: '/products/refrigeration' },
  { label: 'Stainless Steel Equipment', to: '/products/table-sinks' },
  { label: 'Kitchen Storage & Racks', to: '/products/trolley-racks' },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h4 className="font-heading font-bold text-lg text-white">{children}</h4>
      <span className="mt-2 block h-[3px] w-10 rounded-full bg-brand-orange" />
    </div>
  );
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            to={l.to}
            className="group inline-flex items-center gap-1.5 text-white/75 hover:text-brand-orange transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 text-brand-orange opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200" />
            <span>{l.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange">
        {icon}
      </span>
      <div className="pt-1.5 text-white/80 leading-relaxed">{children}</div>
    </li>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-brand-navy text-white">
      {/* CTA banner */}
     

      {/* Highlights */}
      <div className="border-b border-white/10 bg-black/10">
        <div className="container-custom py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-semibold">
              <span className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-brand-orange" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main columns */}
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5 bg-white p-2 rounded-lg shadow-lg">
              <img src={logoImg} alt="PSR Equipment Logo" className="h-10 w-auto object-contain" />
            </Link>
            <h3 className="font-heading font-bold text-xl mb-1">PSR Equipment</h3>
            <p className="text-brand-orange text-sm font-semibold mb-4">
              Manufacturer & Supplier of Commercial Kitchen Equipment
            </p>
            <p className="text-white/75 leading-relaxed">
              PSR Equipment is a manufacturer and supplier of commercial kitchen equipment, providing
              durable, reliable, and customized solutions for commercial kitchens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <LinkList links={quickLinks} />
          </div>

          {/* Products */}
          <div>
            <FooterHeading>Products</FooterHeading>
            <LinkList links={productLinks} />
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-5">
              <ContactItem icon={<Phone className="w-5 h-5" />}>
                <a href="tel:+918860911878" className="hover:text-brand-orange transition-colors">
                  +91 88609 11878
                </a>
              </ContactItem>
              <ContactItem icon={<Mail className="w-5 h-5" />}>
                <a
                  href="mailto:psrequipments@gmail.com"
                  className="hover:text-brand-orange transition-colors break-all"
                >
                  psrequipments@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={<MapPin className="w-5 h-5" />}>
                669/5, Sarurpur – 121005,
                <br />
                Haryana, India
              </ContactItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/25 border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/65 text-center md:text-left">
            © 2026 PSR Equipment. All Rights Reserved.
          </p>
          <p className="text-brand-orange font-semibold italic">Better Kitchen… Better Business…</p>
          <div className="flex items-center gap-5 text-white/65">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 -top-5 md:top-auto md:bottom-20 w-11 h-11 rounded-full bg-white text-brand-navy shadow-lg flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}