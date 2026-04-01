import React from 'react';

export default function ModernTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Inter';

  return (
    <div className="w-full h-full p-10 text-gray-800" style={{ fontFamily: fontFamily }}>
      
      <header className="border-b-2 pb-6 mb-6" style={{ borderColor: themeColor }}>
        <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p 
          className="text-xl font-medium mt-1"
          style={{ color: themeColor }}
        >
          {personalInfo.jobTitle || 'Your Job Title'}
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1">✉️ {personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">📱 {personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">📍 {personalInfo.location}</span>
          )}
          {personalInfo.portfolioUrl && (
            <span className="flex items-center gap-1">🔗 {personalInfo.portfolioUrl}</span>
          )}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {data.workExperience && data.workExperience.length > 0 ? (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4 uppercase tracking-wide">
            Employment History
          </h2>
          
          <div className="space-y-5">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      {job.jobTitle}
                      {job.employer && <span className="font-normal text-gray-700"> at {job.employer}</span>}
                      {job.city && <span className="font-normal text-gray-500">, {job.city}</span>}
                    </h3>
                  </div>
                  <div 
                    className="text-sm font-medium whitespace-nowrap ml-4"
                    style={{ color: themeColor }}
                  >
                    {job.startDate} {job.startDate && job.endDate && '—'} {job.endDate}
                  </div>
                </div>
                {job.description && (
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2">
                    {job.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
            Employment History
          </h2>
          <p className="text-sm text-gray-400 italic">Work experience will appear here once added...</p>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4 uppercase tracking-wide">
            Education
          </h2>
          
          <div className="space-y-5">
            {data.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      {edu.degree}
                      {edu.school && <span className="font-normal text-gray-700"> at {edu.school}</span>}
                      {edu.city && <span className="font-normal text-gray-500">, {edu.city}</span>}
                    </h3>
                  </div>
                  <div 
                    className="text-sm font-medium whitespace-nowrap ml-4"
                    style={{ color: themeColor }}
                  >
                    {edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4 uppercase tracking-wide">
            Skills
          </h2>
          
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.skills.map((skill) => skill.name).join(' • ')}
          </p>
        </section>
      )}
    </div>
  );
}