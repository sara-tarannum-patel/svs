import React from 'react';
import { motion } from 'framer-motion';

const NewsAndImpact: React.FC = () => {
  const newsItems = [
    {
      title: 'New Partnership with Leading University',
      date: 'March 15, 2024',
      excerpt: 'Expanding our academic network with innovative research collaboration',
      category: 'Partnerships',
    },
    {
      title: 'Impact Report 2023 Released',
      date: 'March 10, 2024',
      excerpt: 'Celebrating another year of sustainable social impact',
      category: 'Impact',
    },
    {
      title: 'Innovation Hub Launch',
      date: 'March 5, 2024',
      excerpt: 'New center for social entrepreneurship opens its doors',
      category: 'News',
    },
  ];

  const impactHighlights = [
    {
      title: 'Sustainable Development Goals',
      description: 'Contributing to 8 out of 17 UN SDGs through our initiatives',
      icon: '🌍',
    },
    {
      title: 'Community Impact',
      description: 'Directly benefiting over 10,000 individuals through our programs',
      icon: '👥',
    },
    {
      title: 'Environmental Impact',
      description: 'Reducing carbon footprint through sustainable practices',
      icon: '🌱',
    },
  ];

  const socialMediaLinks = [
    { platform: 'Twitter', url: 'https://twitter.com/sobus', icon: '🐦' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/sobus', icon: '💼' },
    { platform: 'Facebook', url: 'https://facebook.com/sobus', icon: '📘' },
    { platform: 'Instagram', url: 'https://instagram.com/sobus', icon: '📸' },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* News Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Social Impact Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {socialMediaLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl hover:text-indigo-600 transition-colors duration-300"
              >
                {link.icon}
                <span className="sr-only">{link.platform}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndImpact; 