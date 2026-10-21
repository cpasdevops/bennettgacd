import React from 'react';
import { Building2, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          {/* Col 1: Bennett GACD Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
              <div className="w-7 h-7 rounded bg-red-700 text-white flex items-center justify-center font-black text-xs">
                BU
              </div>
              <span>Bennett GACD Directorate</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Global Affairs & Career Development Directorate at Bennett University (The Times Group), managing international university collaborations, credit pathways, and corporate placement pipelines.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Greater Noida, NCR Delhi, India</span>
            </div>
          </div>

          {/* Col 2: Global Desks */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs tracking-wider">INTERNATIONAL DESKS</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onNavigate('pathways')} className="hover:text-white transition-colors">
                  North America: UC Berkeley (BISP) & SCAD
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pathways')} className="hover:text-white transition-colors">
                  UK & Europe: University of Essex & Exeter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pathways')} className="hover:text-white transition-colors">
                  Australasia: University of Waikato & Whitecliffe
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pathways')} className="hover:text-white transition-colors">
                  Dual Degree 2+2 & Integrated Master’s 3+1
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Career & Placements */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs tracking-wider">CAREER & PLACEMENT CELL</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onNavigate('placements')} className="hover:text-white transition-colors">
                  On-Campus Corporate Recruitment Drives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('placements')} className="hover:text-white transition-colors">
                  Highest Package: ₹1.37 Cr CTC (Meta London)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-white transition-colors">
                  GACD Resume & ATS Readiness Scanner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white transition-colors">
                  Pathway Eligibility & Credit Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpdesk */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs tracking-wider">DIRECTORATE HELPDESK</h4>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>gacd@bennett.edu.in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>placements@bennett.edu.in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono tabular-nums">+91-120-7199300</span>
              </div>
              <p className="text-[10px] text-slate-500 pt-1">
                Office Hours: Mon–Fri, 9:00 AM – 5:30 PM IST (Academic Block C)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bennett University (Times of India Group). All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span>Bennett GACD</span>
            <span aria-hidden="true">·</span>
            <span>UGC Recognized</span>
            <span aria-hidden="true">·</span>
            <span>NAAC Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
