import React, { useState, useEffect } from 'react';

export default function SplitScreenLayout({ editorContent, previewContent, onDownloadPdf }) {
  const [leftWidth, setLeftWidth] = useState(50); // Starting width 50%
  const [isDragging, setIsDragging] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false); // Handles the preview button

  // Handle the drag resizing logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newLeftWidth = (e.clientX / window.innerWidth) * 100;
      // Keep the panel width between 20% and 80% of the screen
      if (newLeftWidth > 20 && newLeftWidth < 80) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans overflow-hidden">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shrink-0 z-20 shadow-sm">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">
          Resume.free
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            {isPreviewMode ? 'Edit Resume' : 'Preview'}
          </button>
          <button 
            onClick={onDownloadPdf}
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            Download PDF
          </button>
        </div>
      </header>

      {/* Ensure dragging doesn't highlight text accidentally */}
      <main className={`flex flex-1 overflow-hidden ${isDragging ? 'select-none' : ''}`}>
        
        {/* LEFT COLUMN: The Editor */}
        {!isPreviewMode && (
          <section 
            style={{ width: `${leftWidth}%` }}
            className="h-full overflow-y-auto bg-white shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)] z-10 custom-scrollbar shrink-0"
          >
            <div className="max-w-2xl mx-auto p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Build your resume</h1>
              {editorContent}
            </div>
          </section>
        )}

        {/* DRAG HANDLE: The movable divider */}
        {!isPreviewMode && (
          <div 
            onMouseDown={() => setIsDragging(true)}
            className="w-2 bg-gray-200 hover:bg-blue-400 cursor-col-resize z-20 transition-colors flex flex-col justify-center items-center shrink-0"
            title="Drag to resize"
          >
            <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
          </div>
        )}

        {/* RIGHT COLUMN: The Live Preview */}
        <section 
          style={{ width: isPreviewMode ? '100%' : `${100 - leftWidth}%` }}
          className="h-full overflow-auto bg-gray-100 custom-scrollbar"
        >
          {/* Using w-max solves the 'text hidden on the left' clipping bug */}
          <div className="w-max mx-auto p-10 flex justify-center">
            <div className="w-[794px] min-h-[1123px] bg-white shadow-xl rounded-sm ring-1 ring-gray-200 shrink-0">
              {previewContent}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}