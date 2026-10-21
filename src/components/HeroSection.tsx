import React from 'react';
import { ArrowRight, Globe, Award, TrendingUp, Building2, Bell, Sparkles, BookOpen } from 'lucide-react';
import { PLACEMENT_STATS } from '../data/placements';
import { GACD_NOTICES } from '../data/eventsAndNotices';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenApply }) => {
  const latestNotice = GACD_NOTICES[0];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative subtle ambient backdrop lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        {/* Urgent Announcement Header Kicker */}
        {latestNotice && (
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl text-xs backdrop-blur-sm transition-colors text-slate-200">
              <span className="font-semibold text-amber-400 tracking-wide">LATEST CIRCULAR</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="font-medium truncate max-w-md sm:max-w-lg">{latestNotice.title}</span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-400 hidden sm:inline tabular-nums">{latestNotice.date}</span>
              <button
                onClick={() => onNavigate('pathways')}
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 ml-1 inline-flex items-center gap-1"
              >
                Details <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>BENNETT UNIVERSITY (THE TIMES GROUP)</span>
                <span aria-hidden="true">·</span>
                <span>GREATER NOIDA</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Global Affairs & Career Development Directorate
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Empowering Bennett scholars through world-class academic pathway partnerships with UC Berkeley, University of Essex, Waikato, and SCAD, combined with high-impact corporate recruitment drives across Fortune 500 tech leaders.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('pathways')}
                className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Explore Global Pathways</span>
              </button>
              <button
                onClick={() => onNavigate('placements')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Active Recruitment Drives</span>
              </button>
              <button
                onClick={() => onNavigate('calculator')}
                className="px-4 py-2.5 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Partner Quick Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Key MoUs:</span>
              <div className="flex flex-wrap items-center gap-2 text-slate-300 font-medium">
                <span>UC Berkeley</span>
                <span aria-hidden="true">·</span>
                <span>Univ of Essex</span>
                <span aria-hidden="true">·</span>
                <span>Univ of Waikato</span>
                <span aria-hidden="true">·</span>
                <span>SCAD USA</span>
                <span aria-hidden="true">·</span>
                <span>Whitecliffe NZ</span>
                <span aria-hidden="true">·</span>
                <span>Univ of Exeter</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Graphic & GACD Hub Snapshot */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-md shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs border border-red-500/30">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">GACD Fast-Track Programs</h3>
                    <p className="text-xs text-slate-400">Fall 2026 & Spring 2027 Intakes</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  Active Admissions
                </span>
              </div>

              {/* Pathway cards */}
              <div className="space-y-3">
                <div className="p-3 bg-slate-900/70 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">UC Berkeley BISP (California)</span>
                    <span className="text-amber-400 font-mono tabular-nums">Min 8.0 CGPA</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Study advanced Computer Science & AI at UC Berkeley with 20 transferrable academic credits.
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <span>Deadline: Nov 15</span>
                    <button
                      onClick={() => onNavigate('pathways')}
                      className="text-red-400 hover:text-red-300 font-semibold"
                    >
                      View Syllabus Transfer →
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/70 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">University of Essex Dual Degree (UK)</span>
                    <span className="text-emerald-400 font-mono tabular-nums">20% MoU Scholarship</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    2+2 and 3+1 pathways leading to UK Degree and 2-Year Post-Study Work Visa.
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <span>UK Graduate Route PSW</span>
                    <button
                      onClick={() => onNavigate('pathways')}
                      className="text-red-400 hover:text-red-300 font-semibold"
                    >
                      Explore Essex MoU →
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/70 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">Microsoft & Google Placement Drives</span>
                    <span className="text-amber-400 font-mono tabular-nums">₹42.5L – ₹48L CTC</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    On-campus FTE & 6-month internships for B.Tech CSE & ECE scholars.
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <span>Online Assessment: Nov 8 & 12</span>
                    <button
                      onClick={() => onNavigate('placements')}
                      className="text-red-400 hover:text-red-300 font-semibold"
                    >
                      Register Drive →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Strip Below Hero (Full-width row) */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">HIGHEST CTC PACKAGE</span>
            <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              {PLACEMENT_STATS.highestCtc}
            </div>
            <p className="text-xs text-slate-400">Meta International London (B.Tech CSE)</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">AVERAGE CTC (TOP 10%)</span>
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              {PLACEMENT_STATS.top10PercentAverage}
            </div>
            <p className="text-xs text-slate-400">Overall Campus Average: {PLACEMENT_STATS.averageCtc}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">GLOBAL UNIVERSITY MoUs</span>
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              {PLACEMENT_STATS.totalRecruiters.replace('+', '')} Partners
            </div>
            <p className="text-xs text-slate-400">US, UK, New Zealand, Europe & Asia</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">CORPORATE RECRUITERS</span>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {PLACEMENT_STATS.totalRecruiters}
            </div>
            <p className="text-xs text-slate-400">{PLACEMENT_STATS.placementPercentage} Career Placement Ratio</p>
          </div>
        </div>
      </div>
    </div>
  );
};
