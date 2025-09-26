'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import MobileHeroSection from './components/MobileHeroSection'
import MuseumShowcase from './components/MuseumShowcase'
import StaticMuseumShowcase from './components/StaticMuseumShowcase'
import Web3Features from './components/Web3Features'
import IRLEvents from './components/IRLEvents'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LogoAnimation from './components/LogoAnimation'
import ErrorBoundary from './components/ErrorBoundary'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    
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

  // Auto-hide logo animation after 3 seconds (only on desktop)
  useEffect(() => {
    if (!isClient || isMobile) return
    
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isClient, isMobile])

  const handleLogoComplete = () => {
    setShowLogo(false)
  }

  // Show loading state during hydration
  if (!isClient) {
    return (
      <main className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </main>
    )
  }

  // Mobile version - stable, no logo animation
  if (isMobile) {
    return (
      <ErrorBoundary>
        <main className="min-h-screen">
          <MobileHeroSection />
          <StaticMuseumShowcase />
          <Web3Features />
          <IRLEvents />
          <CallToAction />
          <Footer />
        </main>
      </ErrorBoundary>
    )
  }

  // Desktop version with animations
  return (
    <ErrorBoundary>
      <AnimatePresence>
        {showLogo && (
          <LogoAnimation 
            key="logo-animation"
            onComplete={handleLogoComplete} 
          />
        )}
      </AnimatePresence>
      
      <motion.main 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
        <MuseumShowcase />
        <Web3Features />
        <IRLEvents />
        <CallToAction />
        <Footer />
      </motion.main>
    </ErrorBoundary>
  )
}
