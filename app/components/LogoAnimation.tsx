'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoAnimationProps {
  onComplete?: () => void
}

export default function LogoAnimation({ onComplete }: LogoAnimationProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg" />
      
      {/* Single Subtle Background Circle */}
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Logo Container */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          duration: 1.2
        }}
      >
        {/* Logo Image */}
        <motion.div
          className="relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/logos/HOTG_Logo_transparent.png"
            alt="History of the Game Logo"
            width={180}
            height={180}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="absolute bottom-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-orbitron font-bold gradient-text mb-2">
          History of the Game
        </h2>
        <p className="text-gray-400 text-sm">
          Web3 Basketball Museum
        </p>
      </motion.div>

      {/* Simplified Loading Dots */}
      <motion.div
        className="absolute bottom-20 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-neon-blue rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.4 + index * 0.1,
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
