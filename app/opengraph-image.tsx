import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'History of the Game - Web3 Basketball Museum'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
        }}
      >
        {/* Basketball Court Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 40%),
              linear-gradient(45deg, 
                transparent 48%, 
                rgba(255, 255, 255, 0.05) 49%, 
                rgba(255, 255, 255, 0.05) 51%, 
                transparent 52%
              ),
              linear-gradient(-45deg, 
                transparent 48%, 
                rgba(255, 255, 255, 0.05) 49%, 
                rgba(255, 255, 255, 0.05) 51%, 
                transparent 52%
              )
            `,
          }}
        />
        
        {/* Court Lines */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '60%',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
        />
        
        {/* Center Circle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            height: '20%',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
        />
        
        {/* Main Logo Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '40px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Web3 Basketball Museum Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              marginBottom: '24px',
              fontSize: '16px',
              color: '#00d4ff',
              fontWeight: '600',
            }}
          >
            ⭐ Web3 Basketball Museum
          </div>
          
          {/* Logo Text */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #00d4ff, #8a2be2, #ff6b35)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              fontFamily: 'system-ui',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            }}
          >
            HISTORY OF THE GAME
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: '18px',
              color: '#e2e8f0',
              maxWidth: '600px',
              textAlign: 'center',
              lineHeight: 1.4,
              marginBottom: '20px',
            }}
          >
            Step into the future of basketball storytelling. Experience legendary moments, 
            iconic players, and historic games through immersive Web3 technology.
          </div>
          
          {/* Stats Preview */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              fontSize: '14px',
              color: '#a0a0a0',
            }}
          >
            <div>5000+ Legendary Players</div>
            <div>10000+ Historic Moments</div>
            <div>∞ Stories to Discover</div>
          </div>
        </div>
        
        {/* Floating Basketball Elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00d4ff, #8a2be2)',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '20%',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #8a2be2, #ff6b35)',
            opacity: 0.3,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
