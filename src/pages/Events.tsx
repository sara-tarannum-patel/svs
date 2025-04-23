import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const domains = [
    {
      name: 'Agriculture',
      icon: '🌾',
      description: 'Innovative solutions for sustainable farming, food security, and agricultural technology',
      color: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      name: 'Pharmaceutical',
      icon: '💊',
      description: 'Healthcare innovations, drug development, and medical technology solutions',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      name: 'Technology',
      icon: '💻',
      description: 'Cutting-edge tech solutions, software development, and digital innovations',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      name: 'Textile',
      icon: '👕',
      description: 'Sustainable fashion, textile technology, and manufacturing innovations',
      color: 'bg-pink-50',
      textColor: 'text-pink-700',
    },
  ];

  const eventTimeline = [
    {
      title: 'Registration Opens',
      date: '1st Week of Each Quarter',
      description: 'Participants can register their innovative ideas and form teams',
    },
    {
      title: 'Idea Submission',
      date: '2nd Week',
      description: 'Submit detailed proposals and initial prototypes if available',
    },
    {
      title: 'Mentorship Phase',
      date: '3rd-4th Week',
      description: 'Selected teams receive guidance from industry experts',
    },
    {
      title: 'Development Phase',
      date: '5th-8th Week',
      description: 'Teams work on their solutions with regular check-ins',
    },
    {
      title: 'Final Presentation',
      date: '9th Week',
      description: 'Teams present their solutions to a panel of judges',
    },
    {
      title: 'Awards & Incubation',
      date: '10th Week',
      description: 'Winning teams receive prizes and incubation opportunities',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Innovent 2024',
      date: 'January 15, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'Virtual & On-site',
      description: 'Year-long Idea Hackathon for students and faculty',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'hackathon',
    },
    {
      title: 'Sobus Startup Summit',
      date: 'March 20, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Sobus Incubation Center',
      description: 'Annual startup showcase and networking event',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'summit',
    },
    {
      title: 'Tech Innovation Conference',
      date: 'May 10, 2024',
      time: '8:00 AM - 7:00 PM',
      location: 'Tech Hub Auditorium',
      description: 'Exploring the latest trends in technology and innovation',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'conference',
    },
    {
      title: 'Women in Tech Workshop',
      date: 'June 5, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Sobus Community Center',
      description: 'Empowering women in technology through skill-building and networking',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'workshop',
    },
    {
      title: 'AI & ML Bootcamp',
      date: 'July 15-20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Sobus Innovation Lab',
      description: 'Intensive training program on artificial intelligence and machine learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'bootcamp',
    },
    // New Events
    {
      title: 'Community Innovation Challenge',
      date: 'August 2024',
      time: 'TBD',
      location: 'Multiple Locations',
      description: 'Local community problem-solving competition',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'community',
    },
    {
      title: 'Incubation Center Open House',
      date: 'September 2024',
      time: 'TBD',
      location: 'Sobus Incubation Center',
      description: 'Tour of facilities and meet current incubatees',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'incubation',
    },
    {
      title: 'Sustainable Development Hackathon',
      date: 'October 2024',
      time: 'TBD',
      location: 'Virtual & On-site',
      description: 'Focus on environmental and social impact solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'hackathon',
    },
    {
      title: 'Community Tech Fair',
      date: 'November 2024',
      time: 'TBD',
      location: 'Community Center',
      description: 'Showcasing local tech initiatives and projects',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'community',
    },
    {
      title: 'Year-End Innovation Showcase',
      date: 'December 2024',
      time: 'TBD',
      location: 'Sobus Innovation Hub',
      description: 'Celebrating successful projects and achievements',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'showcase',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovent
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Sobus Ventures' Flagship Idea Hackathon
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join our quarterly hackathon series where innovation meets opportunity. 
              Transform your ideas into reality with expert mentorship and incubation support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/incubation/apply"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Register Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Innovent */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Innovent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovent is our flagship event that brings together students and faculty from across the nation 
              to solve real-world challenges through innovation and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Innovent Hackathon"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Why Participate?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Access to expert mentorship and guidance',
                    'Opportunity to work on real-world problems',
                    'Chance to win incubation support and funding',
                    'Network with industry professionals',
                    'Develop practical skills and experience',
                    'Showcase your innovation to potential investors',
                  ].map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
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
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Focus Domains
            </h2>
            <p className="text-xl text-gray-600">
              Four major domains, endless possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${domain.color} p-6 rounded-xl shadow-md`}
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className={`text-xl font-semibold ${domain.textColor} mb-2`}>
                  {domain.name}
                </h3>
                <p className="text-gray-600">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Quarterly events with structured phases
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {eventTimeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                } md:w-1/2`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="absolute top-4 -left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us at our upcoming events and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <div className="mt-6">
                    <Link
                      to="/incubation/apply"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our next Innovent hackathon and turn your ideas into reality
          </p>
          <Link
            to="/incubation/apply"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events; 