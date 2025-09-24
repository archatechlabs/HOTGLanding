'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Circle, ArrowRight, Play, Star } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Animated Counter Component - Desktop Only
function AnimatedCounter({ target, duration, delay }: { target: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    console.log('Setting up counter observer for target:', target)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Counter intersection:', entry.isIntersecting, 'hasAnimated:', hasAnimated)
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            console.log('Starting counter animation for target:', target)
            
            // Start animation after delay
            setTimeout(() => {
              const startTime = Date.now()
              const startValue = 0
              const endValue = target

              const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / (duration * 1000), 1)
                
                const currentValue = Math.floor(startValue + (endValue - startValue) * progress)
                setCount(currentValue)

                if (progress < 1) {
                  requestAnimationFrame(animate)
                } else {
                  setCount(target)
                }
              }

              animate()
            }, delay * 1000)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [target, duration, delay, hasAnimated])

  return <span ref={counterRef}>{count.toLocaleString()}</span>
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background - No animations on mobile */}
      <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-br from-dark-bg to-gray-900' : 'court-pattern'}`} />
      
      {/* Floating Basketball Icons - Desktop Only */}
      {!isMobile && (
        <div>
          <motion.div
            className="absolute top-20 left-10 text-basketball-orange opacity-20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Circle size={60} />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20 text-neon-blue opacity-30"
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -180, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Circle size={40} />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-1/4 text-neon-purple opacity-25"
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 180, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Circle size={50} />
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6">
            <Star className="text-neon-blue" size={16} />
            <span className="text-sm font-medium text-neon-blue">Web3 Basketball Museum</span>
          </div>
          
          <div className="mb-6">
            <Image
              src="/logos/HOTG_Logo_transparent.png"
              alt="History of the Game Logo"
              width={400}
              height={200}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Step into the future of basketball storytelling. Experience legendary moments, 
            iconic players, and historic games through immersive Web3 technology.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            <span className="relative z-10 flex items-center gap-2">
              Enter Museum
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all">
            <Play className="group-hover:scale-110 transition-transform" size={20} />
            Watch Trailer
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: 5000, label: "Legendary Players", suffix: "+" },
            { number: 10000, label: "Historic Moments", suffix: "+" },
            { number: "∞", label: "Stories to Discover", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {typeof stat.number === 'number' ? (
                  <AnimatedCounter 
                    target={stat.number} 
                    duration={2} 
                    delay={index * 0.2}
                  />
                ) : (
                  stat.number
                )}
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}