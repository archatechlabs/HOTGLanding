'use client'

import { Trophy, Users, Clock, Star } from 'lucide-react'

export default function StaticMuseumShowcase() {
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Museum</span> Exhibits
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Immerse yourself in basketball's rich history through cutting-edge Web3 technology 
            and interactive storytelling experiences.
          </p>
        </div>

        {/* Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exhibits.map((exhibit, index) => (
            <div key={index} className="group relative">
              <div className="relative h-full p-6 glass rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exhibit.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${exhibit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <exhibit.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-gray-900">
                    {exhibit.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exhibit.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">
                      {exhibit.stats}
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Preview */}
        <div className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-white/20">
              <h3 className="text-4xl font-orbitron font-bold mb-6 gradient-text">
                Experience the Future
              </h3>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Our Web3 technology brings basketball history to life like never before. 
                Each exhibit is an interactive journey through time.
              </p>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg text-white">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
