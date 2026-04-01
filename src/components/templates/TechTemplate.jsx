import React from 'react';

export default function TechTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';

  const SectionTitle = ({ title }) => (
    <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 pb-1 uppercase tracking-widest" style={{ borderColor: themeColor }}>
      <span style={{ color: themeColor }}>&gt; </span>{title}
    </h2>
  );

  return (
    <div className="w-full h-full p-10 bg-white text-gray-800" style={{ fontFamily: settings?.fontFamily || 'Roboto, sans-serif' }}>
      <header className="mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-widest text-gray-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-mono font-semibold" style={{ color: themeColor }}>
          {personalInfo.jobTitle ? `<${personalInfo.jobTitle}/>` : '<Your Title/>'}
        </p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm font-mono text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
        </div>
      </header>
      {personalInfo.summary && (
        <section className="mb-8">
          <SectionTitle title="Summary" />
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{personalInfo.summary}</p>
        </section>
      )}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-8">
          <SectionTitle title="Technologies" />
          <p className="text-sm font-mono font-medium leading-relaxed" style={{ color: themeColor }}>
            {data.skills.map(s => s.name).join(' // ')}
          </p>
        </section>
      )}
      {data.workExperience && data.workExperience.length > 0 && (
        <section className="mb-8">
          <SectionTitle title="Experience" />
          <div className="space-y-6">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex justify-between items-end mb-1">
                  <h3 className="text-lg font-bold">{job.jobTitle} <span className="text-gray-500 font-medium">@ {job.employer}</span></h3>
                  <span className="text-sm font-mono text-gray-500">{job.startDate} - {job.endDate}</span>
                </div>
                {job.description && <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 mt-2">{job.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );}