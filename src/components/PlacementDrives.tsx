import React, { useState } from 'react';
import { PLACEMENT_DRIVES, PLACEMENT_STATS, RECRUITER_LOGOS } from '../data/placements';
import { PlacementDrive } from '../types';
import { Search, Building, Calendar, DollarSign, MapPin, Users, Briefcase, CheckCircle, ChevronRight, X, Sparkles } from 'lucide-react';

interface PlacementDrivesProps {
  onRegisterDrive: (drive: PlacementDrive) => void;
  registeredDriveIds: string[];
}

export const PlacementDrives: React.FC<PlacementDrivesProps> = ({
  onRegisterDrive,
  registeredDriveIds
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobType, setSelectedJobType] = useState<string>('All');
  const [activeDriveModal, setActiveDriveModal] = useState<PlacementDrive | null>(null);

  const filteredDrives = PLACEMENT_DRIVES.filter((drive) => {
    const matchesSearch =
      drive.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.skillsRequired.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      drive.locations.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedJobType === 'All' || drive.jobType === selectedJobType;

    return matchesSearch && matchesType;
  });

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wider">
              <span>CORPORATE RELATIONS & TRAINING AND PLACEMENT CELL (TPC)</span>
              <span aria-hidden="true">·</span>
              <span>CAMPUS RECRUITMENT 2026-27</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              On-Campus Recruitment Drives
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Verified corporate hiring pipelines for Bennett University graduating and pre-final batches across marquee software, quantitative finance, and technology consulting leaders.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-500 font-medium">Highest Package</span>
              <div className="text-xl font-extrabold text-amber-600 font-mono tabular-nums">
                {PLACEMENT_STATS.highestCtc}
              </div>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <span className="text-xs text-slate-500 font-medium">Average CTC</span>
              <div className="text-xl font-extrabold text-slate-900 font-mono tabular-nums">
                {PLACEMENT_STATS.averageCtc}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Recruiters Row */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="font-semibold text-slate-700">Bennett Campus Recruiter Network ({PLACEMENT_STATS.totalRecruiters})</span>
            <span>450+ MoUs & Corporate Tie-ups</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-slate-700">
            {RECRUITER_LOGOS.map((recruiter, idx) => (
              <React.Fragment key={recruiter}>
                <span className="hover:text-red-700 transition-colors">{recruiter}</span>
                {idx < RECRUITER_LOGOS.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by company, role (SDE, ML, Analyst), or tech stack (C++, Python, React, SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-700"
              >
                <option value="All">All Hiring Formats</option>
                <option value="Full-time (FTE)">Full-time (FTE)</option>
                <option value="6-Month Internship">6-Month Internship</option>
                <option value="Summer Internship">Summer Internship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrives.map((drive) => {
            const isRegistered = registeredDriveIds.includes(drive.id);

            return (
              <div
                key={drive.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Top Bar with Company Emblem */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm border border-slate-800">
                        {drive.logoText}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">
                          {drive.companyName}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          {drive.jobType}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      {drive.status}
                    </span>
                  </div>

                  {/* Role and Package */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {drive.role}
                    </h4>
                    <div className="text-lg font-extrabold text-red-700 font-mono tabular-nums">
                      {drive.packageCtc}
                    </div>
                  </div>

                  {/* Criteria & Locations */}
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1.5 text-xs border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Min. CGPA Cutoff:</span>
                      <span className="font-semibold text-slate-900 font-mono tabular-nums">{drive.minCgpa} / 10.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Locations:</span>
                      <span className="text-slate-700 truncate max-w-[170px]" title={drive.locations.join(', ')}>
                        {drive.locations.join(', ')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Registration Closes:</span>
                      <span className="font-semibold text-red-700 tabular-nums">{drive.deadline}</span>
                    </div>
                  </div>

                  {/* Skills required */}
                  <div className="space-y-1 text-xs">
                    <span className="text-slate-500 font-medium">Target Competencies:</span>
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-slate-700 font-medium">
                      {drive.skillsRequired.map((skill, idx) => (
                        <React.Fragment key={skill}>
                          <span>{skill}</span>
                          {idx < drive.skillsRequired.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveDriveModal(drive)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                  >
                    View Rounds & JD <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {isRegistered ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Applied
                    </span>
                  ) : (
                    <button
                      onClick={() => onRegisterDrive(drive)}
                      className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white text-xs font-semibold rounded-md shadow-sm transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drive Details Modal */}
      {activeDriveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg border border-slate-800">
                  {activeDriveModal.logoText}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeDriveModal.companyName} — {activeDriveModal.role}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {activeDriveModal.jobType} · Locations: {activeDriveModal.locations.join(', ')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDriveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* CTC & Key Stats */}
              <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-red-900 font-semibold block">Total Package Compensation (CTC)</span>
                  <div className="text-2xl font-extrabold text-red-700 font-mono tabular-nums">
                    {activeDriveModal.packageCtc}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <span className="text-slate-500 block">Registration Closes:</span>
                  <span className="font-bold text-slate-900 tabular-nums">{activeDriveModal.deadline}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">JOB DESCRIPTION & EXPECTATIONS</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeDriveModal.description}
                </p>
              </div>

              {/* Selection Process & Rounds */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">RECRUITMENT TIMELINE & INTERVIEW ROUNDS</h4>
                <div className="space-y-2.5">
                  {activeDriveModal.rounds.map((round, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                        {index + 1}
                      </div>
                      <div className="space-y-0.5 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{round.name}</span>
                          <span className="text-slate-400" aria-hidden="true">·</span>
                          <span className="text-red-700 font-medium tabular-nums">{round.date}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{round.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">ELIGIBILITY CRITERIA</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-md border border-slate-100">
                    <span className="text-slate-500 block text-[11px]">Min. Cumulative CGPA</span>
                    <span className="font-bold text-slate-900 font-mono tabular-nums">{activeDriveModal.minCgpa} / 10.0</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-md border border-slate-100">
                    <span className="text-slate-500 block text-[11px]">Active Backlogs Permitted</span>
                    <span className="font-bold text-slate-900 font-mono tabular-nums">{activeDriveModal.maxBacklogs}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-md border border-slate-100">
                    <span className="text-slate-500 block text-[11px]">Drive Date</span>
                    <span className="font-bold text-slate-900 tabular-nums">{activeDriveModal.driveDate}</span>
                  </div>
                </div>
              </div>

              {/* Eligible Branches */}
              <div className="space-y-1 text-xs">
                <span className="text-slate-500 font-medium">Eligible Departments:</span>
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-slate-800 font-medium">
                  {activeDriveModal.eligibleBranches.map((branch, idx) => (
                    <React.Fragment key={branch}>
                      <span>{branch}</span>
                      {idx < activeDriveModal.eligibleBranches.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveDriveModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
              >
                Close
              </button>
              {registeredDriveIds.includes(activeDriveModal.id) ? (
                <span className="px-4 py-2 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200">
                  Already Applied
                </span>
              ) : (
                <button
                  onClick={() => {
                    const drive = activeDriveModal;
                    setActiveDriveModal(null);
                    onRegisterDrive(drive);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-colors"
                >
                  Confirm & Register for Drive
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
