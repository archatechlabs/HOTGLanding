'use client'

import Image from 'next/image'

export default function MobileLogoAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg mobile-fade-in">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg" />
      
      {/* Logo Container */}
      <div className="relative z-10 mobile-scale-in">
        <Image
          src="/logos/HOTG_Logo_transparent.png"
          alt="History of the Game Logo"
          width={200}
          height={200}
          className="drop-shadow-2xl mobile-float"
          priority
        />
      </div>

      {/* Simple Text */}
      <div className="absolute bottom-32 text-center mobile-fade-in mobile-delay-2">
        <h2 className="text-xl md:text-2xl font-orbitron font-bold gradient-text mb-2">
          History of the Game
        </h2>
        <p className="text-gray-400 text-sm">
          Web3 Basketball Museum
        </p>
      </div>
    </div>
  )
}
