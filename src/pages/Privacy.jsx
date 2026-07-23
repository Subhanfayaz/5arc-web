
import ParticlesBackground from '../components/ParticlesBackground';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground variant="constellation" />
      <SEO
        title="Privacy Policy — 5ARCS"
        description="Privacy Policy for 5ARCS. Learn how we collect, use, and protect your data."
        keywords="privacy policy, 5arcs privacy, data protection"
        url="/privacy"
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Privacy Policy
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          How We Protect Your Data
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Your privacy is important to us. This policy explains what information we collect and how we use it.
        </p>
      </section>

      {/* Content Section */}
      <section className="relative z-10 py-16 px-6 bg-white md:bg-white/50 md:backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                <strong>Last Updated: July 2026</strong>
              </p>
              
              <p className="mb-8">
                At <strong>5ARCS</strong> ("we," "us," or "our"), accessible from 5arcs.net, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by 5ARCS and how we use it.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">1. Information We Collect</h3>
              <p className="mb-4">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and project details when you use our contact form.</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the website is accessed and used, including your IP address, browser type, and operating system.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">2. How We Use Your Information</h3>
              <p className="mb-4">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website</li>
                <li>Send you emails relating to your project inquiry</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">3. Data Security</h3>
              <p className="mb-8">
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">4. Third-Party Services</h3>
              <p className="mb-8">
                We may employ third-party companies and individuals to facilitate our website (e.g., EmailJS for contact forms), to provide the website on our behalf, or to perform website-related services. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">5. Contact Us</h3>
              <p className="mb-4">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
              <ul className="list-none mb-8 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:info@5arcs.net" className="text-[#17A2B8] hover:underline">info@5arcs.net</a></li>
                <li><strong>Phone:</strong> <a href="tel:+15102446744" className="text-[#17A2B8] hover:underline">+1 (510) 244-6744</a></li>
                <li><strong>Location:</strong> Dallas, TX</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
               <Link
                to="/contact"
                className="inline-block bg-[#071E26] text-white px-8 py-4 rounded-full font-bold border-2 border-[#071E26] hover:bg-white hover:text-[#071E26] transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
