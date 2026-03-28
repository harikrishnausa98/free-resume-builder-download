import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import SplitScreenLayout from './SplitScreenLayout';
import EditorContainer from './EditorContainer';
import PreviewContainer from './PreviewContainer';

function App() {
  const resumeRef = useRef();

  const handleDownloadPdf = () => {
    const element = resumeRef.current;
    const opt = {
      margin:       0,
      filename:     'My_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <SplitScreenLayout 
      editorContent={<EditorContainer />} 
      previewContent={<PreviewContainer printRef={resumeRef} />}
      onDownloadPdf={handleDownloadPdf}
    />
  );
}

export default App;