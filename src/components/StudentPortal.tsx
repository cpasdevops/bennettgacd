import React, { useState } from 'react';
import { StudentApplication } from '../types';
import { PARTNER_UNIVERSITIES } from '../data/partners';
import { PLACEMENT_DRIVES } from '../data/placements';
import { User, FileText, CheckCircle2, Clock, AlertCircle, Sparkles, Upload, ArrowRight, Shield, Award, Check } from 'lucide-react';

interface StudentPortalProps {
  applications: StudentApplication[];
  onAddNewApplication: (app: Omit<StudentApplication, 'id' | 'appliedDate' | 'status'>) => void;
  onUpdateDossier: (appId: string, itemKey: keyof StudentApplication['dossierItems'], value: boolean) => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({
  applications,
  onAddNewApplication,
  onUpdateDossier
}) => {
  // Demo Student Profile (Personalized for Vidya Sharma)
  const [studentProfile, setStudentProfile] = useState({
    name: 'Vidya Sharma',
    email: 'vidyasharma121@gmail.com',
    rollNumber: 'E22CSEU0412',
    department: 'School of Engineering and Applied Sciences',
    branch: 'B.Tech Computer Science Engineering',
    semester: 6,
    cgpa: 8.74,
    batch: '2022-2026',
    moiCertificate: 'Verified on Bennett Digilocker'
  });

  // Resume ATS Analyzer state
  const [resumeText, setResumeText] = useState(
    `Built a distributed fault-tolerant key-value store using C++ and Raft consensus algorithm. Reduced latency by 34% through cache optimization.
Implemented real-time computer vision pipeline with PyTorch and OpenCV for medical image segmentation achieving 92.4% mIoU.
Proficient in Data Structures, Algorithms, Distributed Systems, Python, C++, Docker, Kubernetes, and Git. Lead technical head of BU Computing Society.`
  );
  const [atsResult, setAtsResult] = useState<{
    score: number;
    matchedKeywords: string[];
    missingKeywords: string[];
    suggestions: string[];
  } | null>(null);

  // New Application wizard modal
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [appType, setAppType] = useState<'Global Pathway' | 'Placement Drive'>('Global Pathway');
  const [targetEntity, setTargetEntity] = useState(PARTNER_UNIVERSITIES[0].name);
  const [sopStatement, setSopStatement] = useState('');

  // Handle ATS Scan
  const handleAtsScan = () => {
    const requiredKeywords = [
      'Data Structures', 'Algorithms', 'C++', 'Python', 'Distributed Systems',
      'System Design', 'Git', 'Cloud', 'SQL', 'Latency', 'Optimization'
    ];

    const lower = resumeText.toLowerCase();
    const matched = requiredKeywords.filter((k) => lower.includes(k.toLowerCase()));
    const missing = requiredKeywords.filter((k) => !lower.includes(k.toLowerCase()));

    // Calculate score based on keyword density and metric usage
    let baseScore = Math.round((matched.length / requiredKeywords.length) * 75);
    const hasNumbers = /\d+%|\d+ms|\d+x/i.test(resumeText);
    if (hasNumbers) baseScore += 15;
    if (resumeText.length > 250) baseScore += 10;
    const finalScore = Math.min(baseScore, 98);

    const suggestions: string[] = [];
    if (!hasNumbers) {
      suggestions.push('Add quantitative impact metrics (e.g., "improved latency by 25%", "supported 10k users").');
    }
    if (missing.length > 0) {
      suggestions.push(`Integrate missing high-frequency tech keywords: ${missing.slice(0, 4).join(', ')}.`);
    }
    suggestions.push('Ensure strong action verbs begin each project bullet point (Architected, Engineered, Benchmark-tested).');

    setAtsResult({
      score: finalScore,
      matchedKeywords: matched,
      missingKeywords: missing,
      suggestions
    });
  };

  const handleCreateApplication = (e: React.FormEvent) => {
    e.preventDefault();
    onAddNewApplication({
      studentName: studentProfile.name,
      studentEmail: studentProfile.email,
      rollNumber: studentProfile.rollNumber,
      branch: studentProfile.branch,
      semester: studentProfile.semester,
      cgpa: studentProfile.cgpa,
      type: appType,
      targetEntityName: targetEntity,
      dossierItems: {
        transcripts: true,
        sop: sopStatement.trim().length > 30,
        lor1: true,
        lor2: false,
        passportOrResume: true
      },
      notes: sopStatement ? `Candidate statement: "${sopStatement.slice(0, 100)}..."` : undefined
    });
    setShowApplyModal(false);
    setSopStatement('');
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 font-extrabold text-xl flex items-center justify-center border border-slate-800 shrink-0">
                VS
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">{studentProfile.name}</h2>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Good Academic Standing
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="font-mono tabular-nums">{studentProfile.rollNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{studentProfile.branch}</span>
                  <span aria-hidden="true">·</span>
                  <span>Semester {studentProfile.semester} ({studentProfile.batch})</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">Official CGPA</span>
                <span className="text-2xl font-black text-red-700 font-mono tabular-nums">
                  {studentProfile.cgpa.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => setShowApplyModal(true)}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                + New Application
              </button>
            </div>
          </div>

          {/* Quick verification row */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>English MOI Letter: <strong className="text-slate-800">Verified</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Backlog Status: <strong className="text-slate-800">Zero Active Backlogs</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>GACD Fellowship Tier: <strong className="text-slate-800">Priority Candidate</strong></span>
            </div>
          </div>
        </div>

        {/* Active Applications Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-lg font-bold text-slate-900">
                Submitted Dossiers & Drive Registrations
              </h3>
              <p className="text-xs text-slate-500">
                Real-time tracking of Bennett University GACD nominations and corporate interview pipelines.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {applications.length} Applications on Record
            </span>
          </div>

          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 space-y-4 transition-all"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 font-mono tabular-nums">{app.id}</span>
                      <span className="text-xs text-slate-300" aria-hidden="true">·</span>
                      <span className="text-xs font-medium text-slate-600">{app.type}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      {app.targetEntityName}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 font-mono tabular-nums">
                      Applied: {app.appliedDate}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${
                        app.status === 'Nominated' || app.status === 'Accepted'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : app.status === 'Dean Recommended' || app.status === 'Shortlisted'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>

                {/* Dossier Checklist Interactive Toggles */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-700 block">
                    GACD Verification Dossier Checklist:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                    {[
                      { key: 'transcripts', label: 'Transcripts' },
                      { key: 'sop', label: 'Statement of Purpose' },
                      { key: 'lor1', label: 'Faculty LOR #1' },
                      { key: 'lor2', label: 'Faculty LOR #2' },
                      { key: 'passportOrResume', label: 'Passport / Resume' }
                    ].map((item) => {
                      const isComplete = app.dossierItems[item.key as keyof StudentApplication['dossierItems']];
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() =>
                            onUpdateDossier(
                              app.id,
                              item.key as keyof StudentApplication['dossierItems'],
                              !isComplete
                            )
                          }
                          className={`p-2 rounded-lg border flex items-center justify-between text-left transition-all ${
                            isComplete
                              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900 font-medium'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                        >
                          <span className="truncate pr-1">{item.label}</span>
                          {isComplete ? (
                            <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {app.notes && (
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Directorate Notes: </span>
                    {app.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Built-in ATS Resume & Profile Readiness Tool */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900">
                  GACD Resume & ATS Readiness Scanner
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Benchmark your technical resume and Statement of Purpose against Big Tech corporate drives and Berkeley/Essex admissions criteria.
              </p>
            </div>
            <button
              onClick={handleAtsScan}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Audit Resume</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-2">
              <label className="text-xs font-semibold text-slate-700 block">
                Paste Resume Project Bullets or Skills Section:
              </label>
              <textarea
                rows={6}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                className="w-full p-3.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-800 font-mono leading-relaxed"
                placeholder="Paste your resume experience bullets or skills summary here..."
              />
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">ATS AUDIT SCORE</span>
                <span className="text-2xl font-black text-red-700 font-mono tabular-nums">
                  {atsResult ? `${atsResult.score}/100` : '88/100'}
                </span>
              </div>

              {atsResult ? (
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px] font-semibold">Matched Core Competencies:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {atsResult.matchedKeywords.map((k) => (
                        <span key={k} className="px-2 py-0.5 bg-emerald-100/70 text-emerald-800 rounded font-medium text-[11px]">
                          ✓ {k}
                        </span>
                      ))}
                    </div>
                  </div>

                  {atsResult.missingKeywords.length > 0 && (
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold">Recommended Keyword Inclusions:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {atsResult.missingKeywords.map((k) => (
                          <span key={k} className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded text-[11px]">
                            + {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-200 space-y-1">
                    <span className="text-slate-700 font-semibold block">Key Improvements:</span>
                    {atsResult.suggestions.map((s, idx) => (
                      <p key={idx} className="text-slate-600 text-[11px] leading-relaxed">
                        · {s}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-500 leading-relaxed">
                  Click <strong>Audit Resume</strong> to run our automated parser checking for algorithm keywords, measurable metrics, and corporate alignment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* New Application Wizard Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Submit New GACD Dossier Application
              </h3>
              <p className="text-xs text-slate-500">
                Initiate review by Bennett University GACD academic or placement committee.
              </p>
            </div>

            <form onSubmit={handleCreateApplication} className="space-y-4 text-xs">
              {/* Type */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Application Category</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAppType('Global Pathway');
                      setTargetEntity(PARTNER_UNIVERSITIES[0].name);
                    }}
                    className={`py-2 px-3 rounded-lg border font-semibold text-center transition-all ${
                      appType === 'Global Pathway'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Global Pathway (Study Abroad)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAppType('Placement Drive');
                      setTargetEntity(PLACEMENT_DRIVES[0].companyName + ' (' + PLACEMENT_DRIVES[0].role + ')');
                    }}
                    className={`py-2 px-3 rounded-lg border font-semibold text-center transition-all ${
                      appType === 'Placement Drive'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Corporate Placement Drive
                  </button>
                </div>
              </div>

              {/* Entity Selector */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Target Institution / Recruiter</label>
                <select
                  value={targetEntity}
                  onChange={(e) => setTargetEntity(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                >
                  {appType === 'Global Pathway'
                    ? PARTNER_UNIVERSITIES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.country})
                        </option>
                      ))
                    : PLACEMENT_DRIVES.map((d) => (
                        <option key={d.id} value={`${d.companyName} (${d.role})`}>
                          {d.companyName} — {d.role} ({d.packageCtc})
                        </option>
                      ))}
                </select>
              </div>

              {/* Brief Statement */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Statement of Purpose / Motivation (Optional)</label>
                <textarea
                  rows={3}
                  value={sopStatement}
                  onChange={(e) => setSopStatement(e.target.value)}
                  placeholder="Outline your research focus, academic readiness, or career aspirations..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 space-y-1">
                <span className="font-semibold text-slate-700 block">Prefilled Verification:</span>
                <p>Roll No: {studentProfile.rollNumber} · CGPA: {studentProfile.cgpa.toFixed(2)} · Clean disciplinary record</p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowApplyModal(false)}
                  className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-sm"
                >
                  Confirm & Submit Dossier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
