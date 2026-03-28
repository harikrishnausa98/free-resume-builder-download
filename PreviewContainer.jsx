import React from 'react';
import { useResumeStore } from './useResumeStore';
import ModernTemplate from './ModernTemplate';

export default function PreviewContainer({ printRef }) {
  const resumeData = useResumeStore((state) => state);

  return (
    <div className="w-full min-h-full bg-white relative" ref={printRef}>
      <ModernTemplate data={resumeData} />
    </div>
  );
}