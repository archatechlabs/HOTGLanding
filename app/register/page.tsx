'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, User, Mail, Phone, MapPin, Star, Wallet, CheckCircle, AlertCircle } from 'lucide-react'
import { trackFormSubmission, trackButtonClick } from '@/lib/analytics'

const favoritePlayers = [
  // All-Time Greats (Top Tier)
  'Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Magic Johnson', 'Larry Bird',
  'Shaquille O\'Neal', 'Tim Duncan', 'Kareem Abdul-Jabbar', 'Wilt Chamberlain',
  'Bill Russell', 'Oscar Robertson', 'Jerry West', 'Elgin Baylor', 'Julius Erving',
  'Charles Barkley', 'Karl Malone', 'John Stockton', 'Hakeem Olajuwon',
  'David Robinson', 'Patrick Ewing', 'Clyde Drexler', 'Scottie Pippen',
  'Dennis Rodman', 'Gary Payton', 'Jason Kidd', 'Steve Nash', 'Dirk Nowitzki',
  'Kevin Garnett', 'Paul Pierce', 'Ray Allen', 'Dwyane Wade', 'Chris Paul',
  'Russell Westbrook', 'James Harden', 'Stephen Curry', 'Kevin Durant',
  'Kawhi Leonard', 'Giannis Antetokounmpo', 'Luka Dončić', 'Jayson Tatum',
  
  // Current NBA Stars (2020s)
  'Joel Embiid', 'Nikola Jokic', 'Anthony Davis', 'Jimmy Butler', 'Damian Lillard',
  'Kyrie Irving', 'Devin Booker', 'Bradley Beal', 'Zach LaVine', 'Donovan Mitchell',
  'Trae Young', 'Ja Morant', 'Zion Williamson', 'Anthony Edwards', 'LaMelo Ball',
  'Cade Cunningham', 'Evan Mobley', 'Scottie Barnes', 'Franz Wagner', 'Paolo Banchero',
  'Chet Holmgren', 'Victor Wembanyama', 'Scoot Henderson', 'Brandon Miller',
  'Tyrese Haliburton', 'De\'Aaron Fox', 'Domantas Sabonis', 'Pascal Siakam',
  'Bam Adebayo', 'Jaylen Brown', 'Kristaps Porziņģis', 'Rudy Gobert',
  'Karl-Anthony Towns', 'Deandre Ayton', 'Jaren Jackson Jr.', 'Zach Collins',
  'Myles Turner', 'Brook Lopez', 'Al Horford', 'Robert Williams III',
  'Marcus Smart', 'Derrick White', 'Malcolm Brogdon', 'Payton Pritchard',
  'Sam Hauser', 'Grant Williams', 'Jrue Holiday', 'Khris Middleton',
  'Bobby Portis', 'Pat Connaughton', 'Grayson Allen', 'Jevon Carter',
  
  // 2010s Era Stars
  'Blake Griffin', 'Derrick Rose', 'John Wall', 'DeMarcus Cousins', 'Paul George',
  'Klay Thompson', 'Draymond Green', 'Andre Iguodala', 'Kyle Lowry', 'DeMar DeRozan',
  'Gordon Hayward', 'Kemba Walker', 'Isaiah Thomas', 'Hassan Whiteside', 'Andre Drummond',
  'Jeff Teague', 'Kyle Korver', 'Thabo Sefolosha', 'Paul Millsap', 'Al Horford',
  'Rajon Rondo', 'Kendrick Perkins', 'Glen Davis', 'Nate Robinson', 'Eddie House',
  'Avery Bradley', 'Jared Sullinger', 'Brandon Bass', 'Courtney Lee', 'Jason Terry',
  'Terry Rozier', 'Marcus Smart', 'Jaylen Brown', 'Jayson Tatum', 'Kyrie Irving',
  'Baron Davis', 'Monta Ellis', 'Stephen Jackson', 'Al Harrington', 'Corey Maggette',
  
  // 2000s Era Stars
  'Tracy McGrady', 'Vince Carter', 'Allen Iverson', 'Yao Ming', 'Dirk Nowitzki',
  'Steve Nash', 'Amar\'e Stoudemire', 'Manu Ginobili', 'Tony Parker', 'Chauncey Billups',
  'Ben Wallace', 'Rasheed Wallace', 'Jermaine O\'Neal', 'Pau Gasol', 'Marc Gasol',
  'Chris Bosh', 'Carmelo Anthony', 'Dwight Howard', 'Deron Williams', 'Chris Paul',
  'Derrick Rose', 'Kevin Love', 'Russell Westbrook', 'James Harden', 'Blake Griffin',
  'Rajon Rondo', 'Kendrick Perkins', 'Glen Davis', 'Nate Robinson', 'Eddie House',
  'Ray Allen', 'Paul Pierce', 'Kevin Garnett', 'Rajon Rondo', 'Kendrick Perkins',
  'Gilbert Arenas', 'Antawn Jamison', 'Caron Butler', 'Brendan Haywood', 'DeShawn Stevenson',
  'Antawn Jamison', 'Caron Butler', 'Brendan Haywood', 'DeShawn Stevenson', 'Gilbert Arenas',
  
  // 1990s Era Stars
  'Anfernee Hardaway', 'Grant Hill', 'Alonzo Mourning', 'Dikembe Mutombo', 'Reggie Miller',
  'Mitch Richmond', 'Chris Mullin', 'Tim Hardaway', 'Kevin Johnson', 'Mark Price',
  'Terrell Brandon', 'Bobby Phills', 'Muggsy Bogues', 'Dell Curry', 'Larry Johnson',
  'Alonzo Mourning', 'Kendall Gill', 'Derrick Coleman', 'Kenny Anderson', 'Chris Morris',
  'Rik Smits', 'Dale Davis', 'Antonio Davis', 'Mark Jackson', 'Jalen Rose',
  'Reggie Miller', 'Rik Smits', 'Dale Davis', 'Antonio Davis', 'Mark Jackson',
  
  // 1980s Era Stars
  'Isiah Thomas', 'Joe Dumars', 'James Worthy', 'Byron Scott', 'Michael Cooper',
  'Kurt Rambis', 'Robert Parish', 'Kevin McHale', 'Dennis Johnson', 'Danny Ainge',
  'Cedric Maxwell', 'Larry Nance', 'Brad Daugherty', 'Mark Price', 'Ron Harper',
  'Dominique Wilkins', 'Spud Webb', 'Doc Rivers', 'Tree Rollins', 'Moses Malone',
  'Julius Erving', 'Maurice Cheeks', 'Bobby Jones', 'Andrew Toney', 'Maurice Cheeks',
  'Bobby Jones', 'Andrew Toney', 'Maurice Cheeks', 'Bobby Jones', 'Andrew Toney',
  
  // 1970s Era Stars
  'John Havlicek', 'Dave Cowens', 'Jo Jo White', 'Paul Silas', 'Don Nelson',
  'Tom Heinsohn', 'Sam Jones', 'K.C. Jones', 'Bob Cousy', 'Bill Sharman',
  'Frank Ramsey', 'Jim Loscutoff', 'Satch Sanders', 'Ed Macauley', 'Bob Pettit',
  'Cliff Hagan', 'Slater Martin', 'Vern Mikkelsen', 'Jim Pollard', 'George Yardley',
  'Neil Johnston', 'Paul Arizin', 'Tom Gola', 'Dolph Schayes', 'Bob Pettit',
  
  // 1960s Era Stars
  'Willis Reed', 'Walt Frazier', 'Dave DeBusschere', 'Bill Bradley', 'Earl Monroe',
  'Wes Unseld', 'Elvin Hayes', 'Gus Johnson', 'Jack Marin', 'Phil Chenier',
  'Dave Bing', 'Bob Lanier', 'Dave DeBusschere', 'Bill Bradley', 'Earl Monroe',
  'Wes Unseld', 'Elvin Hayes', 'Gus Johnson', 'Jack Marin', 'Phil Chenier',
  'Dave Bing', 'Bob Lanier', 'Dave DeBusschere', 'Bill Bradley', 'Earl Monroe',
  
  // 1950s Era Stars
  'George Mikan', 'Ed Macauley', 'Bob Pettit', 'Cliff Hagan', 'Slater Martin',
  'Vern Mikkelsen', 'Jim Pollard', 'George Yardley', 'Neil Johnston', 'Paul Arizin',
  'Tom Gola', 'Dolph Schayes', 'Bob Pettit', 'Cliff Hagan', 'Slater Martin',
  'Vern Mikkelsen', 'Jim Pollard', 'George Yardley', 'Neil Johnston', 'Paul Arizin',
  'Tom Gola', 'Dolph Schayes', 'Bob Pettit', 'Cliff Hagan', 'Slater Martin',
  
  // International Players
  'Dirk Nowitzki', 'Pau Gasol', 'Marc Gasol', 'Manu Ginobili', 'Tony Parker',
  'Yao Ming', 'Hakeem Olajuwon', 'Dikembe Mutombo', 'Steve Nash', 'Andrew Bogut',
  'Patty Mills', 'Joe Ingles', 'Matthew Dellavedova', 'Aron Baynes', 'Dante Exum',
  'Ben Simmons', 'Kyrie Irving', 'Andrew Wiggins', 'Jamal Murray', 'Shai Gilgeous-Alexander',
  'RJ Barrett', 'Luka Dončić', 'Goran Dragić', 'Bojan Bogdanović', 'Nikola Vučević',
  'Nikola Jokić', 'Giannis Antetokounmpo', 'Kostas Antetokounmpo', 'Thanasis Antetokounmpo',
  'Domantas Sabonis', 'Jonas Valančiūnas', 'Kristaps Porziņģis', 'Rudy Gobert',
  'Evan Fournier', 'Nicolas Batum', 'Boris Diaw', 'Rudy Fernández', 'Juancho Hernangómez',
  'Willy Hernangómez', 'Sergio Rodríguez', 'Ricky Rubio', 'Marc Gasol', 'Pau Gasol',
  
  // WNBA Stars
  'Diana Taurasi', 'Sue Bird', 'Candace Parker', 'Maya Moore', 'Breanna Stewart',
  'A\'ja Wilson', 'Sabrina Ionescu', 'Kelsey Plum', 'Jackie Young', 'Chelsea Gray',
  'Alyssa Thomas', 'Courtney Williams', 'Rhyne Howard', 'Aliyah Boston', 'Haley Jones',
  'Caitlin Clark', 'Angel Reese', 'Kamilla Cardoso', 'Cameron Brink', 'Rickea Jackson',
  'Jacy Sheldon', 'Dyaisha Fair', 'Maddy Siegrist', 'Aliyah Boston', 'Haley Jones',
  
  // Other
  'Other'
]

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    favoritePlayer: '',
    walletAddress: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [countdown, setCountdown] = useState(5)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.favoritePlayer.trim()) newErrors.favoritePlayer = 'Favorite player is required'
    if (!formData.walletAddress.trim()) newErrors.walletAddress = 'Solana wallet address is required'
    else if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(formData.walletAddress)) {
      newErrors.walletAddress = 'Invalid Solana wallet address format'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Add timeout to prevent hanging
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout
      
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      const data = await response.json()
      
      console.log('Registration response:', { status: response.status, data })
      setDebugInfo({ status: response.status, data })
      
      if (response.ok) {
        console.log('✅ Registration successful!', data)
        setSubmitStatus('success')
        trackFormSubmission('user_registration', true)
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          favoritePlayer: '',
          walletAddress: ''
        })
      } else {
        console.error('❌ Registration failed:', { status: response.status, error: data.error })
        setSubmitStatus('error')
        trackFormSubmission('user_registration', false)
        
        // Handle specific error cases
        if (response.status === 409) {
          setErrors({ general: 'This email is already registered. Please try signing in instead.' })
        } else {
          setErrors({ general: data.error || 'Registration failed. Please try again.' })
        }
      }
    } catch (error: any) {
      console.error('Registration error:', error)
      setSubmitStatus('error')
      
      // Handle specific error types
      if (error.name === 'AbortError') {
        setErrors({ general: 'Registration timed out. Please try again.' })
      } else if (error.message?.includes('timeout')) {
        setErrors({ general: 'Registration timed out. Please try again.' })
      } else {
        setErrors({ general: 'Something went wrong. Please try again.' })
      }
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

  // Auto-redirect after successful registration
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            router.push('/')
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [submitStatus, router])

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
              Welcome to the Game!
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              You're now officially subscribed to History of the Game! Check your email for a confirmation message.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              We'll keep you updated on exclusive events, airdrops, and the future of basketball storytelling.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Redirecting to home page in {countdown} seconds...
            </p>
            
            {/* Debug Info */}
            {debugInfo && (
              <div className="bg-gray-800/50 p-4 rounded-lg text-left text-sm">
                <p className="text-green-400 mb-2">✅ Registration Details:</p>
                <p><strong>Status:</strong> {debugInfo.status}</p>
                <p><strong>User ID:</strong> {debugInfo.data?.userId || 'N/A'}</p>
                <p><strong>Email:</strong> {debugInfo.data?.userEmail || 'N/A'}</p>
                <p><strong>Message:</strong> {debugInfo.data?.message || 'N/A'}</p>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="rotate-180" size={20} />
              Return to Home
            </Link>
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

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Start Your Journey
          </h1>
          <p className="text-xl text-gray-300">
            Join the History of the Game community and be part of the future of basketball storytelling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User size={16} />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.name}
              </p>}
            </div>

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

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Phone size={16} />
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.phone}
              </p>}
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MapPin size={16} />
                  City *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                    errors.city ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your city"
                />
                {errors.city && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.city}
                </p>}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MapPin size={16} />
                  State *
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                    errors.state ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your state"
                />
                {errors.state && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.state}
                </p>}
              </div>
            </div>

            {/* Favorite Player */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Star size={16} />
                Who is your favorite player of all time? *
              </label>
              <select
                value={formData.favoritePlayer}
                onChange={(e) => handleInputChange('favoritePlayer', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.favoritePlayer ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <option value="">Select your favorite player</option>
                {favoritePlayers.map((player) => (
                  <option key={player} value={player}>
                    {player}
                  </option>
                ))}
              </select>
              {errors.favoritePlayer && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.favoritePlayer}
              </p>}
            </div>

            {/* Solana Wallet Address */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Wallet size={16} />
                Solana Wallet Address *
              </label>
              <input
                type="text"
                value={formData.walletAddress}
                onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all ${
                  errors.walletAddress ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your Solana wallet address for future airdrops"
              />
              {errors.walletAddress && <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.walletAddress}
              </p>}
              <p className="text-gray-400 text-xs mt-1">
                This will be used for exclusive airdrops and NFT distributions
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                'Join the Community'
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'error' && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm mb-2">
                  <AlertCircle size={16} />
                  {errors.general || 'Something went wrong. Please try again.'}
                </div>
                {errors.general && errors.general.includes('already registered') && (
                  <Link href="/login" className="text-neon-blue hover:underline text-sm">
                    Sign in to your account instead
                  </Link>
                )}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}