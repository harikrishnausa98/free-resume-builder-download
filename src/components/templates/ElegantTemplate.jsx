import React from 'react';

export default function ElegantTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Merriweather, serif';

  return (
    <div className="w-full h-full p-10 text-gray-800 bg-white" style={{ fontFamily: fontFamily }}>
      <header className="text-center pb-6 mb-6 border-b-[1px] border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-2">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-xl italic text-gray-600 mb-4" style={{ color: themeColor }}>{personalInfo.jobTitle || 'Your Job Title'}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 uppercase tracking-widest">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6 text-center">
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line italic max-w-2xl mx-auto">"{personalInfo.summary}"</p>
        </section>
      )}

      {data.workExperience && data.workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4 uppercase tracking-widest" style={{ color: themeColor }}>Experience</h2>
          <div className="space-y-6">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <h3 className="text-lg font-bold text-gray-900">{job.jobTitle}</h3>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500 uppercase tracking-wide">
                  <span className="font-semibold">{job.employer}{job.city ? `, ${job.city}` : ''}</span>
                  <span>{job.startDate} {job.startDate && job.endDate && '-'} {job.endDate}</span>
                </div>
                {job.description && <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">{job.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4 uppercase tracking-widest" style={{ color: themeColor }}>Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid text-center">
                <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{edu.school}{edu.city ? `, ${edu.city}` : ''}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-widest" style={{ color: themeColor }}>Skills</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {data.skills.map(s => s.name).join('  ·  ')}
          </p>
        </section>
      )}
    </div>
  );
}