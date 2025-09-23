'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import MuseumShowcase from './components/MuseumShowcase'
import Web3Features from './components/Web3Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LogoAnimation from './components/LogoAnimation'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)

  const handleLogoComplete = () => {
    setShowLogo(false)
  }

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
