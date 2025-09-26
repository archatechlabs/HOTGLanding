'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Static Counter Component for Mobile - No animations
function StaticCounter({ target }: { target: number }) {
  return <span>{target.toLocaleString()}</span>
}

export default function MobileHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/herobackground.png"
          alt="Basketball court background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Static Background Elements - No animations */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-12 h-12 rounded-full bg-basketball-orange/20"></div>
      </div>
      
      <div className="absolute top-40 right-20 opacity-30">
        <div className="w-8 h-8 rounded-full bg-neon-blue/20"></div>
      </div>

      <div className="absolute bottom-32 left-1/4 opacity-25">
        <div className="w-10 h-10 rounded-full bg-neon-purple/20"></div>
      </div>
      
      {/* Main Content - With subtle animations for testing */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoothness
          }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Star className="text-neon-blue" size={16} />
            <span className="text-sm font-medium text-neon-blue">Web3 Basketball Museum</span>
          </motion.div>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Image
              src="/logos/HOTG_Logo_transparent.png"
              alt="History of the Game Logo"
              width={300}
              height={150}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Step into the future of basketball storytelling. Experience legendary moments, 
            iconic players, and historic games through immersive Web3 technology.
          </motion.p>
        </motion.div>

        {/* CTA Buttons - With animations */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <Link href="/register">
            <motion.button 
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white hover:opacity-90 transition-opacity"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </Link>
          
          <motion.button 
            className="group flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1, ease: "easeOut" }
            }}
          >
            <Play className="group-hover:scale-110 transition-transform" size={20} />
            Watch Trailer
          </motion.button>
        </motion.div>

        {/* Stats - With animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {[
            { number: 5000, label: "Legendary Players", suffix: "+" },
            { number: 10000, label: "Historic Moments", suffix: "+" },
            { number: "∞", label: "Stories to Discover", suffix: "" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5 + (index * 0.3),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {typeof stat.number === 'number' ? (
                  <StaticCounter target={stat.number} />
                ) : (
                  stat.number
                )}
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
