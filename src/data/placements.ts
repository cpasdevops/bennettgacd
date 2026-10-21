import { PlacementDrive } from '../types';

export const PLACEMENT_STATS = {
  highestCtc: '₹1.37 Cr',
  highestCtcCompany: 'Meta International (London)',
  averageCtc: '₹10.2 LPA',
  top10PercentAverage: '₹28.4 LPA',
  totalRecruiters: '450+',
  totalOffers: '1,850+',
  placementPercentage: '94.2%',
  internationalPlacements: '48+',
  fortune500Recruiters: '85+'
};

export const RECRUITER_LOGOS = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Adobe', 'Goldman Sachs', 
  'Deloitte', 'Media.net', 'Cisco', 'DE Shaw', 'Morgan Stanley', 
  'KPMG', 'Accenture', 'Salesforce', 'NVIDIA', 'ZS Associates'
];

export const PLACEMENT_DRIVES: PlacementDrive[] = [
  {
    id: 'drive-google-swe',
    companyName: 'Google',
    logoText: 'G',
    role: 'Software Development Engineer (SDE-1)',
    jobType: 'Full-time (FTE)',
    packageCtc: '₹42.5 LPA (Base: ₹22L + Stocks + Bonus)',
    locations: ['Bengaluru', 'Hyderabad'],
    minCgpa: 8.0,
    maxBacklogs: 0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE'],
    deadline: '2026-11-05',
    driveDate: '2026-11-12',
    rounds: [
      { name: 'Online Coding Challenge', date: 'Nov 12, 2026', description: '2 Data Structures & Algorithms problems on HackerEarth (90 mins)' },
      { name: 'Technical Round 1', date: 'Nov 16, 2026', description: 'Deep dive into Tree/Graph algorithms and Dynamic Programming' },
      { name: 'Technical Round 2', date: 'Nov 18, 2026', description: 'System Design fundamentals, concurrency and memory architecture' },
      { name: 'Googliness & Leadership', date: 'Nov 20, 2026', description: 'Behavioral interview on ambiguity, teamwork, and engineering ethics' }
    ],
    description:
      'Google is visiting Bennett University for on-campus early career software engineering roles. Engineers will build planetary-scale distributed systems, search infra, and cloud intelligence.',
    skillsRequired: ['Data Structures & Algorithms', 'C++ / Java / Python / Go', 'System Design', 'Operating Systems', 'Git'],
    status: 'Open',
    applicantsCount: 142
  },
  {
    id: 'drive-microsoft-intern',
    companyName: 'Microsoft',
    logoText: 'MS',
    role: 'Software Engineer Intern (6-Month)',
    jobType: '6-Month Internship',
    packageCtc: '₹1,25,000 / month Stipend (PPO Opportunity: ₹48 LPA)',
    stipend: '₹1,25,000 / month',
    locations: ['Hyderabad', 'Noida', 'Bengaluru'],
    minCgpa: 7.5,
    maxBacklogs: 0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Biotech (Computational)'],
    deadline: '2026-11-02',
    driveDate: '2026-11-08',
    rounds: [
      { name: 'Online Assessment', date: 'Nov 8, 2026', description: 'Codility coding test with debugging and DSA questions' },
      { name: 'Technical Interview 1', date: 'Nov 11, 2026', description: 'Algorithms, complexity analysis, and object-oriented design' },
      { name: 'Technical & Managerial', date: 'Nov 14, 2026', description: 'Project architecture review, Azure fundamentals, and behavioral questions' }
    ],
    description:
      '6-Month January to June internship for pre-final and final year Bennett engineers with direct conversion opportunity to full-time Software Engineer at Microsoft India Development Center.',
    skillsRequired: ['Data Structures', 'C# / Java / C++', 'Object-Oriented Design', 'Cloud Computing (Azure/GCP/AWS)', 'Problem Solving'],
    status: 'Open',
    applicantsCount: 218
  },
  {
    id: 'drive-deloitte-consultant',
    companyName: 'Deloitte USI',
    logoText: 'D',
    role: 'Technology Consulting Analyst',
    jobType: 'Full-time (FTE)',
    packageCtc: '₹12.8 LPA + Joining Retention Bonus',
    locations: ['Gurugram', 'Bengaluru', 'Mumbai', 'Hyderabad'],
    minCgpa: 7.0,
    maxBacklogs: 1,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'MBA', 'BBA'],
    deadline: '2026-10-28',
    driveDate: '2026-11-03',
    rounds: [
      { name: 'Aptitude & Cognitive Assessment', date: 'Nov 3, 2026', description: 'Logical reasoning, quantitative aptitude, and business English' },
      { name: 'Technical MCQ & Case Study', date: 'Nov 3, 2026', description: 'Cloud architecture basics, SQL queries, and business transformation scenarios' },
      { name: 'Partner / Senior Manager Round', date: 'Nov 6, 2026', description: 'Case interview, client readiness, and leadership potential' }
    ],
    description:
      'Join Deloitte US-India offices to solve mission-critical digital enterprise challenges across Fortune 500 financial institutions, healthcare providers, and high-tech enterprises.',
    skillsRequired: ['Analytical Reasoning', 'SQL & Relational Databases', 'Python or PowerBI', 'Client Communication', 'Cloud Awareness'],
    status: 'Open',
    applicantsCount: 310
  },
  {
    id: 'drive-goldman-quant',
    companyName: 'Goldman Sachs',
    logoText: 'GS',
    role: 'Quantitative Strategist / Summer Analyst',
    jobType: 'Summer Internship',
    packageCtc: '₹1,50,000 / month Stipend (PPO: ₹34 LPA)',
    stipend: '₹1,50,000 / month',
    locations: ['Bengaluru'],
    minCgpa: 8.5,
    maxBacklogs: 0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'MBA (Finance Specialization)'],
    deadline: '2026-11-10',
    driveDate: '2026-11-18',
    rounds: [
      { name: 'HackerRank Quantitative Test', date: 'Nov 18, 2026', description: 'Advanced probability, statistics, linear algebra, and algorithmic coding' },
      { name: 'Technical Round 1 (Math & Code)', date: 'Nov 22, 2026', description: 'Stochastic calculus, dynamic programming, and data structures' },
      { name: 'Superday Panel Interview', date: 'Nov 25, 2026', description: '3 back-to-back interviews with trading strategists and managing directors' }
    ],
    description:
      'Goldman Sachs Global Markets and Engineering division is recruiting quantitative analysts from Bennett University to develop algorithmic trading algorithms, risk models, and electronic trading infrastructure.',
    skillsRequired: ['Advanced Probability & Statistics', 'C++ / Python', 'Linear Algebra', 'Algorithms', 'Financial Markets Basics'],
    status: 'Open',
    applicantsCount: 95
  },
  {
    id: 'drive-adobe-mle',
    companyName: 'Adobe Systems',
    logoText: 'A',
    role: 'Machine Learning Engineer',
    jobType: 'Full-time (FTE)',
    packageCtc: '₹36.0 LPA (Base + RSUs)',
    locations: ['Noida (Next to Bennett Campus)', 'Bengaluru'],
    minCgpa: 8.0,
    maxBacklogs: 0,
    eligibleBranches: ['B.Tech CSE'],
    deadline: '2026-11-15',
    driveDate: '2026-11-22',
    rounds: [
      { name: 'Online Coding & ML Assessment', date: 'Nov 22, 2026', description: 'Deep learning concepts, Python implementation, and algorithm complexity' },
      { name: 'Technical Interview 1', date: 'Nov 26, 2026', description: 'Computer Vision, Generative AI models (Diffusion/LLMs), PyTorch optimization' },
      { name: 'Technical Interview 2', date: 'Nov 28, 2026', description: 'High-throughput inference deployment, ONNX/TensorRT, system scalability' },
      { name: 'Director Round', date: 'Nov 30, 2026', description: 'Culture fit, research portfolio discussion, and product thinking' }
    ],
    description:
      'Adobe Noida R&D Center is hiring ML Engineers to innovate on Adobe Firefly, Photoshop generative models, and digital document intelligence.',
    skillsRequired: ['PyTorch / TensorFlow', 'Computer Vision / NLP', 'Python & C++', 'CUDA / GPU Optimization', 'Deep Learning'],
    status: 'Open',
    applicantsCount: 168
  },
  {
    id: 'drive-media-net',
    companyName: 'Media.net',
    logoText: 'M',
    role: 'Associate Site Reliability Engineer (SRE)',
    jobType: 'Full-time (FTE)',
    packageCtc: '₹29.0 LPA',
    locations: ['Mumbai', 'Bengaluru'],
    minCgpa: 7.5,
    maxBacklogs: 0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE'],
    deadline: '2026-11-18',
    driveDate: '2026-11-24',
    rounds: [
      { name: 'Systems & Networking Assessment', date: 'Nov 24, 2026', description: 'Linux internals, TCP/IP, bash scripting, and algorithmic problem solving' },
      { name: 'Hands-on Debugging Round', date: 'Nov 27, 2026', description: 'Live Linux troubleshooting and network packet analysis on production environment' },
      { name: 'Architecture & System Design', date: 'Nov 29, 2026', description: 'Distributed storage, load balancers, and fault-tolerant infrastructure' }
    ],
    description:
      'Manage advertising systems handling 20+ billion daily ad impressions with sub-10ms response times across global data centers.',
    skillsRequired: ['Linux Kernel & Shell', 'Networking (DNS, BGP, TCP)', 'Python / Go', 'Kubernetes & Docker', 'Observability (Prometheus/Grafana)'],
    status: 'Open',
    applicantsCount: 88
  }
];
