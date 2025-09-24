'use client'

import { motion } from 'framer-motion'
import { Star, Users, Zap } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-basketball-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
                Ready to Experience
                <br />
                <span className="gradient-text">Basketball History?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of basketball fans who are already exploring the future 
                of sports storytelling. Your journey through basketball history starts now.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center mb-12"
            >
              <motion.button
                className="group flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all border border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="group-hover:scale-110 transition-transform" size={20} />
                Join Community
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: Users, number: "10K+", label: "Active Users" },
                { icon: Star, number: "50+", label: "Exhibits" },
                { icon: Zap, number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-4 gradient-text">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified about new exhibits, exclusive drops, and community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-full border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
