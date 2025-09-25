'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Globe, Star, Clock } from 'lucide-react'

export default function IRLEvents() {
  const upcomingEvents = [
    {
      city: "New York City",
      country: "USA",
      date: "November 7, 2025",
      venue: "History of the Game Launch Event",
      description: "The official launch of History of the Game! Join us for the grand opening of our Web3 basketball museum with exclusive NFT drops, legendary player appearances, and the future of basketball storytelling.",
      status: "Upcoming",
      capacity: "15,000 visitors"
    },
    {
      city: "Los Angeles",
      country: "USA",
      date: "February 13-16, 2026",
      venue: "NBA All-Star Weekend 2026 HOTG Induction",
      description: "Join us for the historic induction of History of the Game into the NBA All-Star Weekend festivities. Experience exclusive memorabilia, meet basketball legends, and witness the future of basketball storytelling.",
      status: "Upcoming",
      capacity: "10,000 visitors"
    },
    {
      city: "Tokyo",
      country: "Japan", 
      date: "April 20-22, 2026",
      venue: "Tokyo Dome",
      description: "Join us for our first international pop-up featuring Japanese basketball legends and cutting-edge technology integration.",
      status: "Upcoming",
      capacity: "8,000 visitors"
    }
  ]

  const features = [
    {
      icon: Globe,
      title: "Global Presence",
      description: "We're bringing basketball history to life through physical pop-up museums in major cities worldwide."
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Join live events, meet basketball legends, and connect with fellow fans in person."
    },
    {
      icon: Star,
      title: "Exclusive Experiences",
      description: "Access rare memorabilia, interactive exhibits, and unique Web3 integrations you can't find anywhere else."
    },
    {
      icon: Calendar,
      title: "Regular Schedule",
      description: "We host events year-round, ensuring basketball fans everywhere can experience our museum."
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-basketball-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6">
            <MapPin className="text-neon-blue" size={16} />
            <span className="text-sm font-medium text-neon-blue">IRL Events & Pop-ups</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            Experience Basketball History
            <br />
            <span className="text-3xl md:text-5xl">In Real Life</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're bringing the digital museum to life through physical pop-up experiences, 
            live events, and immersive installations in cities around the world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-white text-center mb-12">
            Upcoming Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={`${event.city}-${event.date}`}
                className="bg-gray-900/50 border border-neon-blue/20 rounded-2xl p-6 backdrop-blur-sm hover:border-neon-blue/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-neon-blue" size={20} />
                    <span className="text-white font-semibold">{event.city}, {event.country}</span>
                  </div>
                  <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-semibold rounded-full">
                    {event.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-orbitron font-bold text-white mb-2">
                  {event.venue}
                </h4>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <button className="w-full py-2 px-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:opacity-90 transition-opacity">
                  Get Notified
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Want to Host an Event in Your City?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're always looking for new cities to bring our pop-up museum experience. 
              Join our community and help us bring basketball history to your hometown.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity">
                Request Your City
              </button>
              <button className="px-8 py-3 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all">
                Join Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
