'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using History of the Game ('the Service'), you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "We reserve the right to modify these terms at any time without prior notice.",
        "Your continued use of the service after any such changes constitutes your acceptance of the new terms."
      ]
    },
    {
      icon: Scale,
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on History of the Game for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time."
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to accept responsibility for all activities that occur under your account or password.",
        "You must not use the service for any unlawful purpose or any purpose prohibited under this clause.",
        "You may not use the service in any manner that could damage, disable, overburden, or impair any server, or the network(s) connected to any server."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: [
        "The materials on History of the Game are provided on an 'as is' basis. History of the Game makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, History of the Game does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
        "The information on this website is for general information purposes only and does not constitute professional advice."
      ]
    },
    {
      icon: FileText,
      title: "Limitations",
      content: [
        "In no event shall History of the Game or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on History of the Game, even if History of the Game or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
      ]
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
              <FileText className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold gradient-text">
              Terms of Service
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
              Terms of Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our Web3 basketball museum platform. Please read them carefully before using our services.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-gray-900/50 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us for clarification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Return Home
              </Link>
              <Link
                href="#"
                className="px-8 py-3 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
