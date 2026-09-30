export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-navy text-brand-white py-20 angled-bottom mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About PSR Equipment</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto">
            Forging the future of industrial manufacturing through unyielding precision and innovation.
          </p>
        </div>
      </div>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Our Story</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            Founded in 1998, PSR Equipment began as a small fabrication shop with a singular vision: to build machines that don't just work, but excel under the most grueling conditions. Over the decades, we've expanded our footprint globally, becoming a trusted partner for automotive, aerospace, and energy sectors.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Our engineering philosophy is simple—build it tough, make it smart, and support it forever.
          </p>
        </div>
      </div>
    </div>
  );
}
