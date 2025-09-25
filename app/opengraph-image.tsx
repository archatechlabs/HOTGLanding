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
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
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
          }}
        >
          {/* Logo Text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #00d4ff, #8a2be2, #ff6b35)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 24,
              fontFamily: 'system-ui',
            }}
          >
            HISTORY OF THE GAME
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#00d4ff',
              marginBottom: 16,
              fontWeight: '600',
            }}
          >
            Web3 Basketball Museum
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: '#e2e8f0',
              maxWidth: 800,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Experience basketball history like never before through immersive Web3 technology
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 120,
            right: 60,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00d4ff, #8a2be2)',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 80,
            width: 50,
            height: 50,
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
