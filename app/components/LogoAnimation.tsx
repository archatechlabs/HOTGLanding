'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LogoAnimationProps {
  onComplete?: () => void
}

export default function LogoAnimation({ onComplete }: LogoAnimationProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Shorter duration on mobile to prevent crashes
    const duration = isMobile ? 2000 : 4000
    console.log(`🎬 Logo animation starting, duration: ${duration}ms, mobile: ${isMobile}`)
    
    const timer = setTimeout(() => {
      console.log('🎬 Logo animation timer completed, calling onComplete')
      onComplete?.()
    }, duration)

    return () => {
      console.log('🎬 Logo animation cleanup')
      clearTimeout(timer)
    }
  }, [onComplete, isMobile])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg" />
      
      {/* Logo Container */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -10, 0]
        }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          y: -20
        }}
        transition={{
          scale: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          y: { 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }
        }}
      >
        <Image
          src="/logos/HOTG_Logo_transparent.png"
          alt="History of the Game Logo"
          width={200}
          height={200}
          className="drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Simple Text */}
      <motion.div
        className="absolute bottom-32 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-orbitron font-bold gradient-text mb-2">
          History of the Game
        </h2>
        <p className="text-gray-400 text-sm">
          Web3 Basketball Museum
        </p>
      </motion.div>
    </motion.div>
  )
}
