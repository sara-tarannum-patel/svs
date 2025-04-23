import React from 'react';
import { motion } from 'framer-motion';

const FeaturedHighlights: React.FC = () => {
  const impactNumbers = [
    { label: 'Partners Connected', value: '150+' },
    { label: 'Universities Engaged', value: '25+' },
    { label: 'Projects Launched', value: '50+' },
    { label: 'Social Impact Score', value: '4.8/5' },
  ];

  const successStories = [
    {
      title: 'University Innovation Hub',
      description: 'Transformed academic research into sustainable business solutions',
      image: '/src/assets/success1.jpg',
    },
    {
      title: 'Social Impact Accelerator',
      description: 'Launched 10 social enterprises in under 12 months',
      image: '/src/assets/success2.jpg',
    },
    {
      title: 'Corporate Partnership',
      description: 'Bridged gap between corporate resources and social innovation',
      image: '/src/assets/success3.jpg',
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {impactNumbers.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600">{item.value}</div>
              <div className="mt-2 text-lg text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual image */}
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Partner Testimonials
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Partner Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHighlights; 