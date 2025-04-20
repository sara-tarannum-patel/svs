import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EntrepreneurPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrepreneur Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your application status and resources
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Entrepreneur Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Application Status</h3>
                <p className="text-3xl font-bold text-indigo-600">Under Review</p>
                <p className="text-sm text-gray-500 mt-2">Last updated: 2 days ago</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Mentor Sessions</h3>
                <p className="text-3xl font-bold text-green-600">3/5</p>
                <p className="text-sm text-gray-500 mt-2">Sessions completed this month</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Resources</h3>
                <p className="text-3xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-500 mt-2">Available resources</p>
              </motion.div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-600">Mentor Session</p>
                        <p className="text-sm text-gray-500">Business Model Canvas Workshop</p>
                      </div>
                      <div className="text-sm text-gray-500">Tomorrow, 2:00 PM</div>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-600">Networking Event</p>
                        <p className="text-sm text-gray-500">Social Impact Meetup</p>
                      </div>
                      <div className="text-sm text-gray-500">Next Week</div>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-600">Training</p>
                        <p className="text-sm text-gray-500">Impact Measurement Workshop</p>
                      </div>
                      <div className="text-sm text-gray-500">2 weeks from now</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900">Business Plan Template</h3>
                  <p className="text-sm text-gray-500 mt-1">Download our comprehensive business plan template</p>
                  <button className="mt-2 text-indigo-600 hover:text-indigo-800">Download →</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900">Impact Measurement Guide</h3>
                  <p className="text-sm text-gray-500 mt-1">Learn how to measure your social impact</p>
                  <button className="mt-2 text-indigo-600 hover:text-indigo-800">View Guide →</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900">Pitch Deck Template</h3>
                  <p className="text-sm text-gray-500 mt-1">Create a compelling pitch for investors</p>
                  <button className="mt-2 text-indigo-600 hover:text-indigo-800">Download →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurPortal; 