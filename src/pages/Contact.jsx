import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Users, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const errors = [];
    if (!formRef.current.name.value.trim()) errors.push('Name');
    if (!formRef.current.email.value.trim()) errors.push('Email');
    if (!formRef.current.phone.value.trim()) errors.push('Phone Number');
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
            message: 'Your request has been sent successfully!',
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
        title="Contact Us — 5ARCS | Get a Free Consultation"
        description="Reach out to 5ARCS for custom web development, mobile apps, and SEO services. Get a free consultation and let's build something great together."
        keywords="contact 5arcs, web development consultation, hire developers, free quote"
        url="/contact"
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Let's Build Something Great Together
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Have a project in mind? We'd love to hear about it. Get in touch and let's start a conversation.
        </p>
      </section>

      {/* Contact Form + Info Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Form */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-[#071E26] mb-2">Start Your Project</h2>
              <p className="text-gray-600 mb-8">Tell us about your vision and we'll bring it to life.</p>
              <form
                ref={formRef}
                className="space-y-6"
                onSubmit={handleContactSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Website">Website</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Custom Solution">Custom Solution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:border-[#17A2B8] focus:ring-2 focus:ring-[#17A2B8]/20 transition outline-none resize-none placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#17A2B8] text-white w-full py-4 rounded-xl font-semibold hover:bg-[#0E5D6C] transition shadow-md cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>

                {status.message && (
                  <p className={`text-center font-medium text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Email Us</h4>
                  <a href="mailto:info@5arcs.net" className="text-gray-600 hover:text-[#071E26] transition">info@5arcs.net</a>
                </div>
              </div>
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Call Us</h4>
                  <a href="tel:+15102446744" className="text-gray-600 hover:text-[#071E26] transition">+1 (510) 244-6744</a>
                </div>
              </div>
              <div className="bg-[#F0F7F8] p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#071E26]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#071E26] mb-1">Visit Us</h4>
                  <p className="text-gray-600">Dallas, TX<br/>United States</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4">
                <h4 className="font-bold text-[#071E26] mb-4">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/people/5arcs/61592066397527/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-[#F0F7F8] flex items-center justify-center text-[#071E26] hover:bg-[#17A2B8] hover:text-white transition-colors duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/5arcs_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-[#F0F7F8] flex items-center justify-center text-[#071E26] hover:bg-[#17A2B8] hover:text-white transition-colors duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/5arcs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-[#F0F7F8] flex items-center justify-center text-[#071E26] hover:bg-[#17A2B8] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
