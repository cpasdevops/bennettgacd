import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GlobalPathways } from './components/GlobalPathways';
import { PlacementDrives } from './components/PlacementDrives';
import { EligibilityCalculator } from './components/EligibilityCalculator';
import { StudentPortal } from './components/StudentPortal';
import { AdminConsole } from './components/AdminConsole';
import { Footer } from './components/Footer';
import { INITIAL_STUDENT_APPLICATIONS } from './data/eventsAndNotices';
import { PLACEMENT_DRIVES } from './data/placements';
import { StudentApplication, PlacementDrive } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pathways' | 'placements' | 'calculator' | 'portal'>('overview');
  const [userRole, setUserRole] = useState<'student' | 'officer'>('student');

  // Applications state with localStorage fallback
  const [applications, setApplications] = useState<StudentApplication[]>(() => {
    try {
      const saved = localStorage.getItem('bennett_gacd_apps');
      return saved ? JSON.parse(saved) : INITIAL_STUDENT_APPLICATIONS;
    } catch {
      return INITIAL_STUDENT_APPLICATIONS;
    }
  });

  // Placement drives state
  const [drives, setDrives] = useState<PlacementDrive[]>(() => {
    try {
      const saved = localStorage.getItem('bennett_gacd_drives');
      return saved ? JSON.parse(saved) : PLACEMENT_DRIVES;
    } catch {
      return PLACEMENT_DRIVES;
    }
  });

  // Track drive registrations
  const [registeredDriveIds, setRegisteredDriveIds] = useState<string[]>(['drive-microsoft-intern']);

  // Flash notification toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('bennett_gacd_apps', JSON.stringify(applications));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem('bennett_gacd_drives', JSON.stringify(drives));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [drives]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Register for on-campus drive
  const handleRegisterDrive = (drive: PlacementDrive) => {
    if (registeredDriveIds.includes(drive.id)) return;

    setRegisteredDriveIds((prev) => [...prev, drive.id]);

    const newApp: StudentApplication = {
      id: `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      studentName: 'Vidya Sharma',
      studentEmail: 'vidyasharma121@gmail.com',
      rollNumber: 'E22CSEU0412',
      branch: 'B.Tech Computer Science Engineering',
      semester: 6,
      cgpa: 8.74,
      type: 'Placement Drive',
      targetEntityName: `${drive.companyName} (${drive.role})`,
      appliedDate: new Date().toISOString().slice(0, 10),
      status: 'Submitted',
      dossierItems: {
        transcripts: true,
        sop: false,
        lor1: false,
        lor2: false,
        passportOrResume: true
      },
      notes: `Registered for on-campus drive. Eligible under CGPA cutoff ${drive.minCgpa}.`
    };

    setApplications((prev) => [newApp, ...prev]);
    showToast(`Successfully registered for ${drive.companyName} drive (${drive.role})!`);
  };

  // Submit new application
  const handleAddNewApplication = (newApp: Omit<StudentApplication, 'id' | 'appliedDate' | 'status'>) => {
    const created: StudentApplication = {
      ...newApp,
      id: `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      appliedDate: new Date().toISOString().slice(0, 10),
      status: 'Submitted'
    };
    setApplications((prev) => [created, ...prev]);
    showToast(`Nomination dossier submitted for ${newApp.targetEntityName}!`);
  };

  // Update dossier item toggle
  const handleUpdateDossier = (
    appId: string,
    itemKey: keyof StudentApplication['dossierItems'],
    value: boolean
  ) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          return {
            ...app,
            dossierItems: {
              ...app.dossierItems,
              [itemKey]: value
            }
          };
        }
        return app;
      })
    );
  };

  // Admin: Update status
  const handleUpdateAppStatus = (
    appId: string,
    newStatus: StudentApplication['status'],
    notes?: string
  ) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          return {
            ...app,
            status: newStatus,
            notes: notes || app.notes
          };
        }
        return app;
      })
    );
    showToast(`Application ${appId} marked as ${newStatus}.`);
  };

  // Admin: Add new drive
  const handleAddNewDrive = (newDrive: PlacementDrive) => {
    setDrives((prev) => [newDrive, ...prev]);
    showToast(`Published new on-campus drive for ${newDrive.companyName}!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-800 flex items-center gap-3 text-xs animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab as typeof activeTab)}
        userRole={userRole}
        setUserRole={setUserRole}
        openApplyModal={() => setActiveTab('portal')}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {userRole === 'officer' ? (
          <AdminConsole
            applications={applications}
            onUpdateAppStatus={handleUpdateAppStatus}
            onAddNewDrive={handleAddNewDrive}
          />
        ) : (
          <>
            {activeTab === 'overview' && (
              <>
                <HeroSection
                  onNavigate={(tab) => setActiveTab(tab as typeof activeTab)}
                  onOpenApply={() => setActiveTab('portal')}
                />
                <GlobalPathways
                  onSelectToApply={(partnerName) => {
                    setActiveTab('portal');
                  }}
                />
              </>
            )}

            {activeTab === 'pathways' && (
              <GlobalPathways
                onSelectToApply={(partnerName) => {
                  setActiveTab('portal');
                }}
              />
            )}

            {activeTab === 'placements' && (
              <PlacementDrives
                onRegisterDrive={handleRegisterDrive}
                registeredDriveIds={registeredDriveIds}
              />
            )}

            {activeTab === 'calculator' && (
              <EligibilityCalculator
                onStartApplicationWithEntity={(entityName) => {
                  setActiveTab('portal');
                }}
              />
            )}

            {activeTab === 'portal' && (
              <StudentPortal
                applications={applications}
                onAddNewApplication={handleAddNewApplication}
                onUpdateDossier={handleUpdateDossier}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab as typeof activeTab)} />
    </div>
  );
}
