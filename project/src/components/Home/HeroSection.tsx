import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connecting Innovation with Impact
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Sobus Venture Studios bridges the gap between academic innovation, social impact, and sustainable business growth.
          </p>
          
          {/* Stakeholder Category Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['Academic', 'Organization', 'Investor', 'Partner'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Quick Connect Form */}
          <div className="mt-12 max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="interest" className="sr-only">Area of Interest</label>
                <select
                  id="interest"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option>Select your interest</option>
                  <option>Academic Partnership</option>
                  <option>Investment Opportunities</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connect Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 