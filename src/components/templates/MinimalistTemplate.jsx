import React from 'react';

export default function MinimalistTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Inter';

  return (
    <div className="w-full h-full p-12 text-gray-700 bg-white" style={{ fontFamily: fontFamily }}>
      <header className="mb-10">
        <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-medium" style={{ color: themeColor }}>
          {personalInfo.jobTitle || 'Your Job Title'}
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-xs tracking-wider uppercase text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-sm leading-loose text-gray-600 whitespace-pre-line">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {data.workExperience && data.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Experience</h2>
          <div className="space-y-6">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-base font-medium text-gray-900">{job.jobTitle} <span className="text-gray-500 font-normal">| {job.employer}</span></h3>
                  <span className="text-xs text-gray-400">{job.startDate} {job.startDate && job.endDate && '—'} {job.endDate}</span>
                </div>
                {job.description && <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600">{job.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid flex justify-between items-baseline">
                <div>
                  <h3 className="text-base font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-500">{edu.school}{edu.city ? `, ${edu.city}` : ''}</p>
                </div>
                <span className="text-xs text-gray-400">{edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Skills</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            {data.skills.map(s => s.name).join(' • ')}
          </p>
        </section>
      )}
    </div>
  );
}