'use client'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030C1D] to-black text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 8, 2024</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                At Siddhivinayak Technolabs, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Contact us through our website or email</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant updates and marketing communications</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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
