'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import MobileHeroSection from './components/MobileHeroSection'
import MuseumShowcase from './components/MuseumShowcase'
import StaticMuseumShowcase from './components/StaticMuseumShowcase'
import Web3Features from './components/Web3Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LogoAnimation from './components/LogoAnimation'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Safe mobile detection with error handling
    try {
      const checkMobile = () => {
        if (typeof window !== 'undefined') {
          const mobile = window.innerWidth < 768
          setIsMobile(mobile)
        }
      }
      
      checkMobile()
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', checkMobile)
      }
      
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', checkMobile)
        }
      }
    } catch (error) {
      console.error('Mobile detection error:', error)
      // Default to desktop if there's an error
      setIsMobile(false)
    }
  }, [])

  // Auto-hide logo animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleLogoComplete = () => {
    setShowLogo(false)
  }

  // Always show mobile version for now to test
  return (
    <main className="min-h-screen">
      <MobileHeroSection />
      <StaticMuseumShowcase />
      <Web3Features />
      <CallToAction />
      <Footer />
    </main>
  )
}
