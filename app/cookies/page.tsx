'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Cookie, Settings, Eye, Shield, Database } from 'lucide-react'
import Link from 'next/link'

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: [
        "Authentication cookies to keep you logged in",
        "Security cookies to protect against fraud",
        "Load balancing cookies to ensure website stability"
      ]
    },
    {
      icon: Eye,
      title: "Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      examples: [
        "Google Analytics to understand user behavior",
        "Performance monitoring to optimize loading times",
        "User journey tracking to improve user experience"
      ]
    },
    {
      icon: Database,
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      examples: [
        "Language preference settings",
        "Theme and display preferences",
        "User interface customization options"
      ]
    },
    {
      icon: Shield,
      title: "Marketing Cookies",
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      examples: [
        "Social media integration cookies",
        "Advertising platform tracking",
        "Remarketing and retargeting cookies"
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
              <Cookie className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold gradient-text">
              Cookie Policy
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
              Cookie Policy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This policy explains how we use cookies and similar technologies on our Web3 basketball museum platform to enhance your experience.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            className="bg-gray-900/50 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              What Are Cookies?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period of time).
            </p>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.title}
                className="bg-gray-900/50 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                    <cookie.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-white">
                      {cookie.title}
                    </h3>
                    <p className="text-gray-400">{cookie.description}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="text-lg font-semibold text-white mb-3">Examples include:</h4>
                  <ul className="space-y-2">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-300">{example}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cookie Management */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Browser Settings</h4>
                <p className="text-gray-300 text-sm">
                  Most browsers allow you to refuse cookies or delete them. You can usually find these settings in your browser's privacy or security section.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Cookie Consent</h4>
                <p className="text-gray-300 text-sm">
                  When you first visit our site, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Questions About Our Cookie Policy?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about how we use cookies, please don't hesitate to contact us.
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
