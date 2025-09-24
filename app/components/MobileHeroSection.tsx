'use client'

import Image from 'next/image'
import { Star, ArrowRight, Play } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Simple Animated Counter Component for Mobile
function MobileAnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
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
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let current = 0
      const duration = 2 // 2 seconds
      const increment = target / (duration * 60) // 60fps
      
      const animate = () => {
        current += increment
        if (current < target) {
          setCount(Math.floor(current))
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      
      animate()
    }, 500) // Start after 0.5s delay

    return () => clearTimeout(timer)
  }, [isVisible, target])

  return <span ref={counterRef}>{count.toLocaleString()}</span>
}

export default function MobileHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg to-gray-900">
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
      
      {/* Main Content - Static, no animations */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6">
            <Star className="text-neon-blue" size={16} />
            <span className="text-sm font-medium text-neon-blue">Web3 Basketball Museum</span>
          </div>
          
          <div className="mb-6">
            <Image
              src="/logos/HOTG_Logo_transparent.png"
              alt="History of the Game Logo"
              width={300}
              height={150}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Step into the future of basketball storytelling. Experience legendary moments, 
            iconic players, and historic games through immersive Web3 technology.
          </p>
        </div>

        {/* CTA Buttons - Static */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Enter Museum
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all">
            <Play className="group-hover:scale-110 transition-transform" size={20} />
            Watch Trailer
          </button>
        </div>

        {/* Stats - Keep the animated counter but remove CSS classes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: 5000, label: "Legendary Players", suffix: "+" },
            { number: 10000, label: "Historic Moments", suffix: "+" },
            { number: "∞", label: "Stories to Discover", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {typeof stat.number === 'number' ? (
                  <MobileAnimatedCounter target={stat.number} />
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
        </div>
      </div>
    </section>
  )
}
