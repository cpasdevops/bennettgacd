export interface PartnerUniversity {
  id: string;
  name: string;
  shortName: string;
  country: string;
  city: string;
  region: 'North America' | 'UK & Europe' | 'Asia Pacific' | 'Australia & NZ';
  ranking: string;
  programsOffered: string[];
  pathwayTypes: ('2+2 Dual Degree' | '3+1 Pathway' | 'Semester Abroad' | 'Summer School' | 'Research Fellowship')[];
  minCgpa: number;
  eligibleBranches: string[];
  maxBacklogs: number;
  scholarshipDiscount: string;
  annualFeeEstimate: string;
  creditsTransferred: string;
  overview: string;
  highlights: string[];
  intakeSemesters: string[];
  applicationDeadline: string;
  mouYear: number;
  contactPerson: string;
}

export interface PlacementDrive {
  id: string;
  companyName: string;
  logoText: string;
  role: string;
  jobType: 'Full-time (FTE)' | '6-Month Internship' | 'Summer Internship';
  packageCtc: string; // e.g. "₹28.5 LPA" or "₹1,20,000 / mo"
  stipend?: string;
  locations: string[];
  minCgpa: number;
  maxBacklogs: number;
  eligibleBranches: string[];
  deadline: string;
  driveDate: string;
  rounds: { name: string; date: string; description: string }[];
  description: string;
  skillsRequired: string[];
  status: 'Open' | 'Under Review' | 'Interviews Ongoing' | 'Closed';
  applicantsCount: number;
}

export interface StudentApplication {
  id: string;
  studentName: string;
  studentEmail: string;
  rollNumber: string;
  branch: string;
  semester: number;
  cgpa: number;
  type: 'Global Pathway' | 'Placement Drive';
  targetEntityName: string; // Partner university or Company
  appliedDate: string;
  status: 'Submitted' | 'Under Review' | 'Dean Recommended' | 'Nominated' | 'Accepted' | 'Shortlisted';
  dossierItems: {
    transcripts: boolean;
    sop: boolean;
    lor1: boolean;
    lor2: boolean;
    passportOrResume: boolean;
  };
  notes?: string;
}

export interface GACDNotice {
  id: string;
  title: string;
  date: string;
  category: 'Global Pathway' | 'Placement Drive' | 'Visa & Immigration' | 'Workshop';
  summary: string;
  urgent: boolean;
  fileAttachment?: string;
}

export interface GACDEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  speakerTitle: string;
  type: 'Pre-Placement Talk' | 'Global Info Session' | 'Mock Interview Clinic' | 'Delegation';
  seatsAvailable: number;
  isRegistered?: boolean;
}
