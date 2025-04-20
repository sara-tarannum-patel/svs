import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Using placeholder images from a reliable source
const heroImage = "https://images.unsplash.com/photo-1454165804606-c3d4bcb6d036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature1Illustration = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature2Illustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature3Illustration = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service1Image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service2Image = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service3Image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const ctaIllustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      title: 'Incubation',
      description: 'Supporting innovative ideas from concept to market',
      icon: '🚀',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      title: 'Community Projects',
      description: 'Bridging academia with real-world social impact',
      icon: '🤝',
      color: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      title: 'Academic Partnerships',
      description: 'Creating opportunities for students and faculty',
      icon: '🎓',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      title: 'Innovation Events',
      description: 'Hosting hackathons, workshops, and conferences',
      icon: '💡',
      color: 'bg-yellow-50',
      textColor: 'text-yellow-700',
    },
  ];

  const impactStats = [
    { number: '50+', label: 'Projects Incubated', icon: '🚀' },
    { number: '1000+', label: 'Students Engaged', icon: '👥' },
    { number: '25+', label: 'Community Partners', icon: '🤝' },
    { number: '10+', label: 'Academic Institutions', icon: '🏫' },
  ];

  const testimonials = [
    {
      quote: "Sobus Ventures transformed our community project into a sustainable initiative.",
      author: "Dr. Sarah Johnson",
      role: "Community Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      quote: "The incubation program helped us turn our idea into a successful startup.",
      author: "Alex Chen",
      role: "Founder, TechStart",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      quote: "Our students gained invaluable real-world experience through Sobus projects.",
      author: "Prof. Michael Brown",
      role: "University Partner",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const interactiveFeatures = [
    {
      title: 'Real-time Collaboration',
      description: 'Work together with team members in real-time',
      icon: '🤝',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your project milestones and achievements',
      icon: '📊',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Resource Library',
      description: 'Access our extensive collection of resources',
      icon: '📚',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-full mb-4 hover:bg-gray-200 transition-colors cursor-pointer">
                    Connecting Academia with Community Impact
                  </span>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span className="block hover:text-gray-700 transition-colors cursor-pointer">Sobus</span>
                  <span className="block text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Venture Studios</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Bridging the gap between academic talent and community needs through innovation and collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/incubation/apply"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95"
                  >
                    <span className="mr-2">🚀</span>
                    Apply Now
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95"
                  >
                    <span className="mr-2">📚</span>
                    Explore Programs
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Illustration Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Illustration */}
              <motion.div 
                className="relative w-full h-[600px] md:h-[600px] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
                
                {/* New Illustration */}
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full max-w-4xl">
                    {/* Inline SVG illustration */}
                    <svg className="w-full h-auto" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                      <rect width="1200" height="600" fill="white"/>
                      <g transform="translate(100, 50)">
                        {/* Left person */}
                        <path d="M220,450 C220,450 150,200 250,200 C350,200 300,450 300,450" fill="none" stroke="black" strokeWidth="3" />
                        <circle cx="250" cy="150" r="50" fill="black" />
                        <rect x="200" y="200" width="100" height="200" fill="white" stroke="black" strokeWidth="3" />
                        <rect x="150" y="400" width="200" height="50" fill="black" />
                        
                        {/* Screen */}
                        <rect x="400" y="100" width="400" height="350" fill="black" />
                        <rect x="420" y="120" width="360" height="200" fill="white" stroke="black" strokeWidth="2" />
                        <polygon points="600,220 500,300 700,300" fill="black" />
                        
                        {/* Right person */}
                        <circle cx="900" cy="200" r="50" fill="white" stroke="black" strokeWidth="3" />
                        <rect x="850" y="250" width="100" height="150" fill="white" stroke="black" strokeWidth="3" />
                        <rect x="800" y="400" width="200" height="50" fill="white" stroke="black" strokeWidth="3" />
                        <rect x="850" y="300" width="150" height="100" fill="white" stroke="black" strokeWidth="2" transform="rotate(-10, 900, 350)" />
                        
                        {/* Gear Icons */}
                        <circle cx="950" cy="130" r="25" fill="white" stroke="black" strokeWidth="2"/>
                        <circle cx="950" cy="130" r="18" fill="white" stroke="black" strokeWidth="2"/>
                        <circle cx="950" cy="130" r="10" fill="white" stroke="black" strokeWidth="2"/>
                        <path d="M950,105 L950,100" stroke="black" strokeWidth="2"/>
                        <path d="M950,160 L950,155" stroke="black" strokeWidth="2"/>
                        <path d="M925,130 L920,130" stroke="black" strokeWidth="2"/>
                        <path d="M980,130 L975,130" stroke="black" strokeWidth="2"/>
                        <path d="M932,112 L927,107" stroke="black" strokeWidth="2"/>
                        <path d="M973,153 L968,148" stroke="black" strokeWidth="2"/>
                        <path d="M932,148 L927,153" stroke="black" strokeWidth="2"/>
                        <path d="M973,107 L968,112" stroke="black" strokeWidth="2"/>
                        
                        {/* Connection Lines */}
                        <path d="M300,250 C350,250 450,180 600,180" stroke="black" strokeWidth="2" strokeDasharray="5,5"/>
                        <path d="M850,300 C800,300 750,280 700,250" stroke="black" strokeWidth="2" strokeDasharray="5,5"/>
                        
                        {/* Message Bubble */}
                        <rect x="400" y="300" width="80" height="50" rx="10" fill="white" stroke="black" strokeWidth="2"/>
                        <circle cx="420" cy="325" r="4" fill="black"/>
                        <circle cx="440" cy="325" r="4" fill="black"/>
                        <circle cx="460" cy="325" r="4" fill="black"/>
                      </g>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                At Sobus Ventures, we bridge the gap between academic talent and community needs. 
                We create opportunities for students and faculty to apply their knowledge and skills 
                to real-world challenges, fostering innovation and social impact.
              </p>
              <div className="space-y-4">
                {[
                  'Connecting academic institutions with community projects',
                  'Providing incubation support for innovative ideas',
                  'Creating meaningful partnerships and collaborations',
                  'Empowering students with real-world experience',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Mission"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-4xl">🎯</div>
                <p className="text-sm text-gray-600">Making Impact Together</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Creating opportunities for innovation and impact
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                onClick={() => setActiveService(index)}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ scale: activeService === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.div
                  className="mt-4 h-1 bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: activeService === index ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-200 transform group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Making a difference in communities and academia
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300"
                  style={{ opacity: hoveredStat === index ? 0.1 : 0 }}
                />
                <motion.div
                  className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center transform transition-all duration-300 hover:shadow-md"
                  style={{ transform: hoveredStat === index ? 'scale(1.05)' : 'scale(1)' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ scale: hoveredStat === index ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Hear from our partners and participants
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="relative h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                  <div className="p-6">
                    <motion.p
                      className="text-gray-600 italic mb-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Join our community of innovators and changemakers
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/incubation/apply"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                >
                  <span className="mr-2">🚀</span>
                  Apply Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
                >
                  <span className="mr-2">💬</span>
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;