import React from 'react';
import { motion } from 'framer-motion';
import { academicPartners, industryPartners, jointInitiatives } from '../../constants/about';

const PartnershipsAndCollaborations: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Partners */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Academic Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-indigo-600 mb-4">{partner.focus}</p>
                <div className="space-y-2">
                  {partner.projects?.map((project) => (
                    <p key={project} className="text-gray-600">
                      {project}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Industry Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-indigo-600 mb-2">{partner.type}</p>
                <p className="text-gray-600">{partner.collaboration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Joint Initiatives */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Joint Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jointInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="space-y-2">
                    {initiative.partners.map((partner) => (
                      <p key={partner} className="text-indigo-600">
                        {partner}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsAndCollaborations; 