'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import MuseumShowcase from './components/MuseumShowcase'
import Web3Features from './components/Web3Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LogoAnimation from './components/LogoAnimation'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 3500) // Show logo for 3.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showLogo && (
          <LogoAnimation onComplete={() => setShowLogo(false)} />
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
