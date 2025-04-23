import { TeamMember, Partner, Initiative, ImpactStat, SuccessStory, Achievement, ContactInfo, SupportResource } from '../types';

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in academic-industry collaboration.',
    image: '/src/assets/team/ceo.jpg',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Technology innovator specializing in sustainable solutions.',
    image: '/src/assets/team/cto.jpg',
    linkedin: 'https://linkedin.com/in/michael-chen',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Research',
    bio: 'Expert in bridging academic research with practical applications.',
    image: '/src/assets/team/research.jpg',
    linkedin: 'https://linkedin.com/in/emily-rodriguez',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Alex Thompson',
    role: 'Partnership Manager',
    department: 'Business Development',
    image: '/src/assets/team/team1.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Research Analyst',
    department: 'Research & Development',
    image: '/src/assets/team/team2.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Impact Coordinator',
    department: 'Social Impact',
    image: '/src/assets/team/team3.jpg',
  },
  {
    name: 'Maria Garcia',
    role: 'Innovation Specialist',
    department: 'Technology',
    image: '/src/assets/team/team4.jpg',
  },
];

export const academicPartners: Partner[] = [
  {
    name: 'Harvard University',
    logo: '/src/assets/partners/harvard.png',
    focus: 'Research & Innovation',
    projects: ['AI Ethics Framework', 'Sustainable Tech Lab'],
  },
  {
    name: 'MIT',
    logo: '/src/assets/partners/mit.png',
    focus: 'Technology Development',
    projects: ['Quantum Computing Research', 'Smart City Solutions'],
  },
  {
    name: 'Stanford University',
    logo: '/src/assets/partners/stanford.png',
    focus: 'Entrepreneurship',
    projects: ['Startup Incubator', 'Digital Transformation'],
  },
];

export const industryPartners: Partner[] = [
  {
    name: 'Google',
    logo: '/src/assets/partners/google.png',
    type: 'Technology',
    collaboration: 'AI Research & Development',
  },
  {
    name: 'Siemens',
    logo: '/src/assets/partners/siemens.png',
    type: 'Industrial',
    collaboration: 'Smart Manufacturing Solutions',
  },
  {
    name: 'Johnson & Johnson',
    logo: '/src/assets/partners/jnj.png',
    type: 'Healthcare',
    collaboration: 'Medical Innovation Hub',
  },
];

export const jointInitiatives: Initiative[] = [
  {
    title: 'Global Innovation Network',
    description: 'Connecting academic research with industry needs worldwide',
    partners: ['15+ Universities', '20+ Corporations'],
    image: '/src/assets/initiatives/network.jpg',
  },
  {
    title: 'Sustainable Development Hub',
    description: 'Collaborative platform for sustainable technology solutions',
    partners: ['Research Institutions', 'Environmental Organizations'],
    image: '/src/assets/initiatives/sustainability.jpg',
  },
  {
    title: 'Digital Transformation Alliance',
    description: 'Joint effort to drive digital innovation across sectors',
    partners: ['Tech Companies', 'Academic Centers'],
    image: '/src/assets/initiatives/digital.jpg',
  },
];

export const impactStats: ImpactStat[] = [
  {
    number: '50+',
    label: 'University Partnerships',
    description: 'Collaborating with leading academic institutions worldwide',
  },
  {
    number: '200+',
    label: 'Projects Completed',
    description: 'Successfully delivered innovative solutions',
  },
  {
    number: '1M+',
    label: 'Lives Impacted',
    description: 'Positive change in communities globally',
  },
  {
    number: '85%',
    label: 'Success Rate',
    description: 'Of projects meeting or exceeding goals',
  },
];

export const successStories: SuccessStory[] = [
  {
    title: 'Sustainable Energy Initiative',
    description: 'Partnered with leading universities to develop affordable solar solutions for rural communities.',
    impact: 'Provided clean energy to 50,000+ households',
    image: '/src/assets/impact/energy.jpg',
  },
  {
    title: 'Healthcare Innovation Program',
    description: 'Developed AI-powered diagnostic tools in collaboration with medical research institutions.',
    impact: 'Improved diagnosis accuracy by 40% in partner hospitals',
    image: '/src/assets/impact/healthcare.jpg',
  },
  {
    title: 'Education Technology Platform',
    description: 'Created an accessible learning platform for underprivileged students.',
    impact: 'Enabled 100,000+ students to access quality education',
    image: '/src/assets/impact/education.jpg',
  },
];

export const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'Global Innovation Award',
    description: 'Recognized for excellence in academic-industry collaboration',
    icon: '🏆',
  },
  {
    year: '2022',
    title: 'Sustainability Leadership',
    description: 'Awarded for commitment to environmental responsibility',
    icon: '🌱',
  },
  {
    year: '2021',
    title: 'Social Impact Excellence',
    description: 'Honored for outstanding community development initiatives',
    icon: '🤝',
  },
];

export const contactInfo: ContactInfo[] = [
  {
    title: 'General Inquiries',
    email: 'info@academicbridge.org',
    phone: '+1 (555) 123-4567',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Partnerships',
    email: 'partnerships@academicbridge.org',
    phone: '+1 (555) 234-5678',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Technical Support',
    email: 'support@academicbridge.org',
    phone: '+1 (555) 345-6789',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export const supportResources: SupportResource[] = [
  {
    title: 'Documentation',
    description: 'Access our comprehensive guides and documentation',
    link: '/docs',
    icon: '📚',
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions',
    link: '/faq',
    icon: '❓',
  },
  {
    title: 'Community Forum',
    description: 'Join discussions with other users',
    link: '/forum',
    icon: '💬',
  },
  {
    title: 'Knowledge Base',
    description: 'Explore our library of resources',
    link: '/knowledge-base',
    icon: '📖',
  },
]; 