import React from 'react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="app">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="content"
      >
        <h1>Welcome to React with Framer Motion</h1>
        <p>This is a sample application using React and Framer Motion.</p>
      </motion.div>
    </div>
  );
};

export default App; 