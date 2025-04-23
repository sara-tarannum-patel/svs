import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const IncubationApplication: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    email: '',
    phone: '',
    university: '',
    department: '',
    yearOfStudy: '',
    studentId: '',
    
    // Team Information
    isTeam: false,
    teamMembers: [{ name: '', email: '', role: '' }],
    teamSize: '',
    
    // Idea Information
    ideaType: '',
    ideaTitle: '',
    ideaDescription: '',
    problemStatement: '',
    targetAudience: '',
    uniqueValueProposition: '',
    marketSize: '',
    competitors: '',
    revenueModel: '',
    
    // Implementation Details
    currentStage: '',
    resources: '',
    timeline: '',
    fundingNeeds: '',
    previousExperience: '',
    technicalRequirements: '',
    challenges: '',
    
    // Additional Information
    motivation: '',
    expectedImpact: '',
    supportNeeded: '',
    additionalComments: '',
    
    // File Uploads
    pitchDeck: null as File | null,
    businessPlan: null as File | null,
    prototype: null as File | null,
    teamResumes: [] as File[],
    additionalDocuments: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = { ...updatedTeamMembers[index], [field]: value };
    setFormData(prev => ({ ...prev, teamMembers: updatedTeamMembers }));
  };

  const addTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: '', email: '', role: '' }]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleMultipleFilesChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, [field]: Array.from(e.target.files!) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Innovent website
    window.location.href = 'https://innoventsobus.netlify.app';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Incubation Program Application</h1>
            <p className="text-gray-600">Share your innovative idea with us and join our incubation program</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    University/College <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your university/college name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your department"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="5th">5th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your student ID"
                  />
                </div>
              </div>
            </section>

            {/* Team Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Team Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isTeam"
                    name="isTeam"
                    checked={formData.isTeam}
                    onChange={(e) => setFormData(prev => ({ ...prev, isTeam: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isTeam" className="ml-2 block text-sm text-gray-700">
                    This is a team project
                  </label>
                </div>

                {formData.isTeam && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select team size</option>
                        <option value="2">2 members</option>
                        <option value="3">3 members</option>
                        <option value="4">4 members</option>
                        <option value="5">5 members</option>
                        <option value="6+">6+ members</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      {formData.teamMembers.map((member, index) => (
                        <div key={index} className="border p-4 rounded-lg space-y-4">
                          <h3 className="text-lg font-medium text-gray-900">Team Member {index + 1}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={member.name}
                                onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter team member's name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                value={member.email}
                                onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter team member's email"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Role <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={member.role}
                                onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter team member's role"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addTeamMember}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                      >
                        Add Team Member
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Idea Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Idea Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Idea <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ideaType"
                    value={formData.ideaType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select idea type</option>
                    <option value="tech">Technology/Software</option>
                    <option value="social">Social Impact</option>
                    <option value="business">Business/Startup</option>
                    <option value="research">Research Project</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Select the category that best describes your idea
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Idea Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ideaTitle"
                    value={formData.ideaTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Give your idea a clear, concise title"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Example: "AI-powered Campus Navigation System"
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Idea Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="ideaDescription"
                    value={formData.ideaDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your idea in detail. What is it? How does it work?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Be specific and clear. Include the main features and functionality.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Problem Statement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What problem does your idea solve? Why is it important?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Clearly state the problem and its significance. Who is affected by this problem?
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Audience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Who will use your solution? Describe your target users"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Be specific about your target users. Consider demographics, needs, and behaviors.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unique Value Proposition <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="uniqueValueProposition"
                    value={formData.uniqueValueProposition}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What makes your solution unique? Why would users choose your solution?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Explain what sets your solution apart from existing alternatives.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Market Size <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="marketSize"
                    value={formData.marketSize}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the potential market size and opportunity"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    How big is the market? How many potential users are there?
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Competitors <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="competitors"
                    value={formData.competitors}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Who are your main competitors? How do they solve the problem?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    List existing solutions and explain how yours is different or better.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Revenue Model <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="revenueModel"
                    value={formData.revenueModel}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How will your solution generate revenue?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Describe your business model and pricing strategy.
                  </p>
                </div>
              </div>
            </section>

            {/* Implementation Details Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Stage <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="currentStage"
                    value={formData.currentStage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select current stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="prototype">Prototype Development</option>
                    <option value="testing">Testing Phase</option>
                    <option value="launch">Ready for Launch</option>
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    What stage is your project currently in?
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resources <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="resources"
                    value={formData.resources}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What resources do you currently have? What do you need?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    List existing resources and what additional resources you need.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What is your proposed timeline for development and launch?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Include key milestones and estimated completion dates.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Funding Needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="fundingNeeds"
                    value={formData.fundingNeeds}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What funding do you need? How will it be used?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Be specific about funding requirements and how it will be allocated.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What relevant experience do you/your team have?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Include any previous projects, competitions, or relevant experience.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Technical Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="technicalRequirements"
                    value={formData.technicalRequirements}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What technical skills and resources are required?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    List required technologies, platforms, and technical expertise.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Challenges <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What challenges do you anticipate? How will you address them?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Identify potential obstacles and your strategies to overcome them.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Motivation <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What motivated you to work on this idea?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Share your personal connection to the problem and solution.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Impact <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="expectedImpact"
                    value={formData.expectedImpact}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What impact do you expect your solution to have?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Describe the potential social, economic, or environmental impact.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Support Needed <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="supportNeeded"
                    value={formData.supportNeeded}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What specific support do you need from the incubation program?"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Be specific about mentorship, resources, or other support needed.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Comments
                  </label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any additional information you'd like to share"
                  />
                </div>
              </div>
            </section>

            {/* File Upload Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Supporting Documents</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pitch Deck (PDF, PPT, PPTX) <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      onChange={(e) => handleFileChange(e, 'pitchDeck')}
                      required
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload your pitch deck (max 10MB). Include problem, solution, market, and business model.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Plan (PDF, DOC, DOCX)
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'businessPlan')}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload your detailed business plan (max 10MB). Include market analysis, financial projections, and growth strategy.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prototype/Proof of Concept
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept=".zip,.rar,.7z"
                      onChange={(e) => handleFileChange(e, 'prototype')}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload your prototype or proof of concept (max 20MB). Include source code, screenshots, or demo videos.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Team Resumes (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      multiple
                      onChange={(e) => handleMultipleFilesChange(e, 'teamResumes')}
                      required
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload resumes of all team members (max 2MB each). Highlight relevant experience and skills.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Supporting Documents
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) => handleMultipleFilesChange(e, 'additionalDocuments')}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload any additional documents that support your application (max 5MB each). This could include market research, patents, or awards.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">File Upload Guidelines</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• All files should be clearly named and organized</li>
                    <li>• Maximum file size: 20MB per file</li>
                    <li>• Accepted formats: PDF, DOC, DOCX, PPT, PPTX, ZIP, RAR, 7Z, JPG, JPEG, PNG</li>
                    <li>• Ensure all documents are virus-free and accessible</li>
                    <li>• Combine multiple files into a single ZIP file if needed</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="flex justify-end space-x-4">
              <Link
                to="/incubation"
                className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default IncubationApplication; 