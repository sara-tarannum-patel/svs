import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const ctaCards = [
    {
      title: 'Academic Institutions',
      description: 'Transform research into impact through our academic partnerships',
      icon: '🎓',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      title: 'Organizations',
      description: 'Drive social impact through strategic partnerships and innovation',
      icon: '🏢',
      color: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      title: 'Investors',
      description: 'Access curated impact investment opportunities with strong returns',
      icon: '💰',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      title: 'Partners',
      description: 'Join our ecosystem of changemakers and innovators',
      icon: '🤝',
      color: 'bg-orange-50',
      textColor: 'text-orange-700',
    },
  ];

  return (
    <div className="relative">
      {/* CTA Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          How Can We Help You?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ctaCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${card.color} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className={`${card.textColor} text-xl font-semibold mb-2`}>
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
              <button
                className={`mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${card.textColor.replace('text', 'bg')} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50`}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Connect Now</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default CallToAction; 