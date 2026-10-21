import { GACDNotice, GACDEvent, StudentApplication } from '../types';

export const GACD_NOTICES: GACDNotice[] = [
  {
    id: 'notice-1',
    title: 'UC Berkeley BISP Fall 2026 Nominations Officially Open',
    date: 'Oct 19, 2026',
    category: 'Global Pathway',
    summary:
      'GACD North America Desk invites applications for the Berkeley International Study Program (BISP) for Fall 2026. Pre-final year students with CGPA ≥ 8.0 are eligible. Submit your SOP and 2 LORs before Nov 15.',
    urgent: true,
    fileAttachment: 'UC_Berkeley_BISP_Brochure_2026.pdf'
  },
  {
    id: 'notice-2',
    title: 'Microsoft 6-Month Internship Drive - Slot Allocation & Prep Session',
    date: 'Oct 18, 2026',
    category: 'Placement Drive',
    summary:
      'Online Assessment for Microsoft 6-Month Winter Internship will be conducted on Nov 8 at BU Central Computing Lab. Mandatory pre-placement briefing on Nov 1 at 4:00 PM in Audi 1.',
    urgent: true,
    fileAttachment: 'Microsoft_Drive_Guidelines.pdf'
  },
  {
    id: 'notice-3',
    title: 'University of Essex 20% MoU Scholarship Window for Dual Degree (2+2 & 3+1)',
    date: 'Oct 15, 2026',
    category: 'Global Pathway',
    summary:
      'Bennett University scholars opting for University of Essex Computer Science, Law, and Management pathways qualify for the 20% strategic MoU tuition waiver and UK Graduate Post-Study Work Visa.',
    urgent: false,
    fileAttachment: 'Essex_Pathway_MoU_Terms.pdf'
  },
  {
    id: 'notice-4',
    title: 'Embassy of New Zealand & University of Waikato Cyber Security Symposium',
    date: 'Oct 12, 2026',
    category: 'Workshop',
    summary:
      'Special delegation visit by Waikato faculty and New Zealand Trade & Enterprise on emerging careers in cyber defense and fast-track residency pathways.',
    urgent: false
  },
  {
    id: 'notice-5',
    title: 'Mandatory Visa & Financial Documentation Clinic for US & UK Bound Scholars',
    date: 'Oct 09, 2026',
    category: 'Visa & Immigration',
    summary:
      'All students with provisional nominations for US (J-1/F-1) and UK (Student Visa) are requested to attend the documentation workshop with authorized immigration attorneys.',
    urgent: false
  }
];

export const GACD_EVENTS: GACDEvent[] = [
  {
    id: 'evt-1',
    title: 'Berkeley International Study Program (BISP) Info Session & Q&A',
    date: 'Nov 04, 2026',
    time: '3:30 PM - 5:00 PM IST',
    venue: 'Executive Auditorium, Ground Floor, Academic Block',
    speaker: 'Dr. Michael Chen',
    speakerTitle: 'Academic Director, BISP UC Berkeley (Visiting Bennett)',
    type: 'Global Info Session',
    seatsAvailable: 42,
    isRegistered: true
  },
  {
    id: 'evt-2',
    title: 'Cracking Big Tech Coding Interviews: DSA & System Design Masterclass',
    date: 'Nov 07, 2026',
    time: '5:00 PM - 7:00 PM IST',
    venue: 'Central Audi & Zoom Hybrid',
    speaker: 'Aman Singhal (BU Alumnus, Google SWE-3)',
    speakerTitle: 'Senior Software Engineer, Google Core Infra',
    type: 'Pre-Placement Talk',
    seatsAvailable: 85,
    isRegistered: false
  },
  {
    id: 'evt-3',
    title: 'Study in the UK: University of Essex Dual Degree & Post-Study Work Masterclass',
    date: 'Nov 14, 2026',
    time: '2:00 PM - 3:30 PM IST',
    venue: 'Seminar Hall 3, Block C',
    speaker: 'Prof. Alistair Wright & British Council Representatives',
    speakerTitle: 'Dean of International Admissions, University of Essex',
    type: 'Global Info Session',
    seatsAvailable: 60,
    isRegistered: false
  },
  {
    id: 'evt-4',
    title: 'GACD Mock Interview Marathon & Resume Sprint',
    date: 'Nov 20, 2026',
    time: '10:00 AM - 4:00 PM IST',
    venue: 'GACD Corporate Suite & Placement Chambers',
    speaker: 'Industry HR Panel (Amazon, Deloitte, Adobe)',
    speakerTitle: 'Senior Technical Recruiters',
    type: 'Mock Interview Clinic',
    seatsAvailable: 28,
    isRegistered: false
  }
];

export const INITIAL_STUDENT_APPLICATIONS: StudentApplication[] = [
  {
    id: 'APP-2026-0891',
    studentName: 'Vidya Sharma',
    studentEmail: 'vidyasharma121@gmail.com',
    rollNumber: 'E22CSEU0412',
    branch: 'B.Tech Computer Science Engineering',
    semester: 6,
    cgpa: 8.74,
    type: 'Global Pathway',
    targetEntityName: 'University of California, Berkeley (BISP)',
    appliedDate: '2026-10-14',
    status: 'Dean Recommended',
    dossierItems: {
      transcripts: true,
      sop: true,
      lor1: true,
      lor2: true,
      passportOrResume: true
    },
    notes: 'Nomination dossier cleared departmental committee. Forwarded to UC Berkeley BISP liaison for final acceptance letter.'
  },
  {
    id: 'APP-2026-0744',
    studentName: 'Vidya Sharma',
    studentEmail: 'vidyasharma121@gmail.com',
    rollNumber: 'E22CSEU0412',
    branch: 'B.Tech Computer Science Engineering',
    semester: 6,
    cgpa: 8.74,
    type: 'Placement Drive',
    targetEntityName: 'Microsoft (Software Engineer 6-Month Intern)',
    appliedDate: '2026-10-18',
    status: 'Shortlisted',
    dossierItems: {
      transcripts: true,
      sop: true,
      lor1: true,
      lor2: false,
      passportOrResume: true
    },
    notes: 'CGPA eligibility verified (8.74 ≥ 7.5). Online assessment link allocated for Nov 8 slot.'
  },
  {
    id: 'APP-2026-0612',
    studentName: 'Aarav Mehta',
    studentEmail: 'aarav.mehta@bennett.edu.in',
    rollNumber: 'E22CSEU0108',
    branch: 'B.Tech Computer Science Engineering',
    semester: 6,
    cgpa: 8.42,
    type: 'Global Pathway',
    targetEntityName: 'University of Essex (2+2 Dual Degree B.Sc)',
    appliedDate: '2026-09-28',
    status: 'Nominated',
    dossierItems: {
      transcripts: true,
      sop: true,
      lor1: true,
      lor2: true,
      passportOrResume: true
    },
    notes: 'Conditional offer letter received from University of Essex Admissions.'
  },
  {
    id: 'APP-2026-0590',
    studentName: 'Rhea Sen',
    studentEmail: 'rhea.sen@bennett.edu.in',
    rollNumber: 'E22ECEU0034',
    branch: 'B.Tech Electronics & Communication',
    semester: 6,
    cgpa: 7.91,
    type: 'Placement Drive',
    targetEntityName: 'Google (Software Development Engineer)',
    appliedDate: '2026-10-15',
    status: 'Submitted',
    dossierItems: {
      transcripts: true,
      sop: false,
      lor1: false,
      lor2: false,
      passportOrResume: true
    },
    notes: 'Application submitted. Resume under technical screening.'
  }
];
