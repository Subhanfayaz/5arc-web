import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ParticlesBackground from '../components/ParticlesBackground';
import SEO from '../components/SEO';
import { allPackages } from '../data/packagesData';

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const pkg = allPackages.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-[#071E26] mb-4">Package Not Found</h1>
        <p className="text-gray-600 mb-8">The package you are looking for does not exist.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#17A2B8] text-white px-8 py-3 rounded-full font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const errors = [];
    if (!formRef.current.name.value.trim()) errors.push('Name');
    if (!formRef.current.email.value.trim()) errors.push('Email');
    if (!formRef.current.phone.value.trim()) errors.push('Phone Number');
    // projectType is hidden but we ensure it has a value
    if (!formRef.current.projectType.value) errors.push('Project Type');
    if (!formRef.current.message.value.trim()) errors.push('Message');

    if (errors.length > 0) {
      alert(`Please fill in the following fields:\n• ${errors.join('\n• ')}`);
      return;
    }

    setLoading(true);

    const SERVICE_ID = 'service_yb4bt6h';
    const TEMPLATE_ID = 'template_w6q4sq5';
    const PUBLIC_KEY = '26ljKpcMKuwAJwuGy';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Your inquiry has been sent successfully! We will contact you soon.',
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again later.',
          });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground variant="constellation" />
      <SEO
        title={`${pkg.name} Package — 5ARCS`}
        description={`Details and pricing for the ${pkg.name} package at 5ARCS.`}
        keywords="pricing, package, 5arcs"
        url={`/package/${pkg.id}`}
      />

      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center px-6 mt-16 max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="self-start flex items-center gap-2 text-gray-500 hover:text-[#071E26] mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="w-full flex flex-col lg:flex-row gap-12">
          {/* Package Information */}
          <div className="lg:w-1/2 flex flex-col">
            <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase w-max">
              {pkg.category || 'Package'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071E26] leading-tight mb-4 flex items-center gap-4">
              {pkg.icon && <span className="bg-[#F0F7F8] p-3 rounded-2xl">{pkg.icon}</span>}
              {pkg.name}
            </h1>
            
            <div className="mb-6 flex items-baseline gap-3 flex-wrap mt-2">
              <span className="text-5xl font-black text-[#071E26]">
                {pkg.price === 'Custom' ? 'Custom' : String(pkg.price).startsWith('$') ? pkg.price : `$${pkg.price}`}
              </span>
              {(pkg.priceNote || pkg.cutPrice) && (
                <span className="text-lg text-gray-500 font-medium">
                  {pkg.priceNote || 'one-time'}
                </span>
              )}
              {(pkg.originalPrice || pkg.cutPrice) && (
                <span className="text-xl line-through text-gray-400 ml-2">
                  ${(pkg.originalPrice || pkg.cutPrice).replace('$', '')}
                </span>
              )}
            </div>

            {pkg.pages && (
              <span className="inline-block bg-[#E7F2F4] text-[#0E5D6C] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 w-max">
                {pkg.pages}
              </span>
            )}

            <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-[#17A2B8] pl-4">
              {pkg.bestFor}
            </p>

            <div className="bg-[#F8FDFD] border border-[#E7F2F4] rounded-3xl p-8 mb-8">
              <h3 className="text-xl font-bold text-[#071E26] mb-6">What's Included:</h3>
              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#17A2B8] shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              {pkg.deliverable && (
                <div className="mt-8 pt-6 border-t border-[#E7F2F4]">
                  <p className="text-sm font-bold text-[#071E26] mb-2">Key Deliverable:</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{pkg.deliverable}</p>
                </div>
              )}
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-bold text-[#071E26] mb-2">Interested in this package?</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form ref={formRef} className="space-y-6" onSubmit={handleContactSubmit}>
                {/* Hidden Project Type Field specifically for EmailJS to track the package lead */}
                <input type="hidden" name="projectType" value={`Package Lead: ${pkg.category} - ${pkg.name}`} />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none placeholder-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none resize-none placeholder-gray-400"
                    placeholder="Tell us a little bit about your project goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#17A2B8] text-white w-full py-4 rounded-xl font-bold hover:bg-[#0E5D6C] transition shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
                </button>

                {status.message && (
                  <p className={`text-center font-medium text-sm mt-4 p-3 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
