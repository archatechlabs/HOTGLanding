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
import MobileLogoAnimation from './components/MobileLogoAnimation'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
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

  // Mobile version with CSS-only animations
  if (isMobile) {
    return (
      <>
        {showLogo && <MobileLogoAnimation />}
        <main className="min-h-screen">
          <MobileHeroSection />
          <StaticMuseumShowcase />
          <Web3Features />
          <CallToAction />
          <Footer />
        </main>
      </>
    )
  }

  // Desktop version with animations
  return (
    <>
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
        <CallToAction />
        <Footer />
      </motion.main>
    </>
  )
}
