'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Twitter, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Baron Davis",
      role: "Founder",
      image: "/images/baron-davis.jpg", // You'll need to add this image
      bio: "Former NBA All-Star point guard and entrepreneur. Baron brings his passion for basketball and innovation to create the ultimate digital basketball museum experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Chizz Cunningham",
      role: "Co-Founder & CTO",
      image: "/images/chizz-cunningham.jpg", // You'll need to add this image
      bio: "Technology visionary and blockchain expert. Chizz leads the technical development of our Web3 platform, ensuring cutting-edge innovation in sports storytelling.",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <motion.header 
        className="relative py-8 px-4 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 text-white hover:text-neon-blue transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-orbitron font-semibold">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h1 className="text-2xl font-orbitron font-bold gradient-text">
              History of the Game
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the visionaries behind History of the Game, bringing together basketball passion 
              and cutting-edge Web3 technology to revolutionize sports storytelling.
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <div className="bg-gray-900/50 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm hover:border-neon-blue/40 transition-all duration-300">
                  {/* Member Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/40 group-hover:to-neon-purple/40 transition-all duration-300"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-neon-blue font-semibold text-lg mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = platform === 'twitter' ? Twitter : 
                                  platform === 'github' ? Github : 
                                  platform === 'linkedin' ? Linkedin : Mail
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${member.name} ${platform}`}
                        >
                          <Icon size={20} />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Be part of the future of basketball storytelling. Connect with our team and 
                help us build the most immersive digital basketball museum ever created.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Explore Museum
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
