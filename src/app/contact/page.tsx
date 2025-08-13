'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaClock, FaUser, FaComment } from 'react-icons/fa'
import UnderConstructionPopup, { useUnderConstructionPopup } from '@/components/UnderConstructionPopup'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-[#030C1D] text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let&apos;s discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                Get In Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-orange-500/20">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Office Address</h3>
                    <p className="text-gray-300">
                      Near Government Polytechnic,<br />
                      Vithhal Nagar Khamgaon,<br />
                      District Buldhana, Maharashtra, 443404
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-orange-500/20">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <FaPhone className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Phone Number</h3>
                    <p className="text-gray-300">+91 7972392628</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-orange-500/20">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <FaEnvelope className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Email Address</h3>
                    <p className="text-gray-300">info@sidhivinay.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-orange-500/20">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <FaGlobe className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Website</h3>
                    <p className="text-gray-300">www.siddhivinayak.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-orange-500/20">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <FaClock className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-white placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <FaComment className="inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Why Choose Siddhivinayak Technolabs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-orange-500/20">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Expert Team</h3>
              <p className="text-gray-300">
                Our team of experienced developers and consultants bring years of expertise to every project.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-orange-500/20">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Quick Response</h3>
              <p className="text-gray-300">
                We respond to all inquiries within 24 hours and provide regular project updates.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-orange-500/20">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Global Reach</h3>
              <p className="text-gray-300">
                We serve clients worldwide with cutting-edge technology solutions and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
