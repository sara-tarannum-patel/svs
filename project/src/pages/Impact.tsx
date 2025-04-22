import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Heart,
  Sprout,
  Users,
  Building,
  ArrowRight,
  BarChart,
  Target,
} from 'lucide-react';

const Impact: React.FC = () => {
  // Impact metrics data
  const metrics = {
    incubation: {
      title: "Incubation Program",
      stats: [
        { label: "Startups Supported", value: "50+" },
        { label: "Jobs Created", value: "200+" },
        { label: "Funding Raised", value: "$5M+" },
        { label: "Success Rate", value: "85%" }
      ],
      description: "Empowering entrepreneurs to transform ideas into successful ventures",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    events: {
      title: "Events & Competitions",
      stats: [
        { label: "Events Hosted", value: "25+" },
        { label: "Participants", value: "1000+" },
        { label: "Projects Showcased", value: "200+" },
        { label: "Winning Teams", value: "50+" }
      ],
      description: "Creating platforms for innovation and collaboration",
      images: [
        "https://images.unsplash.com/photo-1511795409834-432f7b72bcf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    services: {
      title: "Services & Support",
      stats: [
        { label: "Research Projects", value: "100+" },
        { label: "Industry Partners", value: "30+" },
        { label: "Technology Transfers", value: "40+" },
        { label: "Training Sessions", value: "150+" }
      ],
      description: "Bridging academia and industry through comprehensive support",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    community: {
      title: "Community Impact",
      stats: [
        { label: "Students Reached", value: "5000+" },
        { label: "Mentors Engaged", value: "100+" },
        { label: "Workshops Conducted", value: "75+" },
        { label: "Partnerships Formed", value: "50+" }
      ],
      description: "Building a vibrant ecosystem of innovators and changemakers",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    }
  };

  const impactMetrics = [
    { number: '500+', label: 'Projects Launched', icon: Sprout },
    { number: '100K+', label: 'Lives Impacted', icon: Heart },
    { number: '50+', label: 'Countries Reached', icon: Globe },
    { number: '1000+', label: 'Partners Engaged', icon: Users },
  ];

  const sdgGoals = [
    { number: 4, title: 'Quality Education', color: 'bg-red-600' },
    { number: 8, title: 'Decent Work and Economic Growth', color: 'bg-purple-600' },
    { number: 9, title: 'Industry, Innovation and Infrastructure', color: 'bg-orange-600' },
    { number: 17, title: 'Partnerships for the Goals', color: 'bg-blue-600' },
  ];

  const impactStories = [
    {
      title: 'Rural Innovation Hub',
      location: 'Southeast Asia',
      impact: '10,000+ farmers empowered',
      image: 'https://source.unsplash.com/random/800x600?agriculture',
    },
    {
      title: 'EdTech Revolution',
      location: 'Africa',
      impact: '50,000+ students reached',
      image: 'https://source.unsplash.com/random/800x600?education',
    },
    {
      title: 'Clean Energy Initiative',
      location: 'South America',
      impact: '30+ communities powered',
      image: 'https://source.unsplash.com/random/800x600?solar',
    },
  ];

  const impactAreas = [
    {
      icon: Building,
      title: 'Economic Development',
      description: 'Creating sustainable business opportunities and jobs',
    },
    {
      icon: Users,
      title: 'Social Innovation',
      description: 'Addressing critical social challenges through technology',
    },
    {
      icon: Globe,
      title: 'Environmental Impact',
      description: 'Promoting sustainable practices and green technologies',
    },
    {
      icon: Target,
      title: 'Educational Access',
      description: 'Expanding access to quality education and training',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

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
              className="inline-block px-4 py-2 text-sm font-semibold text-indigo-100 bg-indigo-500/20 rounded-full mb-6"
            >
              Our Impact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100"
            >
              Making a Difference
              <br />
              <span className="text-indigo-300">Through Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how we're transforming ideas into impact across our initiatives and programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(metrics).map(([key, data], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {data.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`${i === 0 ? 'col-span-2' : ''} relative group overflow-hidden rounded-xl shadow-2xl`}
                    >
                      <img
                        src={image}
                        alt={`${data.title} - Image ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{data.description}</p>
                <div className="grid grid-cols-2 gap-6">
                  {data.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Impact</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in creating meaningful change through innovation and entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/incubation"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50"
              >
                Join Our Programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;