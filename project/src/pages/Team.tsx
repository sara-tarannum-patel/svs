import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/team/john-doe.jpg',
      bio: 'Visionary leader with 15+ years of experience in social impact and entrepreneurship.',
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      image: '/images/team/jane-smith.jpg',
      bio: 'Operations expert specializing in scaling social enterprises and impact measurement.',
    },
    {
      name: 'Mike Johnson',
      role: 'CTO',
      image: '/images/team/mike-johnson.jpg',
      bio: 'Technology innovator focused on developing sustainable solutions for social good.',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Impact',
      image: '/images/team/sarah-williams.jpg',
      bio: 'Impact measurement specialist with a passion for data-driven social change.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Team
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Meet the people behind our success
          </p>
        </div>
        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals driving our mission to create sustainable social impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals who want to make a difference.
              Check out our current openings and join us in creating meaningful change.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 