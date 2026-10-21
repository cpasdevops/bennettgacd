import React, { useState } from 'react';
import { StudentApplication, PlacementDrive } from '../types';
import { ShieldCheck, Download, Plus, CheckCircle, Clock, AlertTriangle, FileSpreadsheet, Send, Search } from 'lucide-react';

interface AdminConsoleProps {
  applications: StudentApplication[];
  onUpdateAppStatus: (appId: string, newStatus: StudentApplication['status'], notes?: string) => void;
  onAddNewDrive: (drive: PlacementDrive) => void;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({
  applications,
  onUpdateAppStatus,
  onAddNewDrive
}) => {
  const [activeTab, setActiveTab] = useState<'applications' | 'create-drive' | 'broadcast'>('applications');
  const [filterType, setFilterType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // New Drive Form state
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newPackage, setNewPackage] = useState('');
  const [newJobType, setNewJobType] = useState<PlacementDrive['jobType']>('Full-time (FTE)');
  const [newMinCgpa, setNewMinCgpa] = useState<number>(7.5);
  const [newDeadline, setNewDeadline] = useState('2026-11-20');
  const [showDriveSuccess, setShowDriveSuccess] = useState(false);

  // Broadcast state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastCategory, setBroadcastCategory] = useState('Global Pathway');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.targetEntityName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filterType === 'All' || app.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleCreateDrive = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany || !newRole || !newPackage) return;

    onAddNewDrive({
      id: `drive-${Date.now()}`,
      companyName: newCompany,
      logoText: newCompany.slice(0, 2).toUpperCase(),
      role: newRole,
      jobType: newJobType,
      packageCtc: newPackage,
      locations: ['Noida', 'Bengaluru', 'Gurugram'],
      minCgpa: newMinCgpa,
      maxBacklogs: 0,
      eligibleBranches: ['B.Tech CSE', 'B.Tech ECE'],
      deadline: newDeadline,
      driveDate: '2026-11-28',
      rounds: [
        { name: 'Online Assessment', date: 'Nov 28, 2026', description: 'Technical coding & cognitive test' },
        { name: 'Technical & HR Rounds', date: 'Dec 02, 2026', description: 'Virtual interview panels' }
      ],
      description: `Official campus recruitment drive for ${newCompany} hiring for ${newRole}.`,
      skillsRequired: ['Problem Solving', 'Data Structures', 'Communication', 'Python / C++'],
      status: 'Open',
      applicantsCount: 0
    });

    setShowDriveSuccess(true);
    setTimeout(() => setShowDriveSuccess(false), 4000);
    setNewCompany('');
    setNewRole('');
    setNewPackage('');
  };

  const exportApplicationsCsv = () => {
    const headers = ['Application ID', 'Student Name', 'Roll Number', 'Branch', 'CGPA', 'Type', 'Target Entity', 'Applied Date', 'Status'];
    const rows = applications.map((app) => [
      app.id,
      app.studentName,
      app.rollNumber,
      app.branch,
      app.cgpa,
      app.type,
      `"${app.targetEntityName.replace(/"/g, '""')}"`,
      app.appliedDate,
      app.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bennett_GACD_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>GACD DIRECTORATE INTERNAL CONSOLE</span>
              <span aria-hidden="true">·</span>
              <span>CONFIDENTIAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Academic Alliances & Corporate Relations Control
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Oversee UC Berkeley and Essex nominations, approve student dossiers, provision new corporate drives, and export reports for the Dean’s Council.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportApplicationsCsv}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Export Dossiers CSV</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-sm text-xs font-semibold">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'applications'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Review Student Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('create-drive')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'create-drive'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            + Create Recruiter Drive
          </button>
          <button
            onClick={() => setActiveTab('broadcast')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'broadcast'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Broadcast Official Notice
          </button>
        </div>

        {/* Tab 1: Review Applications */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter candidate by name, roll no, or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
                />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Category:</span>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700"
                >
                  <option value="All">All Dossiers</option>
                  <option value="Global Pathway">Global Pathway Only</option>
                  <option value="Placement Drive">Placement Drive Only</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <tr>
                    <th className="py-3 px-4">Student & Roll No</th>
                    <th className="py-3 px-4">Program & Branch</th>
                    <th className="py-3 px-4 text-right">CGPA</th>
                    <th className="py-3 px-4">Target Entity</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Officer Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{app.studentName}</div>
                        <span className="text-[11px] text-slate-400 font-mono tabular-nums">{app.rollNumber}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-800">{app.branch}</div>
                        <span className="text-[11px] text-slate-400">Semester {app.semester}</span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-slate-900 tabular-nums">
                        {app.cgpa.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900">{app.targetEntityName}</div>
                        <span className="text-[11px] text-slate-400">{app.type} · {app.appliedDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${
                            app.status === 'Nominated' || app.status === 'Accepted'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : app.status === 'Dean Recommended' || app.status === 'Shortlisted'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onUpdateAppStatus(app.id, 'Dean Recommended', 'Dean committee approved academic endorsement.')}
                            className="px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded text-[11px] font-semibold"
                            title="Endorse dossier with Dean Recommendation"
                          >
                            Recommend
                          </button>
                          <button
                            onClick={() => onUpdateAppStatus(app.id, 'Nominated', 'Official nomination credentials dispatched to foreign university admissions.')}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded text-[11px] font-semibold"
                            title="Nominate candidate"
                          >
                            Nominate
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Create Placement Drive */}
        {activeTab === 'create-drive' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Provision New On-Campus Corporate Drive
              </h3>
              <p className="text-xs text-slate-500">
                Publish a verified recruiter drive to the student dashboard with automated CGPA eligibility checks.
              </p>
            </div>

            {showDriveSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>New recruitment drive successfully provisioned and notified to eligible students!</span>
              </div>
            )}

            <form onSubmit={handleCreateDrive} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cisco Systems / Salesforce"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Job Title / Designation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cloud Infrastructure Engineer"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Package CTC</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹24.0 LPA"
                    value={newPackage}
                    onChange={(e) => setNewPackage(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Hiring Format</label>
                  <select
                    value={newJobType}
                    onChange={(e) => setNewJobType(e.target.value as PlacementDrive['jobType'])}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                  >
                    <option value="Full-time (FTE)">Full-time (FTE)</option>
                    <option value="6-Month Internship">6-Month Internship</option>
                    <option value="Summer Internship">Summer Internship</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Min. CGPA Cutoff</label>
                  <input
                    type="number"
                    step="0.1"
                    min="6.0"
                    max="10.0"
                    value={newMinCgpa}
                    onChange={(e) => setNewMinCgpa(parseFloat(e.target.value))}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-sm"
                >
                  Publish Campus Drive
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Broadcast Notice */}
        {activeTab === 'broadcast' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Broadcast GACD Official Circular
              </h3>
              <p className="text-xs text-slate-500">
                Dispatches an announcement to the top notification ticker and student portal notice boards.
              </p>
            </div>

            {broadcastSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Notice dispatched and published across the Bennett University portal!</span>
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Circular Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Schedule for University of Waikato Cyber Security Delegation"
                  value={broadcastTitle}
                  onChange={(e) => setBroadcastTitle(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Notice Body</label>
                <textarea
                  rows={4}
                  placeholder="Detailed instructions for student applicants, deadlines, and conference venues..."
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (broadcastTitle.trim()) {
                      setBroadcastSuccess(true);
                      setTimeout(() => setBroadcastSuccess(false), 4000);
                      setBroadcastTitle('');
                      setBroadcastMessage('');
                    }
                  }}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-sm flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Broadcast Circular</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
