import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Using placeholder images from a reliable source
const heroImage = "https://images.unsplash.com/photo-1454165804606-c3d4bcb6d036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const programIllustration = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const benefit1Illustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const benefit2Illustration = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const benefit3Illustration = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const benefit4Illustration = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const process1Illustration = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const process2Illustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const process3Illustration = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const process4Illustration = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const successImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const Incubation: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
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
              Startup Support
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
            >
              Nurturing Innovation
              <br />
              <span className="text-blue-300">From Idea to Impact</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering entrepreneurs with resources, mentorship, and support to transform innovative ideas into successful ventures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <span className="text-2xl">🎯</span>
                <span>Mentorship</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <span className="text-2xl">💼</span>
                <span>Resources</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <span className="text-2xl">🌐</span>
                <span>Networking</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={programIllustration}
                alt="Program Overview"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our incubation program provides comprehensive support for startups
                and entrepreneurs to transform innovative ideas into successful
                businesses.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: 'Duration',
                    value: '12-24 months',
                    icon: '⏱️',
                  },
                  {
                    title: 'Support',
                    value: 'Full-time',
                    icon: '🤝',
                  },
                  {
                    title: 'Resources',
                    value: 'Unlimited',
                    icon: '💡',
                  },
                  {
                    title: 'Success Rate',
                    value: '85%',
                    icon: '📈',
                  },
                ].map((item, index) => (
              <motion.div
                    key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support to help your startup succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Mentorship',
                description:
                  'Access to experienced mentors and industry experts',
                illustration: benefit1Illustration,
              },
              {
                title: 'Resources',
                description:
                  'State-of-the-art facilities and equipment',
                illustration: benefit2Illustration,
              },
              {
                title: 'Funding',
                description:
                  'Access to investment opportunities and grants',
                illustration: benefit3Illustration,
              },
              {
                title: 'Networking',
                description:
                  'Connect with potential partners and customers',
                illustration: benefit4Illustration,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6">
                  <img
                    src={benefit.illustration}
                    alt={benefit.title}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our incubation program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Submit Application',
                description: 'Fill out our application form with your project details',
                illustration: process1Illustration,
              },
              {
                title: 'Initial Review',
                description: 'Our team reviews your application and project',
                illustration: process2Illustration,
              },
              {
                title: 'Interview',
                description: 'Meet with our team to discuss your project',
                illustration: process3Illustration,
              },
              {
                title: 'Onboarding',
                description: 'Join the program and start your journey',
                illustration: process4Illustration,
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="w-20 h-20 mx-auto mb-6">
                  <img
                    src={step.illustration}
                    alt={step.title}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="relative"
              >
                <img
                src={successImage}
                alt="Success Stories"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                <p className="text-lg">
                  Join our network of successful startups and entrepreneurs
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Success Stories
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our incubation program has helped numerous startups achieve their
                goals and make a real impact in their industries.
              </p>
              <div className="space-y-4">
                {[
                  'Access to our alumni network',
                  'Success story features',
                  'Investment opportunities',
                  'Industry connections',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                </div>
                    <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our incubation program and turn your innovative idea into a
              successful business.
            </p>
            <div className="text-center">
            <Link
                to="/incubation/apply"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Apply Now
            </Link>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Incubation;