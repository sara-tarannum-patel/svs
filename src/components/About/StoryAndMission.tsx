import React from 'react';
import { motion } from 'framer-motion';

const StoryAndMission: React.FC = () => {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Academic Bridge was founded with a vision to connect academic research with industry needs.',
    },
    {
      year: '2019',
      title: 'First Partnerships',
      description: 'Established collaborations with leading universities and tech companies.',
    },
    {
      year: '2020',
      title: 'Impact Expansion',
      description: 'Launched multiple successful projects addressing global challenges.',
    },
    {
      year: '2021',
      title: 'Global Reach',
      description: 'Expanded operations to three continents with 20+ partner institutions.',
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Opened state-of-the-art research and development facilities.',
    },
    {
      year: '2023',
      title: 'Sustainable Growth',
      description: 'Achieved 100% year-over-year growth while maintaining impact focus.',
    },
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in research and technology development',
      icon: '💡',
    },
    {
      title: 'Impact',
      description: 'Creating meaningful change in communities worldwide',
      icon: '🌍',
    },
    {
      title: 'Collaboration',
      description: 'Building bridges between academia and industry',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description: 'Ensuring long-term positive outcomes for all stakeholders',
      icon: '♻️',
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To bridge the gap between academic innovation and industry needs by
            fostering collaborative research, developing sustainable solutions,
            and creating impactful partnerships that drive positive change.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200" />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-1/2`}
              >
                <div className={`p-6 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-indigo-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAndMission; 