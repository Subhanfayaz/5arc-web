
import ParticlesBackground from '../components/ParticlesBackground';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground variant="constellation" />
      <SEO
        title="Terms & Conditions — 5ARCS"
        description="Terms & Conditions for using the 5ARCS website and services."
        keywords="terms and conditions, 5arcs terms, service agreement"
        url="/terms"
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center px-6 mt-16">
        <span className="bg-[#E7F2F4] text-[#071E26] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Terms & Conditions
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071E26] max-w-4xl leading-tight mb-6">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Please read these terms and conditions carefully before using our services.
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
                Welcome to <strong>5ARCS</strong>. These terms and conditions outline the rules and regulations for the use of the 5ARCS website, located at 5arcs.net, and our digital services.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">1. Acceptance of Terms</h3>
              <p className="mb-8">
                By accessing this website and utilizing our services, we assume you accept these terms and conditions. Do not continue to use 5ARCS if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">2. Services Provided</h3>
              <p className="mb-4">
                5ARCS is a full-service digital agency providing:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Custom Website Development</li>
                <li>Mobile Application Development (iOS & Android)</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>UI/UX Design</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">3. Client Responsibilities</h3>
              <p className="mb-8">
                Clients are expected to provide clear requirements, necessary assets (such as brand guidelines, logos, and content unless otherwise agreed), and timely feedback during the project lifecycle. Delays in feedback may result in timeline extensions.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">4. Intellectual Property</h3>
              <p className="mb-8">
                Unless otherwise stated, 5ARCS and/or its licensors own the intellectual property rights for all material on the website. Upon full payment for a custom project, intellectual property rights for the developed software/website will be transferred to the client as stipulated in the specific project agreement.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">5. Revisions and Maintenance</h3>
              <p className="mb-8">
                The number of design and development revisions is determined by the specific scope of work agreed upon prior to project commencement. Ongoing maintenance and support are subject to separate retainer agreements.
              </p>
              
              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">6. Limitation of Liability</h3>
              <p className="mb-8">
                In no event shall 5ARCS, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract. 5ARCS shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
              </p>

              <h3 className="text-2xl font-bold text-[#071E26] mt-8 mb-4">7. Contact Us</h3>
              <p className="mb-4">
                If you have any queries regarding any of our terms, please contact us.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
