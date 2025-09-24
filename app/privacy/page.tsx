'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal Information: When you visit our website or use our services, we may collect personal information such as your name, email address, and contact details.",
        "Usage Data: We automatically collect information about how you interact with our website, including pages visited, time spent, and device information.",
        "Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze website performance.",
        "Blockchain Data: When you interact with our Web3 features, we may collect wallet addresses and transaction data."
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Service Provision: To provide and maintain our Web3 basketball museum services.",
        "Communication: To send you updates, newsletters, and important service notifications.",
        "Analytics: To understand user behavior and improve our website and services.",
        "Legal Compliance: To comply with applicable laws and regulations.",
        "Security: To protect against fraud, abuse, and other security threats."
      ]
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist us in operating our website.",
        "We may disclose information if required by law or to protect our rights and safety.",
        "Aggregated, non-personal data may be shared for research and analytics purposes."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your personal information.",
        "We use encryption and secure protocols for data transmission.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices."
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
              <Shield className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold gradient-text">
              Privacy Policy
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
              Privacy Policy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our Web3 basketball museum platform.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Policy Sections */}
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
              Questions About This Policy?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
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
