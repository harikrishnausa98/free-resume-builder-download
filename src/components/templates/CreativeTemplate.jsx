import React from 'react';

export default function CreativeTemplate({ data }) {
  const { personalInfo, settings } = data;
  const themeColor = settings?.themeColor || '#3b82f6';
  const fontFamily = settings?.fontFamily || 'Inter';

  return (
    <div className="w-full h-full text-gray-800 bg-white" style={{ fontFamily: fontFamily }}>
      <header className="p-10 mb-6 text-white" style={{ backgroundColor: themeColor }}>
        <h1 className="text-5xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-xl font-medium opacity-90">{personalInfo.jobTitle || 'Your Job Title'}</p>
        <div className="flex flex-wrap gap-4 mt-6 text-sm opacity-80 font-medium">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.portfolioUrl && <span>{personalInfo.portfolioUrl}</span>}
        </div>
      </header>

      <div className="px-10 pb-10">
        {personalInfo.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: themeColor }}>About Me</h2>
            <div 
              className="text-sm leading-relaxed text-gray-700 quill-content"
              dangerouslySetInnerHTML={{ __html: personalInfo.summary }}
            />
          </section>
        )}

        {data.workExperience && data.workExperience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: themeColor }}>Experience</h2>
            <div className="space-y-6">
              {data.workExperience.map((job) => (
                <div key={job.id} className="break-inside-avoid relative pl-4 border-l-2" style={{ borderColor: themeColor }}>
                  <div className="absolute w-2 h-2 rounded-full -left-[5px] top-1.5" style={{ backgroundColor: themeColor }}></div>
                  <h3 className="text-lg font-bold text-gray-900">{job.jobTitle}</h3>
                  <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                    <span className="font-semibold">{job.employer}{job.city ? `, ${job.city}` : ''}</span>
                    <span className="italic">{job.startDate} {job.startDate && job.endDate && '-'} {job.endDate}</span>
                  </div>
                  {job.description && (
                    <div 
                      className="text-sm leading-relaxed text-gray-700 quill-content"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: themeColor }}>Education</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="break-inside-avoid pl-4 border-l-2" style={{ borderColor: themeColor }}>
                  <h3 className="text-md font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                    <span>{edu.school}{edu.city ? `, ${edu.city}` : ''}</span>
                    <span className="italic">{edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: themeColor }}>Expertise</h2>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">{data.skills.map(s => s.name).join(' | ')}</p>
          </section>
        )}
      </div>
    </div>);}