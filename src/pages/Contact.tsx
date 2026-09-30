import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Please provide more details'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <div className="pt-24 pb-16 bg-brand-light min-h-screen">
      <div className="container-custom py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Contact Our Team</h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">Get in touch to discuss your machinery requirements, request a quote, or schedule maintenance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-brand-white rounded-xl shadow-sm overflow-hidden">
          {/* Contact Info */}
          <div className="bg-brand-navy text-brand-white p-10 lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-8">Headquarters</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-brand-white/80">142 Industrial Blvd, Suite 100<br />Manufacturing City, TX 78000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-orange shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-brand-white/80">+1 (800) 555-0199</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-orange shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-brand-white/80">sales@psrequipment.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="p-10 lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">Full Name</label>
                  <input 
                    {...register('name')} 
                    className="w-full px-4 py-3 rounded-md border border-brand-gray/30 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" 
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">Email Address</label>
                  <input 
                    {...register('email')} 
                    className="w-full px-4 py-3 rounded-md border border-brand-gray/30 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" 
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-2">Company Name</label>
                <input 
                  {...register('company')} 
                  className="w-full px-4 py-3 rounded-md border border-brand-gray/30 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" 
                  placeholder="Acme Corp"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-2">How can we help?</label>
                <textarea 
                  {...register('message')} 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-brand-gray/30 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" 
                  placeholder="Please describe your equipment needs..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto min-w-[200px]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
