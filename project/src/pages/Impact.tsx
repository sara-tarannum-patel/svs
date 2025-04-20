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

const Impact = () => {
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
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Global Impact</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Driving sustainable innovation and social change through meaningful partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <metric.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Supporting UN Sustainable Development Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`h-2 ${goal.color}`} />
                <div className="p-6">
                  <div className={`h-12 w-12 ${goal.color} text-white rounded-full flex items-center justify-center text-xl font-bold mb-4`}>
                    {goal.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-2">{story.location}</p>
                  <p className="text-blue-600 font-semibold">{story.impact}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <area.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Measurement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-lg text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Measuring Our Impact</h2>
                <p className="text-lg text-blue-200 mb-6">
                  We use comprehensive metrics and regular assessments to ensure our
                  initiatives create lasting positive change.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Learn About Our Methodology <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800 rounded-lg p-6">
                  <BarChart className="h-8 w-8 text-blue-300 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Data-Driven</h3>
                  <p className="text-blue-200">Rigorous impact measurement</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-6">
                  <Target className="h-8 w-8 text-blue-300 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Goal-Oriented</h3>
                  <p className="text-blue-200">Clear impact objectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Creating Impact</h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to drive innovation and create positive change
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/partner-portal"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;