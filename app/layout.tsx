import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'History of the Game | Web3 Basketball Museum',
  description: 'Experience basketball history like never before in our immersive Web3 storytelling museum. Discover legendary moments, players, and stories through cutting-edge technology.',
  keywords: 'basketball, Web3, NFT, museum, history, blockchain, sports, storytelling',
  authors: [{ name: 'Archatech Labs' }],
  openGraph: {
    title: 'History of the Game | Web3 Basketball Museum',
    description: 'Experience basketball history like never before in our immersive Web3 storytelling museum.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'History of the Game - Web3 Basketball Museum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of the Game | Web3 Basketball Museum',
    description: 'Experience basketball history like never before in our immersive Web3 storytelling museum.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${orbitron.variable}`}>
      <body className="min-h-screen animated-bg">
        {children}
      </body>
    </html>
  )
}
