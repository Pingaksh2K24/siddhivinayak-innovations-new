'use client'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#030C1D] text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 8, 2024</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                Siddhivinayak Technolabs uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Session Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These are temporary cookies that remain in your browser until you leave the website. They help us maintain your session and provide a seamless browsing experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Persistent Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your future visits.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Third-Party Cookies</h3>
                <p className="text-gray-300 mb-4">
                  We may use third-party services like Google Analytics that place their own cookies on your device to help us analyze website traffic and usage patterns.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Delete existing cookies through your browser&apos;s privacy settings</li>
                <li>Set your browser to notify you when cookies are being sent</li>
                <li>Use private/incognito browsing mode</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our Cookie Policy, please contact us:
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
