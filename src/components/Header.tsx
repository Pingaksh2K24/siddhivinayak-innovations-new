'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react' // Added dropdown icon

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false) // mobile menu ke liye

  const products = [
    { name: 'Shiksha Sanchalanam', href: '#' },
    { name: 'FasalSathi', href: '#' },
    { name: 'KrishiGarud', href: '#' }
  ]

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" }
  ]

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: 'linear-gradient(#030C1D 0%)'
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Sidhhivinayak Technolabs Home"
        >
          <Image
            src="/logo.png"
            alt="Sidhhivinayak Technolabs Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span>Sidhhivinayak Technolabs</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative group"
            >
              <span className="hover:text-orange-400 transition-colors">
                {item.name}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          ))}

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange-400 transition-colors">
              Products <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white/10 backdrop-blur-md shadow-lg rounded-md mt-2">
              {products.map((product, idx) => (
                <Link
                  key={idx}
                  href={product.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-orange-500 transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact last me */}
          <Link
            href="/contact"
            className="relative group"
          >
            <span className="hover:text-orange-400 transition-colors">
              Contact
            </span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#030C1D] text-white px-6 py-4 space-y-4 shadow-lg">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block relative group"
            >
              <span className="hover:text-orange-400 transition-colors">
                {item.name}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          ))}

          {/* Products for Mobile */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 w-full text-left hover:text-orange-400"
            >
              Products <ChevronDown size={16} className={`${productsOpen ? 'rotate-180' : ''} transition-transform`} />
            </button>
            {productsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {products.map((product, idx) => (
                  <Link
                    key={idx}
                    href={product.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white hover:text-orange-400"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact last me */}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block relative group"
          >
            <span className="hover:text-orange-400 transition-colors">
              Contact
            </span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </div>
      )}
    </header>
  )
}
