import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import CompactTemplate from './templates/CompactTemplate';
import BoldTemplate from './templates/BoldTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import TechTemplate from './templates/TechTemplate';

const ResumePreview = React.forwardRef((props, ref) => {
  const data = useResumeStore((state) => state);
  const templateId = data.settings?.templateId || 'modern';

  return (
    <div ref={ref} className="w-full min-h-full bg-white">
      {templateId === 'modern' && <ModernTemplate data={data} />}
      {templateId === 'classic' && <ClassicTemplate data={data} />}
      {templateId === 'minimalist' && <MinimalistTemplate data={data} />}
      {templateId === 'professional' && <ProfessionalTemplate data={data} />}
      {templateId === 'creative' && <CreativeTemplate data={data} />}
      {templateId === 'elegant' && <ElegantTemplate data={data} />}
      {templateId === 'compact' && <CompactTemplate data={data} />}
      {templateId === 'bold' && <BoldTemplate data={data} />}
      {templateId === 'executive' && <ExecutiveTemplate data={data} />}
      {templateId === 'tech' && <TechTemplate data={data} />}
    </div>
  );
});

export default ResumePreview;