import React from 'react';

export default function BoldTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#111827';

  return (
    <div className="w-full h-full p-10 bg-white text-gray-900" style={{ fontFamily: settings?.fontFamily || 'Inter' }}>
      <header className="mb-8 border-b-8 pb-6" style={{ borderColor: themeColor }}>
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2" style={{ color: themeColor }}>
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>
        <p className="text-2xl font-bold uppercase tracking-widest text-gray-500">{personalInfo.jobTitle || 'JOB TITLE'}</p>
        <div className="flex flex-wrap gap-4 mt-4 font-bold text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>
      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-md font-medium leading-relaxed whitespace-pre-line">{personalInfo.summary}</p>
        </section>
      )}
      {data.workExperience && data.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: themeColor }}>Experience</h2>
          <div className="space-y-6">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                <p className="text-md font-semibold text-gray-600 uppercase tracking-wider mb-2">{job.employer} // {job.startDate} - {job.endDate}</p>
                {job.description && <p className="text-sm font-medium leading-relaxed whitespace-pre-line">{job.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: themeColor }}>Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid">
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">{edu.school} // {edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: themeColor }}>Skills</h2>
          <p className="text-md font-bold leading-relaxed">{data.skills.map(s => s.name).join('  /  ')}</p>
        </section>
      )}
    </div>
  );
}