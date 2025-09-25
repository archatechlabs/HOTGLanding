'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password.trim()) newErrors.password = 'Password is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus('success')
        // Redirect to dashboard or home page
        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
      } else {
        setSubmitStatus('error')
        setErrors({ general: data.error || 'Login failed' })
      }
    } catch (error) {
      console.error('Login error:', error)
      setSubmitStatus('error')
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-dark-bg opacity-70" />
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Welcome Back!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              You've successfully logged in. Redirecting you to the main page...
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-dark-bg opacity-70" />
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>

      <div className="relative z-10 max-w-md mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-300">
            Sign in to your History of the Game account
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Mail size={16} />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.email}
              </p>}
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Lock size={16} />
                Password *
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.password ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.password}
              </p>}
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} />
                {errors.general}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </motion.button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-neon-blue hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
