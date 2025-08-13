'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa'
import UnderConstructionPopup from './UnderConstructionPopup'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (state: boolean) => {
    setIsOpen(state);
  }
  return (
    <footer className="bg-[#030C1D] border-t border-blue-800/30">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Siddhivinayak Technolabs Home"
            >
              <Image src="/logo.png" alt="Siddhivinayak Technolabs Logo" width={40} height={40} className="w-10 h-10 object-contain" priority />
              <span>Siddhivinayak Technolabs</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering Businesses with Smart Technology Solutions
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-orange-400/50">
                <FaFacebookF className="text-orange-400 text-lg transition-colors duration-300 hover:text-[#1877F2]" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/sidhhivinayak_technolabs_2024"
                className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-orange-400/50">
                <FaInstagram className="text-orange-400 text-lg transition-colors duration-300 hover:text-[#E4405F]" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/sidhhivinayak-technolabs"
                className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-orange-400/50">
                <FaLinkedinIn className="text-orange-400 text-lg transition-colors duration-300 hover:text-[#0077B5]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/school-erp" className="text-gray-400 hover:text-orange-400 transition-colors">School ERP</Link></li>
              <li><Link href="/services/custom-software" className="text-gray-400 hover:text-orange-400 transition-colors">Custom Software Development</Link></li>
              <li><Link href="/services/web-development" className="text-gray-400 hover:text-orange-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/robotics" className="text-gray-400 hover:text-orange-400 transition-colors">Farming & Commercial Robotics</Link></li>
              <li><Link href="/services/rfid-solutions" className="text-gray-400 hover:text-orange-400 transition-colors">RFID Solutions</Link></li>
              <li><Link href="/services/mobile-app" className="text-gray-400 hover:text-orange-400 transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><p
                // href=""
                onClick={() => handleModal(true)}
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Our Team</p></li>
              <li><p
                // href=""
                onClick={() => handleModal(true)}
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Careers</p></li>
              <li><p
                // href=""
                onClick={() => handleModal(true)}
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Blog
                </p></li>
              <li><p
                // href=""
                onClick={() => handleModal(true)}
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">News
                </p></li>
              <li><Link
                href="/contact"
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <div className="text-gray-400">
                  <p>Near Government Polytechnic,</p>
                  <p>Vithhal Nagar Khamgaon, District Buldhana,</p>
                  <p>Maharashtra, 443404</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-400" />
                <div className="text-gray-400">
                  <p>(+91) 797 239 2628</p>
                  <p>(+91) 983 482 8054</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                <span className="text-gray-400">info@sidhivinay.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-orange-400" />
                <span className="text-gray-400">www.siddhivinayak.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Siddhivinayak Technolabs. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-orange-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <UnderConstructionPopup
        isOpen={isOpen}
        onClose={() => handleModal(false)}
        title="Page under construction"
        message="This service will start soon. Thank you for your understading."
      />
    </footer >
  )
}
