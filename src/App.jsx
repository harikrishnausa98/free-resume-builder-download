import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

import SplitScreenLayout from './components/SplitScreenLayout';
import PersonalInfoForm from './components/PersonalInfoForm';
import SettingsPanel from './components/SettingsPanel';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import ResumePreview from './components/ResumePreview';
import SkillsForm from './components/SkillsForm';
import AuthModal from './components/AuthModal';
import LandingPage from './components/LandingPage';
import { useAuthStore } from './store/useAuthStore';
import { useResumeStore } from './store/useResumeStore';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './lib/firebase';

function App() {
  const resumePreviewRef = React.useRef();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const navigate = useNavigate();
  const initAuth = useAuthStore((state) => state.initAuth);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (typeof initAuth === 'function') {
      const unsubscribe = initAuth();
      return () => unsubscribe && unsubscribe();
    }
  }, [initAuth]);

  useEffect(() => {
    if (!user) return;

    let timeoutId;
    const debounceSave = (state) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const dataToSave = {
          personalInfo: state.personalInfo,
          workExperience: state.workExperience,
          education: state.education,
          skills: state.skills,
          settings: state.settings,
        };

        // Save directly to Firebase Firestore
        setDoc(doc(db, "resumes", user.uid), dataToSave, { merge: true })
          .catch(console.error);
      }, 1000); // Debounce requests by 1 second
    };

    const unsubscribe = useResumeStore.subscribe(debounceSave);

    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, [user]);

  const handleDownloadPdf = () => {
    const element = resumePreviewRef.current;
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
  };

  const editorContent = (
    <div className="space-y-6">
      <PersonalInfoForm />
      <WorkExperienceForm />
      <EducationForm />
      <SkillsForm />
    </div>
  );

  const previewContent = (
    <div className="flex flex-col w-full">
      <SettingsPanel />
      <ResumePreview ref={resumePreviewRef} />
    </div>
  );

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage 
              onCreateResume={() => navigate('/builder')} 
              onSignIn={() => setIsAuthModalOpen(true)} 
            />
          } 
        />
        <Route 
          path="/builder" 
          element={
            <SplitScreenLayout
              editorContent={editorContent}
              previewContent={previewContent}
              onDownloadPdf={handleDownloadPdf}
              onLoginClick={() => setIsAuthModalOpen(true)}
            />
          } 
        />
      </Routes>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default App;