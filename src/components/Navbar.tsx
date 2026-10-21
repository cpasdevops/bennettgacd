import React from 'react';
import { Globe2, ShieldCheck, UserCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: 'student' | 'officer';
  setUserRole: (role: 'student' | 'officer') => void;
  openApplyModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  openApplyModal
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm tracking-tight border border-slate-800 shrink-0">
              BU
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
                Bennett GACD
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap leading-none">
                Global Affairs & Career Development
              </span>
            </div>
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('overview')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'overview'
                  ? 'text-red-700 border-red-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('pathways')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'pathways'
                  ? 'text-red-700 border-red-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Global Pathways
            </button>
            <button
              onClick={() => setActiveTab('placements')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'placements'
                  ? 'text-red-700 border-red-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Placements & Drives
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'calculator'
                  ? 'text-red-700 border-red-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Eligibility Calculator
            </button>
            <button
              onClick={() => setActiveTab('portal')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'portal'
                  ? 'text-red-700 border-red-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Student Portal
            </button>
          </nav>

          {/* Zone 3: 1 primary action + role toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setUserRole('student')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  userRole === 'student'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Student Dashboard Mode"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Student</span>
              </button>
              <button
                onClick={() => setUserRole('officer')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  userRole === 'officer'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="GACD Officer / Admin Console"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GACD Admin</span>
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                if (openApplyModal) {
                  openApplyModal();
                } else {
                  setActiveTab('portal');
                }
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              Apply to Program
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-between overflow-x-auto px-4 py-2.5 border-t border-slate-200 bg-slate-50 gap-4 text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveTab('overview')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'overview' ? 'text-red-700 font-bold' : ''}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('pathways')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'pathways' ? 'text-red-700 font-bold' : ''}`}
        >
          Pathways
        </button>
        <button
          onClick={() => setActiveTab('placements')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'placements' ? 'text-red-700 font-bold' : ''}`}
        >
          Placements
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'calculator' ? 'text-red-700 font-bold' : ''}`}
        >
          Eligibility
        </button>
        <button
          onClick={() => setActiveTab('portal')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'portal' ? 'text-red-700 font-bold' : ''}`}
        >
          Portal
        </button>
      </div>
    </header>
  );
};
