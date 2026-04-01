import React from 'react';
import html2pdf from 'html2pdf.js';

import SplitScreenLayout from './SplitScreenLayout';
import PersonalInfoForm from './PersonalInfoForm';
import SettingsPanel from './SettingsPanel';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import ResumePreview from './ResumePreview';
import SkillsForm from './SkillsForm';

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
      <SettingsPanel />
      <PersonalInfoForm />
      <WorkExperienceForm />
      <EducationForm />
      <SkillsForm />
    </div>
  );

  const previewContent = <ResumePreview ref={resumePreviewRef} />;

  return (
    <SplitScreenLayout
      editorContent={editorContent}
      previewContent={previewContent}
      onDownloadPdf={handleDownloadPdf}
    />
  );
}

export default App;