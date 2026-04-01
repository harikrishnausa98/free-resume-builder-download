import React from 'react';

export default function ExecutiveTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';

  return (
    <div className="w-full h-full p-10 bg-white text-gray-800" style={{ fontFamily: settings?.fontFamily || 'Inter' }}>
      <header className="flex justify-between items-end border-b-4 pb-4 mb-8" style={{ borderColor: themeColor }}>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-xl font-medium mt-1" style={{ color: themeColor }}>{personalInfo.jobTitle || 'Your Job Title'}</p>
        </div>
        <div className="text-right text-sm text-gray-600 space-y-1 font-medium">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </header>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 border-r border-gray-200 pr-6">
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: themeColor }}>Expertise</h2>
              <ul className="text-sm text-gray-700 space-y-2 font-medium">{data.skills.map(s => <li key={s.id}>{s.name}</li>)}</ul>
            </section>
          )}
          {data.education && data.education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: themeColor }}>Education</h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="text-sm"><h3 className="font-bold text-gray-900">{edu.degree}</h3><p className="text-gray-600">{edu.school}</p><p className="text-xs text-gray-500 mt-1 font-medium">{edu.startDate} - {edu.endDate}</p></div>
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="col-span-3">
          {personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: themeColor }}>Profile</h2>
              <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{personalInfo.summary}</p>
            </section>
          )}
          {data.workExperience && data.workExperience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: themeColor }}>Experience</h2>
              <div className="space-y-6">
                {data.workExperience.map((job) => (
                  <div key={job.id} className="break-inside-avoid">
                    <h3 className="text-lg font-bold text-gray-900">{job.jobTitle}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-2">{job.employer} | {job.startDate} - {job.endDate}</p>
                    {job.description && <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">{job.description}</p>}
                  </div>))}
              </div>
            </section>
          )}
        </div>
      </div></div>);}