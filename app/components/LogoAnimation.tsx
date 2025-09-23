'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

interface LogoAnimationProps {
  onComplete?: () => void
}

export default function LogoAnimation({ onComplete }: LogoAnimationProps) {
  useEffect(() => {
    // Auto-complete after 4 seconds to ensure at least 3 seconds of animation
    const timer = setTimeout(() => {
      onComplete?.()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
        transition={{
          scale: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.8, ease: "easeOut" },
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
