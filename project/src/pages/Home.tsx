import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaitlistForm from '../components/WaitlistForm';

// Using placeholder images from a reliable source
const heroImage = "https://images.unsplash.com/photo-1454165804606-c3d4bcb6d036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature1Illustration = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature2Illustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature3Illustration = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service1Image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service2Image = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const service3Image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const ctaIllustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// Service images for each category
const serviceImages = {
  incubation: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ],
  community: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ],
  academic: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ],
  innovation: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ]
};

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({
    incubation: 0,
    community: 0,
    academic: 0,
    innovation: 0
  });
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const services = [
    {
      title: 'Incubation',
      description: 'Supporting innovative ideas from concept to market',
      icon: '🚀',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
      key: 'incubation'
    },
    {
      title: 'Community Projects',
      description: 'Bridging academia with real-world social impact',
      icon: '🤝',
      color: 'bg-green-50',
      textColor: 'text-green-700',
      key: 'community'
    },
    {
      title: 'Academic Partnerships',
      description: 'Creating opportunities for students and faculty',
      icon: '🎓',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
      key: 'academic'
    },
    {
      title: 'Innovation Events',
      description: 'Hosting hackathons, workshops, and conferences',
      icon: '💡',
      color: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      key: 'innovation'
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

  // Auto-advance slideshow for each service
  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    
    services.forEach((service) => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [service.key]: (prev[service.key] + 1) % serviceImages[service.key as keyof typeof serviceImages].length
        }));
      }, 5000); // Change image every 5 seconds
      
      intervals.push(interval);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  // Add demo app images
  const demoImages = {
    career: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    innovation: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    community: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    intranet: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    learning: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative pt-2 pb-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

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
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 hover:bg-blue-100 transition-colors cursor-pointer">
                    Connecting Academia with Community Impact
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors cursor-pointer">Sobus</span>
                  <span className="block text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">Venture Studios</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                >
                  Bridging the gap between academic talent and community needs through innovation and collaboration.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    to="/incubation/apply"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <span className="mr-2">🚀</span>
                    Apply Now
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <span className="mr-2">📚</span>
                    Explore Programs
                  </Link>
                </motion.div>
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
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Student Startup Innovation"
                    className="w-full max-w-4xl object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section with Modern Header Design */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Floating Elements */}
            <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-white/5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.1, 0],
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 text-sm font-semibold text-blue-100 bg-blue-500/20 rounded-full mb-6"
            >
                Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
            >
              Empowering Innovation
              <br />
              <span className="text-blue-300">Through Collaboration</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              We bring together entrepreneurs, researchers, and industry leaders to create transformative solutions that shape the future.
            </motion.p>
            
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-blue-100">Fostering groundbreaking ideas and technological advancements</p>
                  </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-blue-100">Building bridges between academia, industry, and entrepreneurs</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                <p className="text-blue-100">Creating solutions that make a real difference in the world</p>
              </motion.div>
            </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.1, 0],
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
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
                className="relative group cursor-pointer"
                onClick={() => {
                  // Redirect to the appropriate page based on service
                  switch(service.key) {
                    case 'incubation':
                      window.location.href = '/incubation';
                      break;
                    case 'community':
                      window.location.href = '/community';
                      break;
                    case 'academic':
                      window.location.href = '/academic';
                      break;
                    case 'innovation':
                      window.location.href = '/innovation';
                      break;
                  }
                }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300" />
                
                {/* Card Content */}
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 overflow-hidden h-full"
                whileHover={{ y: -5 }}
              >
                  {/* Service Image Slideshow */}
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex[service.key]}
                        src={serviceImages[service.key as keyof typeof serviceImages][currentImageIndex[service.key]]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                <motion.div
                        className="text-4xl mb-2"
                  animate={{ scale: activeService === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                      <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                    </div>
                    {/* Navigation Dots - Prevent click propagation */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {serviceImages[service.key as keyof typeof serviceImages].map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex[service.key] === dotIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [service.key]: dotIndex
                            }));
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Service Description */}
                  <motion.p
                    className="text-gray-600 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Progress Indicator */}
                <motion.div
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeService === index ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Click Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: -5 }}
                  >
                    <span className="text-sm font-semibold">Learn More →</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </section>

      {/* Enhanced Features Section - Beacon Platform */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
        </div>

        {/* Animated Background Elements */}
              <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(168, 85, 247, 0.2)'} 0%, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <span className="inline-block px-6 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 shadow-lg">
                Student Success Platform
              </span>
              <motion.div
                className="absolute -inset-1 bg-blue-100 rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Beacon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Your all-in-one platform for academic success and career growth
            </motion.p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Career Development",
                icon: "🎯",
                features: ["Job Opportunities", "Internships", "Industry Mentors", "Skill Development"],
                gradient: "from-blue-500 to-blue-600",
                image: demoImages.career
              },
              {
                title: "Innovation Hub",
                icon: "💡",
                features: ["Startup Resources", "Hackathons", "Competitions", "Research Tools"],
                gradient: "from-purple-500 to-purple-600",
                image: demoImages.innovation
              },
              {
                title: "Community & Events",
                icon: "🤝",
                features: ["Student Communities", "Conferences", "Academic Events", "Discussion Forums"],
                gradient: "from-indigo-500 to-indigo-600",
                image: demoImages.community
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300" />
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row h-[280px]"
                whileHover={{ y: -5 }}
              >
                  {/* Image Side */}
                  <div className="w-full md:w-2/5 h-32 md:h-full relative overflow-hidden">
                <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={category.image}
                        alt={`${category.title} Demo`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-3/5 p-4 flex flex-col">
                    {/* Icon Container */}
                  <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center mb-2 relative overflow-hidden"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-xl relative z-10">{category.icon}</span>
                  </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-gray-600 group/item bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-gray-100"
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.span
                            className="mr-1.5 text-blue-500 group-hover/item:text-purple-500 transition-colors"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          >
                            •
                          </motion.span>
                          <span className="text-xs font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "College Intranet",
                icon: "🏫",
                features: [
                  "Campus Announcements",
                  "Event Calendars",
                  "Student Organizations",
                  "Resource Library",
                  "Campus Services",
                  "Student Support"
                ],
                gradient: "from-green-500 to-green-600",
                image: demoImages.intranet
              },
              {
                title: "Learning Resources",
                icon: "📚",
                features: [
                  "Course Materials",
                  "Research Papers",
                  "Tutorial Videos",
                  "Practice Problems",
                  "Study Groups",
                  "Expert Q&A"
                ],
                gradient: "from-amber-500 to-amber-600",
                image: demoImages.learning
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300" />
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row h-[280px]"
                  whileHover={{ y: -5 }}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-2/5 h-32 md:h-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={section.image}
                        alt={`${section.title} Demo`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-3/5 p-4 flex flex-col">
                    {/* Icon Container */}
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center mb-2 relative overflow-hidden"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-xl relative z-10">{section.icon}</span>
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {section.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-gray-600 group/item bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-gray-100"
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.span
                            className="mr-1.5 text-blue-500 group-hover/item:text-purple-500 transition-colors"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          >
                            •
                          </motion.span>
                          <span className="text-xs font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="mr-3 text-2xl">🚀</span>
              <span className="relative z-10">Explore Beacon</span>
            </button>
          </motion.div>
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

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default Home;