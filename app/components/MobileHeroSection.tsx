'use client'

import Image from 'next/image'
import { Star, ArrowRight, Play } from 'lucide-react'

// Simple counter component for mobile
function SimpleCounter({ target }: { target: number }) {
  return <span>{target.toLocaleString()}</span>
}

export default function MobileHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-gray-900" />
      
      {/* Main Content */}
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

        {/* CTA Buttons */}
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

        {/* Stats - Static for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: 5000, label: "Legendary Players", suffix: "+" },
            { number: 10000, label: "Historic Moments", suffix: "+" },
            { number: "∞", label: "Stories to Discover", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {typeof stat.number === 'number' ? (
                  <SimpleCounter target={stat.number} />
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
