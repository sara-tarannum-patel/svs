import React from 'react';
import StoryAndMission from './StoryAndMission';
import TeamAndLeadership from './TeamAndLeadership';
import ImpactAndAchievements from './ImpactAndAchievements';
import PartnershipsAndCollaborations from './PartnershipsAndCollaborations';
import ContactAndSupport from './ContactAndSupport';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="/src/assets/about/hero-bg.jpg"
            alt="About Us Background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Academic Bridge
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Bridging the gap between academic innovation and industry needs through
            collaborative research, sustainable solutions, and impactful partnerships.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-24">
        <StoryAndMission />
        <TeamAndLeadership />
        <ImpactAndAchievements />
        <PartnershipsAndCollaborations />
        <ContactAndSupport />
      </div>
    </div>
  );
};

export default AboutPage; 