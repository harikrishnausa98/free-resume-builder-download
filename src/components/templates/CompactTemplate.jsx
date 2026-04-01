import React from 'react';

export default function CompactTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Inter';

  return (
    <div className="w-full h-full p-6 text-gray-800 bg-white" style={{ fontFamily: fontFamily }}>
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex justify-between items-end border-b-2 pb-2 mt-1" style={{ borderColor: themeColor }}>
          <p className="text-lg font-medium" style={{ color: themeColor }}>{personalInfo.jobTitle || 'Your Job Title'}</p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-600 font-medium">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
          </div>
        </div>
      </header>
      {personalInfo.summary && (
        <section className="mb-4">
          <p className="text-xs leading-tight text-gray-800 whitespace-pre-line">{personalInfo.summary}</p>
        </section>
      )}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {data.workExperience && data.workExperience.length > 0 && (
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: themeColor }}>Experience</h2>
              <div className="space-y-3">
                {data.workExperience.map((job) => (
                  <div key={job.id} className="break-inside-avoid">
                    <h3 className="text-sm font-bold">{job.jobTitle} <span className="font-normal">| {job.employer}</span></h3>
                    <p className="text-xs text-gray-500 mb-1">{job.startDate} - {job.endDate}</p>
                    {job.description && <p className="text-xs leading-tight whitespace-pre-line text-gray-700">{job.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="col-span-1 border-l pl-4 border-gray-200">
          {data.skills && data.skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: themeColor }}>Skills</h2>
              <p className="text-xs leading-relaxed text-gray-700">{data.skills.map(s => s.name).join(', ')}</p>
            </section>
          )}
          {data.education && data.education.length > 0 && (
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: themeColor }}>Education</h2>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="break-inside-avoid text-xs"><h3 className="font-bold">{edu.degree}</h3><p className="text-gray-600">{edu.school}</p><p className="text-gray-500 mt-1">{edu.startDate} - {edu.endDate}</p></div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>);}