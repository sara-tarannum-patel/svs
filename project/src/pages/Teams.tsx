import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Teams: React.FC = () => {
  // Team categories data
  const teamCategories = {
    leadership: {
      title: "Leadership Team",
      description: "Visionary leaders driving innovation and growth",
      members: [
        {
          name: "John Doe",
          role: "CEO & Founder",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "20+ years of experience in technology and entrepreneurship"
        },
        {
          name: "Jane Smith",
          role: "CTO",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "Expert in AI and machine learning"
        }
      ]
    },
    mentors: {
      title: "Mentors & Advisors",
      description: "Industry experts guiding our startups to success",
      members: [
        {
          name: "Alex Johnson",
          role: "Business Strategy",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "Former Fortune 500 executive"
        },
        {
          name: "Sarah Williams",
          role: "Technology Innovation",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "Serial entrepreneur and investor"
        }
      ]
    },
    experts: {
      title: "Domain Experts",
      description: "Specialists providing technical and industry expertise",
      members: [
        {
          name: "Michael Chen",
          role: "AI & ML Expert",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "PhD in Computer Science"
        },
        {
          name: "Emily Davis",
          role: "Market Research",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          bio: "Market analysis specialist"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
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
              className="inline-block px-4 py-2 text-sm font-semibold text-emerald-100 bg-emerald-500/20 rounded-full mb-6"
            >
              Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100"
            >
              Meet the Visionaries
              <br />
              <span className="text-emerald-300">Behind Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
            >
              A diverse team of experts, mentors, and innovators dedicated to transforming ideas into impactful ventures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(teamCategories).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-32"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {category.members.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="aspect-w-4 aspect-h-3 h-48">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of a team that's making a difference in the world of innovation and entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teams; 