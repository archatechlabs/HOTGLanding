'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Coins, 
  Lock,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function Web3Features() {
  const features = [
    {
      title: "NFT Collectibles",
      description: "Own unique digital collectibles of legendary moments, player cards, and historic artifacts.",
      icon: Coins,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Blockchain Security",
      description: "Your digital assets are secured on the blockchain with complete ownership and authenticity.",
      icon: Lock,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Metaverse Integration",
      description: "Experience the museum in virtual reality and interact with other basketball fans globally.",
      icon: Globe,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Community Governance",
      description: "Have a say in museum decisions and new exhibit additions through decentralized voting.",
      icon: Users,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Lightning-Fast Transactions",
      description: "Experience sub-second transaction speeds with Solana's high-performance blockchain network.",
      icon: Zap,
      color: "from-yellow-400 to-red-500"
    },
    {
      title: "Low-Cost Transactions",
      description: "Enjoy minimal transaction fees with Solana's efficient consensus mechanism, making digital collectibles accessible to everyone.",
      icon: Coins,
      color: "from-green-400 to-emerald-500"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
            Powered by <span className="gradient-text">Solana</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Experience lightning-fast transactions and low-cost digital collectibles 
            on the world's fastest blockchain network.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-orbitron font-bold mb-6 gradient-text">
                  Built for the Future
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our platform leverages Solana's high-performance blockchain to create an 
                  immersive, secure, and truly decentralized basketball museum experience. 
                  With sub-second transaction speeds and minimal fees, every interaction 
                  is recorded on-chain, ensuring authenticity and permanent ownership of your digital collectibles.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Solana', 'Metaplex', 'Anchor', 'Web3.js', 'React', 'Next.js'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 glass rounded-full text-sm font-medium text-white border border-white/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full h-80 glass rounded-2xl border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="text-neon-blue" size={80} />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
