import React, { useState } from 'react';
import { PARTNER_UNIVERSITIES } from '../data/partners';
import { PartnerUniversity } from '../types';
import { Search, Filter, Globe2, MapPin, GraduationCap, DollarSign, Award, CheckCircle2, ChevronRight, X, ExternalLink } from 'lucide-react';

interface GlobalPathwaysProps {
  onSelectToApply: (partnerName: string) => void;
}

export const GlobalPathways: React.FC<GlobalPathwaysProps> = ({ onSelectToApply }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedPathwayType, setSelectedPathwayType] = useState<string>('All');
  const [activePartnerModal, setActivePartnerModal] = useState<PartnerUniversity | null>(null);

  const filteredPartners = PARTNER_UNIVERSITIES.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.programsOffered.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      partner.eligibleBranches.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRegion = selectedRegion === 'All' || partner.region === selectedRegion;
    const matchesPathway =
      selectedPathwayType === 'All' ||
      partner.pathwayTypes.some((type) => type.includes(selectedPathwayType));

    return matchesSearch && matchesRegion && matchesPathway;
  });

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wider">
              <span>GLOBAL ACADEMIC COLLABORATIONS</span>
              <span aria-hidden="true">·</span>
              <span>MoU PATHWAYS & DUAL DEGREES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              International Partner Universities
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Official institutional agreements facilitating credit transfers, 2+2 dual degrees, 3+1 accelerated master’s programs, and dedicated Bennett scholarship fee reductions.
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-500 font-medium">Active Partners</span>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {PARTNER_UNIVERSITIES.length} Premier Institutions
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by university name, country, branch, or major..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Region Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-700"
              >
                <option value="All">All Global Regions</option>
                <option value="North America">North America (USA)</option>
                <option value="UK & Europe">United Kingdom & Europe</option>
                <option value="Australia & NZ">Australia & New Zealand</option>
                <option value="Asia Pacific">Asia Pacific</option>
              </select>
            </div>

            {/* Pathway Type Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedPathwayType}
                onChange={(e) => setSelectedPathwayType(e.target.value)}
                className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white text-slate-700"
              >
                <option value="All">All Pathway Models</option>
                <option value="2+2">2+2 Dual Degree</option>
                <option value="3+1">3+1 Integrated Master’s</option>
                <option value="Semester Abroad">Semester Abroad (BISP)</option>
                <option value="Summer">Summer Immersion / Research</option>
              </select>
            </div>
          </div>

          {/* Quick Segmented Filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium mr-2">Featured Filter:</span>
            {[
              { label: 'All', val: 'All' },
              { label: 'USA (Berkeley & SCAD)', val: 'North America' },
              { label: 'UK (Essex & Exeter)', val: 'UK & Europe' },
              { label: 'New Zealand (Waikato & Whitecliffe)', val: 'Australia & NZ' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedRegion(item.val)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  selectedRegion === item.val
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                {/* Header & Location */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      <span>{partner.city}, {partner.country}</span>
                    </div>
                    <span className="font-mono tabular-nums text-slate-400">MoU Est. {partner.mouYear}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {partner.ranking}
                  </p>
                </div>

                {/* Pathway Types */}
                <div className="space-y-1 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">Available Pathways:</span>
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-slate-600">
                    {partner.pathwayTypes.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span className="font-medium">{t}</span>
                        {idx < partner.pathwayTypes.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Key specs */}
                <div className="p-3 bg-slate-50 rounded-lg space-y-2 text-xs border border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Min. CGPA Cutoff:</span>
                    <span className="font-semibold text-slate-900 font-mono tabular-nums">{partner.minCgpa} / 10.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Scholarship Benefit:</span>
                    <span className="font-semibold text-emerald-700 truncate max-w-[170px]" title={partner.scholarshipDiscount}>
                      {partner.scholarshipDiscount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Credit Recognition:</span>
                    <span className="font-medium text-slate-700 truncate max-w-[170px]">
                      {partner.creditsTransferred}
                    </span>
                  </div>
                </div>

                {/* Brief overview */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {partner.overview}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActivePartnerModal(partner)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  View MoU Details <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectToApply(partner.name)}
                  className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white text-xs font-semibold rounded-md shadow-sm transition-colors"
                >
                  Apply to Nominate
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
            <Globe2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No partner universities match your search</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search criteria, selected global region, or pathway model.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
                setSelectedPathwayType('All');
              }}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activePartnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-red-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePartnerModal.city}, {activePartnerModal.country}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePartnerModal.region}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activePartnerModal.name}
                </h3>
                <p className="text-xs text-slate-500">{activePartnerModal.ranking}</p>
              </div>
              <button
                onClick={() => setActivePartnerModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">COLLABORATION OVERVIEW</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activePartnerModal.overview}
                </p>
              </div>

              {/* Key Specs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Min. CGPA</span>
                  <span className="text-base font-bold text-slate-900 font-mono tabular-nums">{activePartnerModal.minCgpa}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Max Backlogs</span>
                  <span className="text-base font-bold text-slate-900 font-mono tabular-nums">{activePartnerModal.maxBacklogs}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">MoU Established</span>
                  <span className="text-base font-bold text-slate-900 font-mono tabular-nums">{activePartnerModal.mouYear}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Deadline</span>
                  <span className="text-xs font-bold text-red-700 leading-tight block mt-1">{activePartnerModal.applicationDeadline}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">PROGRAM HIGHLIGHTS & BENEFITS</h4>
                <div className="space-y-2">
                  {activePartnerModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligible Branches */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider">ELIGIBLE BENNETT DEPARTMENTS</h4>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 font-medium">
                  {activePartnerModal.eligibleBranches.map((b, i) => (
                    <React.Fragment key={b}>
                      <span>{b}</span>
                      {i < activePartnerModal.eligibleBranches.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Tuition & Scholarship */}
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>GACD Strategic MoU Scholarship Benefit</span>
                </div>
                <p className="text-xs text-amber-950 font-medium">
                  {activePartnerModal.scholarshipDiscount}
                </p>
                <div className="text-[11px] text-amber-800 flex items-center justify-between pt-1 border-t border-amber-200/60">
                  <span>Tuition Baseline: {activePartnerModal.annualFeeEstimate}</span>
                  <span>{activePartnerModal.creditsTransferred}</span>
                </div>
              </div>

              {/* GACD Coordinator Contact */}
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span>Desk Lead: {activePartnerModal.contactPerson}</span>
                <span className="text-red-700 font-medium">gacd@bennett.edu.in</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePartnerModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const partnerName = activePartnerModal.name;
                  setActivePartnerModal(null);
                  onSelectToApply(partnerName);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-colors"
              >
                Start Nomination Application
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
