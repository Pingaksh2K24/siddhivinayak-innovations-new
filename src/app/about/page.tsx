'use client'

import Image from 'next/image'
import { FaUsers, FaLightbulb, FaAward, FaHandshake, FaGlobe } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-[#030C1D] text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
            About Siddhivinayak Technolabs
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Empowering businesses with cutting-edge technology solutions and innovative approaches to drive digital transformation.
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded with a vision to bridge the gap between traditional business practices and modern technology,
                Siddhivinayak Technolabs has been at the forefront of digital innovation.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We specialize in AI automation, data processing, machine learning, and cloud solutions that help
                businesses streamline their operations and achieve unprecedented growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of expert developers, data scientists, and technology consultants work tirelessly to
                deliver solutions that not only meet but exceed our clients expectations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="p-32 rounded-2xl">
                <Image
                  src="/image1.jpg"
                  alt="AI & Robotics Innovation"
                  width={500}
                  height={500}
                  className="hero-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 p-8 rounded-xl border border-orange-500/20">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-3xl text-orange-400 mr-4" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To democratize advanced technology by making AI, machine learning, and automation accessible
                to businesses of all sizes, enabling them to compete in the digital age.
              </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-xl border border-orange-500/20">
              <div className="flex items-center mb-4">
                <FaGlobe className="text-3xl text-orange-400 mr-4" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become a global leader in technology solutions, fostering innovation and creating a
                future where technology seamlessly integrates with human potential.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Client-Centric</h3>
              <p className="text-gray-300">
                We put our clients at the heart of everything we do, ensuring their success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Integrity</h3>
              <p className="text-gray-300">
                We conduct business with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'AI Automation',
              'Data Processing',
              'Machine Learning',
              'Business Analytics',
              'Cloud Solutions',
              'Technology Consulting'
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">{service}</h3>
                <p className="text-gray-400 text-sm">
                  Comprehensive solutions tailored to your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-12 rounded-2xl border border-orange-500/20">
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let&apos;s discuss how we can help you leverage technology to achieve your goals.
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong>Email:</strong> info@sidhivinay.com</p>
            <p><strong>Phone:</strong> +91 7972392628</p>
            <p><strong>Address:</strong> Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</p>
          </div>
        </div>
      </div>
    </div>
  )
}
