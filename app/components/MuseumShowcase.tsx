'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Clock, Star, ArrowRight } from 'lucide-react'

export default function MuseumShowcase() {
  const exhibits = [
    {
      title: "The Legends Hall",
      description: "Walk through the careers of basketball's greatest players with interactive timelines and career highlights.",
      icon: Trophy,
      color: "from-basketball-orange to-red-500",
      stats: "23 Hall of Famers"
    },
    {
      title: "Historic Moments",
      description: "Relive the most iconic plays, buzzer-beaters, and championship victories that defined the sport.",
      icon: Star,
      color: "from-neon-blue to-cyan-400",
      stats: "50+ Moments"
    },
    {
      title: "Team Dynasties",
      description: "Explore the greatest teams in basketball history and their championship runs through immersive storytelling.",
      icon: Users,
      color: "from-neon-purple to-pink-500",
      stats: "15 Dynasties"
    },
    {
      title: "Evolution Timeline",
      description: "Discover how basketball evolved from its humble beginnings to the global phenomenon it is today.",
      icon: Clock,
      color: "from-green-400 to-emerald-500",
      stats: "130+ Years"
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Museum</span> Exhibits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in basketball's rich history through cutting-edge Web3 technology 
            and interactive storytelling experiences.
          </p>
        </motion.div>

        {/* Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-6 glass rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exhibit.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${exhibit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <exhibit.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-white">
                    {exhibit.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exhibit.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">
                      {exhibit.stats}
                    </span>
                    <motion.div
                      className="text-white group-hover:text-neon-blue transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-orbitron font-bold mb-4 gradient-text">
                Experience the Future
              </h3>
              <p className="text-lg text-white mb-6">
                Our Web3 technology brings basketball history to life like never before. 
                Each exhibit is an interactive journey through time.
              </p>
              <motion.button
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
