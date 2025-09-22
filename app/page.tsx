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
    }, 3000) // Show logo for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showLogo && (
          <LogoAnimation onComplete={() => setShowLogo(false)} />
        )}
      </AnimatePresence>
      
      <main className="min-h-screen">
        <HeroSection />
        <MuseumShowcase />
        <Web3Features />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
