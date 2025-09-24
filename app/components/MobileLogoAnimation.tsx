'use client'

import Image from 'next/image'

export default function MobileLogoAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg" />
      
      {/* Logo Container - Static, no animations */}
      <div className="relative z-10">
        <Image
          src="/logos/HOTG_Logo_transparent.png"
          alt="History of the Game Logo"
          width={180}
          height={180}
          className="drop-shadow-2xl"
          priority
        />
      </div>

      {/* Simple Text - Static, no animations */}
      <div className="absolute bottom-32 text-center">
        <h2 className="text-2xl font-orbitron font-bold gradient-text mb-2">
          History of the Game
        </h2>
        <p className="text-gray-400 text-sm">
          Web3 Basketball Museum
        </p>
      </div>
    </div>
  )
}
