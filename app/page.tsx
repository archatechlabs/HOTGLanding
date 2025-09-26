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
  const [logoAnimationStarted, setLogoAnimationStarted] = useState(false)

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

  // Auto-hide logo animation after 3 seconds (fallback for both mobile and desktop)
  useEffect(() => {
    if (!isClient) return
    
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isClient])

  const handleLogoComplete = () => {
    console.log('🎬 Logo animation completed, transitioning to main content')
    console.log('🎬 Current showLogo state:', showLogo)
    setShowLogo(false)
    setLogoAnimationStarted(false)
    console.log('🎬 Set showLogo to false')
  }

  // Track showLogo state changes
  useEffect(() => {
    console.log('🔄 showLogo state changed to:', showLogo)
  }, [showLogo])

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

  // Mobile version - with proper logo sequence
  if (isMobile) {
    console.log('📱 Mobile version rendering, showLogo:', showLogo)
    return (
      <ErrorBoundary>
        {showLogo ? (
          <LogoAnimation 
            key="logo-animation-mobile"
            onComplete={handleLogoComplete} 
          />
        ) : (
          <motion.main 
            key="main-content-mobile"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <MobileHeroSection />
            <StaticMuseumShowcase />
            <Web3Features />
            <IRLEvents />
            <CallToAction />
            <Footer />
          </motion.main>
        )}
      </ErrorBoundary>
    )
  }

  // Desktop version with proper logo sequence
  console.log('🖥️ Desktop version rendering, showLogo:', showLogo)
  return (
    <ErrorBoundary>
      {showLogo ? (
        <LogoAnimation 
          key="logo-animation"
          onComplete={handleLogoComplete} 
        />
      ) : (
        <motion.main 
          key="main-content"
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <HeroSection />
          <MuseumShowcase />
          <Web3Features />
          <IRLEvents />
          <CallToAction />
          <Footer />
        </motion.main>
      )}
    </ErrorBoundary>
  )
}
