import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import ModernTemplate from './templates/ModernTemplate';

export default function PreviewContainer({ printRef }) {
  const resumeData = useResumeStore((state) => state);

  return (
    <div className="w-full min-h-full bg-white relative" ref={printRef}>
      <ModernTemplate data={resumeData} />
    </div>
  );
}