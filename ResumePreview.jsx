import React from 'react';
import { useResumeStore } from './useResumeStore';
import ModernTemplate from './ModernTemplate';
import ClassicTemplate from './ClassicTemplate';

const ResumePreview = React.forwardRef((props, ref) => {
  const data = useResumeStore((state) => state);
  const templateId = data.settings?.templateId || 'modern';

  return (
    <div ref={ref} className="w-full min-h-full bg-white">
      {templateId === 'modern' && <ModernTemplate data={data} />}
      {templateId === 'classic' && <ClassicTemplate data={data} />}
    </div>
  );
});

export default ResumePreview;