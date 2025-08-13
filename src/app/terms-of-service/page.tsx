'use client'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#030C1D] text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: December 8, 2024</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Siddhivinayak Technolabs services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Services Description</h2>
              <p className="text-gray-300 mb-4">
                Siddhivinayak Technolabs provides technology solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>AI Automation services</li>
                <li>Data Processing solutions</li>
                <li>Machine Learning implementations</li>
                <li>Business Analytics</li>
                <li>Cloud Solutions</li>
                <li>Technology Consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Using services in compliance with applicable laws</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by Siddhivinayak Technolabs and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                Siddhivinayak Technolabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Termination</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason whatsoever.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-300">Email: info@sidhivinay.com</p>
                <p className="text-gray-300">Phone: +91 7972392628</p>
                <p className="text-gray-300">Address: Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
