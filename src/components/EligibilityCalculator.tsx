import React, { useState, useMemo } from 'react';
import { PARTNER_UNIVERSITIES } from '../data/partners';
import { Calculator, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Award, BookOpen, GraduationCap } from 'lucide-react';

interface EligibilityCalculatorProps {
  onStartApplicationWithEntity: (entityName: string) => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({
  onStartApplicationWithEntity
}) => {
  const [selectedBranch, setSelectedBranch] = useState('B.Tech CSE');
  const [currentSemester, setCurrentSemester] = useState(6);
  const [cgpa, setCgpa] = useState<number>(8.5);
  const [backlogs, setBacklogs] = useState<number>(0);
  const [hasEnglishCertificate, setHasEnglishCertificate] = useState(true);
  const [selectedPartnerId, setSelectedPartnerId] = useState(PARTNER_UNIVERSITIES[0].id);

  const selectedPartner = useMemo(() => {
    return PARTNER_UNIVERSITIES.find((p) => p.id === selectedPartnerId) || PARTNER_UNIVERSITIES[0];
  }, [selectedPartnerId]);

  // Assessment logic
  const evaluation = useMemo(() => {
    const isBranchEligible = selectedPartner.eligibleBranches.some(
      (b) => b.includes(selectedBranch) || selectedBranch.includes(b)
    );
    const meetsCgpa = cgpa >= selectedPartner.minCgpa;
    const meetsBacklogs = backlogs <= selectedPartner.maxBacklogs;
    const minSemRequired = selectedPartner.pathwayTypes.some((p) => p.includes('2+2')) ? 4 : 5;
    const meetsSemester = currentSemester >= minSemRequired;

    let status: 'Eligible' | 'Conditional' | 'Ineligible' = 'Eligible';
    const notes: string[] = [];

    if (!isBranchEligible) {
      status = 'Ineligible';
      notes.push(`Current major (${selectedBranch}) is not currently mapped under this specific MoU curriculum.`);
    }

    if (!meetsCgpa) {
      if (cgpa >= selectedPartner.minCgpa - 0.4) {
        if (status !== 'Ineligible') status = 'Conditional';
        notes.push(`CGPA is slightly below nominal cutoff (${selectedPartner.minCgpa}); exceptional Statement of Purpose and Faculty LORs required.`);
      } else {
        status = 'Ineligible';
        notes.push(`CGPA (${cgpa.toFixed(2)}) is below the institutional threshold (${selectedPartner.minCgpa.toFixed(1)}).`);
      }
    }

    if (!meetsBacklogs) {
      status = 'Ineligible';
      notes.push(`Active backlogs (${backlogs}) exceed the partner cutoff (${selectedPartner.maxBacklogs}). All backlogs must be cleared prior to nomination.`);
    }

    if (!meetsSemester) {
      if (status !== 'Ineligible') status = 'Conditional';
      notes.push(`Typically requires completion of at least Semester ${minSemRequired} at Bennett University.`);
    }

    if (status === 'Eligible') {
      notes.push('Exemplary academic profile! Direct nomination fast-track through GACD Directorate.');
      notes.push(`Eligible for Bennett MoU Scholarship: ${selectedPartner.scholarshipDiscount}`);
      if (hasEnglishCertificate) {
        notes.push('IELTS/TOEFL waiver applicable via Bennett University English Medium of Instruction letter.');
      }
    }

    return {
      status,
      isBranchEligible,
      meetsCgpa,
      meetsBacklogs,
      notes
    };
  }, [selectedPartner, selectedBranch, cgpa, backlogs, currentSemester, hasEnglishCertificate]);

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100/60 text-red-800 rounded-full text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>AUTOMATED ACADEMIC AUDIT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Global Pathway & Credit Transfer Calculator
          </h2>
          <p className="text-sm text-slate-600">
            Simulate your academic standing against Bennett University’s international MoUs with UC Berkeley, University of Essex, Waikato, SCAD, and Exeter.
          </p>
        </div>

        {/* Two-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              1. STUDENT ACADEMIC PROFILE
            </h3>

            {/* Department */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Bennett Enrolled Program</label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-800"
              >
                <option value="B.Tech CSE">B.Tech Computer Science Engineering</option>
                <option value="B.Tech ECE">B.Tech Electronics & Communication</option>
                <option value="B.Tech Biotech">B.Tech Biotechnology</option>
                <option value="BBA">Bachelor of Business Administration (BBA)</option>
                <option value="MBA">Master of Business Administration (MBA)</option>
                <option value="BA LL.B">BA LL.B (School of Law)</option>
                <option value="BBA LL.B">BBA LL.B (School of Law)</option>
                <option value="Times School of Media">Times School of Media (BAJMC / B.Des)</option>
              </select>
            </div>

            {/* Current Semester */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-700">Current Semester Completed</span>
                <span className="font-bold text-red-700 font-mono tabular-nums">Semester {currentSemester}</span>
              </div>
              <input
                type="range"
                min={2}
                max={8}
                step={1}
                value={currentSemester}
                onChange={(e) => setCurrentSemester(parseInt(e.target.value))}
                className="w-full accent-red-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Sem 2 (1st Year)</span>
                <span>Sem 4 (2nd Year)</span>
                <span>Sem 6 (3rd Year)</span>
                <span>Sem 8</span>
              </div>
            </div>

            {/* Cumulative CGPA */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-700">Cumulative CGPA (10.0 Scale)</span>
                <span className="font-bold text-red-700 font-mono text-base tabular-nums">{cgpa.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={5.0}
                max={10.0}
                step={0.05}
                value={cgpa}
                onChange={(e) => setCgpa(parseFloat(e.target.value))}
                className="w-full accent-red-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>5.0</span>
                <span>7.0 (First Class)</span>
                <span>8.0 (Berkeley Cutoff)</span>
                <span>9.0+ (Distinction)</span>
              </div>
            </div>

            {/* Active Backlogs */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Active Uncleared Backlogs</label>
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBacklogs(num)}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-all font-mono tabular-nums ${
                      backlogs === num
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {num === 3 ? '3+' : num}
                  </button>
                ))}
              </div>
            </div>

            {/* Target University Selection */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 tracking-wider">
                2. TARGET PARTNER INSTITUTION
              </h3>
              <select
                value={selectedPartnerId}
                onChange={(e) => setSelectedPartnerId(e.target.value)}
                className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-900 font-medium"
              >
                {PARTNER_UNIVERSITIES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.country})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              {/* Verdict Header */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 tracking-wider">INSTITUTIONAL AUDIT VERDICT</span>
                <div className="flex items-center gap-3">
                  {evaluation.status === 'Eligible' && (
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  )}
                  {evaluation.status === 'Conditional' && (
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}
                  {evaluation.status === 'Ineligible' && (
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                      <XCircle className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {evaluation.status === 'Eligible' && 'Direct Qualification Confirmed'}
                      {evaluation.status === 'Conditional' && 'Conditional Consideration'}
                      {evaluation.status === 'Ineligible' && 'Criteria Not Met for Intake'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Audited for: {selectedPartner.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Assessment Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-500 block">Required CGPA</span>
                  <div className="font-bold text-slate-900 font-mono text-sm tabular-nums">
                    {selectedPartner.minCgpa} vs {cgpa.toFixed(2)}
                  </div>
                  <span className={`text-[11px] font-medium ${evaluation.meetsCgpa ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {evaluation.meetsCgpa ? '✓ Meets Cutoff' : '✗ Below Cutoff'}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-500 block">Backlog Tolerance</span>
                  <div className="font-bold text-slate-900 font-mono text-sm tabular-nums">
                    Max {selectedPartner.maxBacklogs} (You have: {backlogs})
                  </div>
                  <span className={`text-[11px] font-medium ${evaluation.meetsBacklogs ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {evaluation.meetsBacklogs ? '✓ Clean Academic Record' : '✗ Backlogs Excessive'}
                  </span>
                </div>
              </div>

              {/* Scholarship & Credit Transfer Box */}
              <div className="p-4 bg-red-50/60 rounded-xl border border-red-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-950">
                  <Award className="w-4 h-4 text-red-700" />
                  <span>Applicable Bennett MoU Scholarship Benefit</span>
                </div>
                <p className="text-xs text-red-900 font-medium leading-relaxed">
                  {selectedPartner.scholarshipDiscount}
                </p>
                <div className="text-[11px] text-red-800 pt-1 border-t border-red-200/50 flex justify-between">
                  <span>Transfer: {selectedPartner.creditsTransferred}</span>
                  <span>Est. Fee: {selectedPartner.annualFeeEstimate}</span>
                </div>
              </div>

              {/* Specific Guidance Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 tracking-wider">COMMITTEE OBSERVATIONS</span>
                <div className="space-y-1.5">
                  {evaluation.notes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                      <span className="text-slate-400 shrink-0 font-mono">0{idx + 1}.</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => onStartApplicationWithEntity(selectedPartner.name)}
                  className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Proceed to Dossier Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
