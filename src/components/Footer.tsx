import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Sobus</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Connecting academia and industry to drive sustainable innovation and social impact.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white">Impact</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Portals</h3>
            <ul className="space-y-2">
              <li><Link to="/partner-portal" className="text-gray-400 hover:text-white">Partner Portal</Link></li>
              <li><Link to="/academic-portal" className="text-gray-400 hover:text-white">Academic Portal</Link></li>
              <li><Link to="/investor-portal" className="text-gray-400 hover:text-white">Investor Portal</Link></li>
              <li><Link to="/collaboration-hub" className="text-gray-400 hover:text-white">Collaboration Hub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="mailto:contact@sobus.com" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Sobus Venture Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;