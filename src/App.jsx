import React from 'react';
import html2pdf from 'html2pdf.js';

import SplitScreenLayout from './components/SplitScreenLayout';
import PersonalInfoForm from './components/PersonalInfoForm';
import SettingsPanel from './components/SettingsPanel';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import ResumePreview from './components/ResumePreview';
import SkillsForm from './components/SkillsForm';

function App() {
  const resumePreviewRef = React.useRef();

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
    <SplitScreenLayout
      editorContent={editorContent}
      previewContent={previewContent}
      onDownloadPdf={handleDownloadPdf}
    />
  );
}

export default App;