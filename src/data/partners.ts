import { PartnerUniversity } from '../types';

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  {
    id: 'uc-berkeley',
    name: 'University of California, Berkeley',
    shortName: 'UC Berkeley',
    country: 'United States',
    city: 'Berkeley, California',
    region: 'North America',
    ranking: '#4 Worldwide (QS World University Rankings)',
    programsOffered: [
      'Berkeley International Study Program (BISP)',
      'Advanced Computer Science & AI Electives',
      'Data Science & Silicon Valley Immersion',
      'Technology Entrepreneurship'
    ],
    pathwayTypes: ['Semester Abroad', 'Summer School', 'Research Fellowship'],
    minCgpa: 8.0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Biotech', 'MBA'],
    maxBacklogs: 0,
    scholarshipDiscount: 'Direct Bennett Exchange Tuition Agreement (Save $8,500/term)',
    annualFeeEstimate: '$21,900 / Semester (Excluding Housing)',
    creditsTransferred: '16–20 Academic Credits transferred directly to Bennett Transcript',
    overview:
      'Official academic collaboration providing Bennett University scholars direct access to UC Berkeley faculty, labs, and Silicon Valley network via the prestigious Berkeley International Study Program (BISP).',
    highlights: [
      'Study at world’s premier public research university in California Bay Area',
      'Earn official UC Berkeley transcript and faculty recommendations',
      'Weekly tech industry sessions with Silicon Valley founders and alumni',
      'Priority course enrollment in Berkeley Computer Science and Haas business courses'
    ],
    intakeSemesters: ['Fall (August)', 'Spring (January)'],
    applicationDeadline: 'April 15 for Fall / October 1 for Spring',
    mouYear: 2017,
    contactPerson: 'Dr. R. K. Mahajan (GACD Dean, North America Desk)'
  },
  {
    id: 'univ-essex',
    name: 'University of Essex',
    shortName: 'Univ of Essex',
    country: 'United Kingdom',
    city: 'Colchester, Essex',
    region: 'UK & Europe',
    ranking: 'Top 30 UK University (Times Higher Education)',
    programsOffered: [
      '2+2 Dual Degree B.Eng / B.Sc Computer Science',
      '3+1 Integrated M.Sc Artificial Intelligence',
      '2+2 LL.B International Commercial Law',
      '3+1 M.Sc Financial Technology & Analytics'
    ],
    pathwayTypes: ['2+2 Dual Degree', '3+1 Pathway', 'Semester Abroad'],
    minCgpa: 7.2,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'BBA', 'BA LL.B', 'BBA LL.B'],
    maxBacklogs: 1,
    scholarshipDiscount: '20% Tuition Fee Waiver under Bennett-Essex Strategic MoU',
    annualFeeEstimate: '£17,600 / Year (After 20% MoU Waiver)',
    creditsTransferred: 'Full 120 UK Credits Equivalence for Year 1 & 2 at Bennett',
    overview:
      'Premier European pathway allowing Bennett students to spend their first 2 or 3 years in Greater Noida and graduate with a prestigious University of Essex UK degree, conferring 2-year UK Graduate Route post-study work visa eligibility.',
    highlights: [
      'Receive official University of Essex Degree upon completion',
      'Eligible for 2-Year Post Study Work (PSW) Visa in the United Kingdom',
      'Exemption from IELTS requirement through Bennett Medium of Instruction certificate',
      'Guaranteed on-campus accommodation in Colchester campus'
    ],
    intakeSemesters: ['Autumn Intake (September)'],
    applicationDeadline: 'May 30 for September Intake',
    mouYear: 2018,
    contactPerson: 'Prof. Alistair Wright (GACD UK & Europe Liaison)'
  },
  {
    id: 'univ-waikato',
    name: 'University of Waikato',
    shortName: 'Univ of Waikato',
    country: 'New Zealand',
    city: 'Hamilton & Tauranga',
    region: 'Australia & NZ',
    ranking: 'Top 1% Business Schools Worldwide (Triple Crown Accredited)',
    programsOffered: [
      '3+1.5 Master of Cyber Security (MCS)',
      '3+1.5 Master of Information Technology',
      '2+2 Bachelor of Business Management',
      'Summer Research Immersion in Environmental Informatics'
    ],
    pathwayTypes: ['2+2 Dual Degree', '3+1 Pathway', 'Semester Abroad'],
    minCgpa: 7.0,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'BBA', 'MBA'],
    maxBacklogs: 2,
    scholarshipDiscount: 'NZD $10,000 Bennett Vice-Chancellor Excellence Grant',
    annualFeeEstimate: 'NZD $33,500 / Year',
    creditsTransferred: 'Up to 240 Waikato Points (Equivalent to 2 Bennett Academic Years)',
    overview:
      'Strategic Asia-Pacific collaboration with New Zealand’s leading tech university, offering fast-tracked pathways into Master of Cyber Security and 3-Year New Zealand Post-Study Work Visa.',
    highlights: [
      'Home to New Zealand’s first dedicated Cyber Security Research Lab',
      'Direct pathway to 3-year Open Work Visa in New Zealand',
      'Waikato Management School holds AACSB, EQUIS, and AMBA Triple Crown accreditation',
      'Internship placement integrated into 2nd semester of study'
    ],
    intakeSemesters: ['February (A Semester)', 'July (B Semester)'],
    applicationDeadline: 'October 30 for February / April 30 for July',
    mouYear: 2021,
    contactPerson: 'Ms. Sarah Henderson (GACD Australasia Program Lead)'
  },
  {
    id: 'scad-usa',
    name: 'Savannah College of Art and Design (SCAD)',
    shortName: 'SCAD',
    country: 'United States',
    city: 'Savannah & Atlanta, Georgia',
    region: 'North America',
    ranking: '#1 Art & Design University in the US (Red Dot Design Rankings)',
    programsOffered: [
      '2+2 B.F.A. Interactive Design & Game Development',
      '2+2 B.F.A. Animation & Visual Effects',
      'Summer Immersion in User Experience (UX) Design',
      'Creative Technology & Web 3.0 Media'
    ],
    pathwayTypes: ['2+2 Dual Degree', 'Semester Abroad', 'Summer School'],
    minCgpa: 7.5,
    eligibleBranches: ['Times School of Media', 'B.Tech CSE (Gaming Specialization)', 'B.Des'],
    maxBacklogs: 0,
    scholarshipDiscount: '$12,000 Annual Bennett Creative Talent Fellowship',
    annualFeeEstimate: '$38,500 / Year',
    creditsTransferred: '90 Quarter Credits mapped to Bennett Curriculum',
    overview:
      'Pioneering creative tech partnership connecting Bennett University media, design, and computer science students to Hollywood, gaming studios, and global creative agencies.',
    highlights: [
      'Over 99% employment rate within 10 months of SCAD graduation',
      'Direct campus recruitment from Disney, Pixar, Marvel, Riot Games, and Apple',
      'Access to SCAD Savannah and SCAD Atlanta state-of-the-art virtual production stages',
      'Joint portfolio evaluation with Bennett Times School of Media faculty'
    ],
    intakeSemesters: ['Fall (September)'],
    applicationDeadline: 'March 15',
    mouYear: 2022,
    contactPerson: 'Ar. Nikhil Tandon (GACD Media & Design Desk)'
  },
  {
    id: 'whitecliffe-global',
    name: 'Whitecliffe College of Arts & Technology',
    shortName: 'Whitecliffe Global',
    country: 'New Zealand',
    city: 'Auckland & Christchurch',
    region: 'Australia & NZ',
    ranking: 'NZQA Category 1 Premier Higher Education Provider',
    programsOffered: [
      '3+1 Master of Applied Information Technology',
      'Dual Diploma in Advanced 3D Animation & Software Eng',
      'Postgraduate Diploma in Cloud Computing'
    ],
    pathwayTypes: ['3+1 Pathway', 'Semester Abroad'],
    minCgpa: 6.8,
    eligibleBranches: ['B.Tech CSE', 'Times School of Media', 'BBA'],
    maxBacklogs: 2,
    scholarshipDiscount: '25% International Partner Rebate on full tuition',
    annualFeeEstimate: 'NZD $24,800 / Year',
    creditsTransferred: 'Full 180 Credits for 3-Year Bennett Transcripts',
    overview:
      'Innovative hands-on technical and design pathway in New Zealand specializing in applied software development, game engineering, and digital media production.',
    highlights: [
      'Auckland tech precinct campus with direct employer project sprints',
      'Eligible for Post-Study Work Visa in New Zealand high-demand skills list',
      'Intensive industry capstone project with NZ software startups'
    ],
    intakeSemesters: ['February', 'July', 'November'],
    applicationDeadline: 'Rolling Admissions (45 days prior to start)',
    mouYear: 2023,
    contactPerson: 'Mr. David O’Connor (NZ Regional Coordinator)'
  },
  {
    id: 'univ-exeter',
    name: 'University of Exeter',
    shortName: 'Univ of Exeter',
    country: 'United Kingdom',
    city: 'Exeter, Devon',
    region: 'UK & Europe',
    ranking: 'Russell Group Member / Top 150 Global University',
    programsOffered: [
      '3+1 M.Sc Data Science & Analytics',
      '3+1 M.Sc Financial Analysis & Fund Management',
      'Semester Abroad in Renewable Energy & Sustainability'
    ],
    pathwayTypes: ['3+1 Pathway', 'Semester Abroad', 'Research Fellowship'],
    minCgpa: 7.8,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'MBA', 'BBA'],
    maxBacklogs: 0,
    scholarshipDiscount: '£5,000 Global Excellence Bennett Award',
    annualFeeEstimate: '£23,500 / Year',
    creditsTransferred: 'Full Final Year credit recognition into Bennett degree',
    overview:
      'Prestigious UK Russell Group collaboration opening advanced data science, AI, and finance master’s degrees with high research impact and global pedigree.',
    highlights: [
      'Prestigious UK Russell Group research-intensive institution',
      'Dedicated Exeter career zone with 96% graduate outcome rate',
      'Access to national High Performance Computing (HPC) research clusters'
    ],
    intakeSemesters: ['September Intake'],
    applicationDeadline: 'May 15',
    mouYear: 2020,
    contactPerson: 'Prof. Gillian Brooks (UK Desk Coordinator)'
  },
  {
    id: 'fiu-usa',
    name: 'Florida International University',
    shortName: 'FIU',
    country: 'United States',
    city: 'Miami, Florida',
    region: 'North America',
    ranking: 'Top 50 US Public Research University (Carnegie R1)',
    programsOffered: [
      '3+1+1 Accelerated Master’s in Computer Science',
      'Joint Research in Cyber-Physical Systems',
      'International Business Immersion'
    ],
    pathwayTypes: ['3+1 Pathway', 'Research Fellowship'],
    minCgpa: 7.5,
    eligibleBranches: ['B.Tech CSE', 'B.Tech ECE', 'MBA'],
    maxBacklogs: 1,
    scholarshipDiscount: 'In-State Tuition Fee Structure equivalent (Save $14,000/yr)',
    annualFeeEstimate: '$18,900 / Year',
    creditsTransferred: 'Up to 30 Graduate Credits transferable',
    overview:
      'Miami-based Carnegie R1 research university partnership offering accelerated Master of Science degrees with in-state tuition waiver for Bennett University nominees.',
    highlights: [
      'Fast-track to US MS degree with STEM OPT 3-Year Work Authorization',
      'In-state tuition waiver saves over $14,000 annually',
      'Miami tech hub location with burgeoning fintech and AI ecosystem'
    ],
    intakeSemesters: ['Fall (August)', 'Spring (January)'],
    applicationDeadline: 'April 1 for Fall',
    mouYear: 2019,
    contactPerson: 'Dr. Carlos Mendoza (Americas Dean Office)'
  },
  {
    id: 'iowa-state',
    name: 'Iowa State University',
    shortName: 'Iowa State',
    country: 'United States',
    city: 'Ames, Iowa',
    region: 'North America',
    ranking: 'Top 100 US Engineering Program (US News)',
    programsOffered: [
      'Summer Undergraduate Research Program (SURP)',
      'Semester Abroad in Precision Robotics & Embedded Systems',
      'Biotechnology & Gene Editing Joint Lab Fellowship'
    ],
    pathwayTypes: ['Semester Abroad', 'Summer School', 'Research Fellowship'],
    minCgpa: 8.2,
    eligibleBranches: ['B.Tech Biotech', 'B.Tech CSE', 'B.Tech ECE'],
    maxBacklogs: 0,
    scholarshipDiscount: 'Full Lab Bench Fee Waiver + $3,500 Housing Stipend for SURP',
    annualFeeEstimate: '$14,200 / Semester',
    creditsTransferred: '15 Semester Credits transferred to BU Major',
    overview:
      'Renowned US Big 12 research powerhouse partnering with Bennett University for cutting-edge engineering labs, biotech research, and summer fellowships.',
    highlights: [
      'Birthplace of the modern digital electronic computer (Atanasoff–Berry Computer)',
      'Direct faculty-mentored research in state-of-the-art bio-nanotechnology facilities',
      'Paid summer research stipends for top Bennett applicants'
    ],
    intakeSemesters: ['Summer (June)', 'Fall (August)'],
    applicationDeadline: 'February 15 for Summer / March 30 for Fall',
    mouYear: 2021,
    contactPerson: 'Dr. Priya Narayanan (Biotech & Engineering Coordinator)'
  }
];
