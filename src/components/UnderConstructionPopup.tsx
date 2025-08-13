'use client'

import React, { useState, useEffect } from 'react'
import { X, Construction, Clock } from 'lucide-react'

interface UnderConstructionPopupProps {
  isOpen?: boolean
  onClose?: () => void
  title?: string
  message?: string
  autoShow?: boolean
  autoShowDelay?: number
}

export default function UnderConstructionPopup({
  isOpen = false,
  onClose,
  title = "Page under construction",
  message = "This service will start soon. Thank you for your understading.",
  autoShow = false,
  autoShowDelay = 2000
}: UnderConstructionPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue by ensuring component is mounted
  useEffect(() => {
    setMounted(true)
    setShowPopup(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (mounted && autoShow) {
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, autoShowDelay)
      return () => clearTimeout(timer)
    }
  }, [mounted, autoShow, autoShowDelay])

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) {
    return null
  }

  const handleClose = () => {
    setShowPopup(false)
    if (onClose) {
      onClose()
    }
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 transform transition-all duration-300 ease-in-out scale-100 animate-in fade-in zoom-in duration-500">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Construction size={48} className="text-orange-500 animate-bounce" />
              <Clock size={24} className="absolute -bottom-1 -right-1 text-blue-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {title}
          </h2>

          {/* Message */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {message}
          </p>

          {/* Progress Bar Animation */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-blue-500 h-2 rounded-full animate-pulse w-3/4"></div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-500 transition-all duration-200 transform hover:scale-105"
          >
            Okay
          </button>
        </div>
      </div>


    </div>
  )
}

// Hook for easy usage
export function useUnderConstructionPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const showPopup = () => {
    if (mounted) {
      setIsOpen(true)
    }
  }

  const hidePopup = () => {
    if (mounted) {
      setIsOpen(false)
    }
  }

  return {
    isOpen: mounted ? isOpen : false,
    showPopup,
    hidePopup,
    mounted
  }
}
