import React from 'react';

export default function ProfessionalTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Inter';

  const HeaderComponent = ({ title }) => (
    <h2 className="text-md font-bold text-white px-3 py-1 mb-4 uppercase tracking-wide" style={{ backgroundColor: themeColor }}>
      {title}
    </h2>
  );

  return (
    <div className="w-full h-full p-10 text-gray-800 bg-white" style={{ fontFamily: fontFamily }}>
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900 mb-1">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-lg font-medium text-gray-600 mb-3">{personalInfo.jobTitle || 'Your Job Title'}</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <HeaderComponent title="Professional Summary" />
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{personalInfo.summary}</p>
        </section>
      )}

      {data.workExperience && data.workExperience.length > 0 && (
        <section className="mb-6">
          <HeaderComponent title="Experience" />
          <div className="space-y-5">
            {data.workExperience.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-gray-900">{job.jobTitle}</h3>
                  <span className="text-sm font-bold" style={{ color: themeColor }}>{job.startDate} {job.startDate && job.endDate && '-'} {job.endDate}</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-2">{job.employer}{job.city ? `, ${job.city}` : ''}</p>
                {job.description && <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">{job.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <HeaderComponent title="Education" />
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid flex justify-between items-baseline">
                <div>
                  <h3 className="text-md font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 italic">{edu.school}{edu.city ? `, ${edu.city}` : ''}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: themeColor }}>{edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section><HeaderComponent title="Skills" /><p className="text-sm leading-relaxed text-gray-700">{data.skills.map(s => s.name).join(', ')}</p></section>
      )}
    </div>
  );}