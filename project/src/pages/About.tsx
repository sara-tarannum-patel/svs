import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Users, Lightbulb, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2020', title: 'Foundation', description: 'Established with a vision to bridge academia and industry' },
    { year: '2021', title: 'First Partnerships', description: 'Launched initial university collaborations' },
    { year: '2022', title: 'Expansion', description: 'Scaled to 50+ partner institutions' },
    { year: '2023', title: 'Global Impact', description: 'Reached international markets and expanded services' },
    { year: '2024', title: 'Innovation Hub', description: 'Launched comprehensive innovation ecosystem' },
  ];

  const values = [
    { icon: Target, title: 'Purpose-Driven', description: 'Creating meaningful impact through innovation' },
    { icon: Users, title: 'Collaborative', description: 'Fostering partnerships that drive success' },
    { icon: Lightbulb, title: 'Innovative', description: 'Pushing boundaries with creative solutions' },
    { icon: Award, title: 'Excellence', description: 'Maintaining highest standards in all endeavors' },
    { icon: Clock, title: 'Agile', description: 'Adapting quickly to evolving needs' },
    { icon: TrendingUp, title: 'Sustainable', description: 'Building for long-term positive impact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
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
              Our Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
            >
              Building Bridges
              <br />
              <span className="text-blue-300">Through Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              We're more than just a platform. We're a catalyst for change, connecting academic brilliance with real-world impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Users className="h-6 w-6" />
                <span>50+ Partner Institutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Lightbulb className="h-6 w-6" />
                <span>1000+ Projects Incubated</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Award className="h-6 w-6" />
                <span>Global Recognition</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To accelerate innovation by creating meaningful partnerships between academic institutions and industry leaders, 
              driving sustainable development and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}
                >
                  <div className="w-5/12 text-right pr-8">
                    {index % 2 === 0 && (
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center w-2/12">
                    <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="w-5/12 pl-8">
                    {index % 2 !== 0 && (
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
              >
                <img
                  src={`https://source.unsplash.com/random/200x100?company&sig=${i}`}
                  alt={`Partner ${i}`}
                  className="max-h-12 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;