import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function WorkExperienceForm() {
  const workExperience = useResumeStore((state) => state.workExperience);
  const addWorkExperience = useResumeStore((state) => state.addWorkExperience);
  const updateWorkExperience = useResumeStore((state) => state.updateWorkExperience);
  const removeWorkExperience = useResumeStore((state) => state.removeWorkExperience);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateWorkExperience(id, { [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Employment History</h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible.
      </p>

      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={job.id} className="p-5 border border-gray-200 rounded-md bg-gray-50 relative group">
            <button
              onClick={() => removeWorkExperience(job.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              title="Delete this job"
            >
              ✕ Remove
            </button>

            <h3 className="text-md font-semibold text-gray-700 mb-4">
              Job #{index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={job.jobTitle}
                  onChange={(e) => handleChange(job.id, e)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer</label>
                <input
                  type="text"
                  name="employer"
                  value={job.employer}
                  onChange={(e) => handleChange(job.id, e)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="month"
                    name="startDate"
                    value={job.startDate}
                    onChange={(e) => handleChange(job.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type={job.isCurrent ? "text" : "month"}
                    name="endDate"
                    value={job.endDate}
                    disabled={job.isCurrent}
                    onChange={(e) => handleChange(job.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                  <div className="flex items-center mt-2">
                    <input 
                      type="checkbox" 
                      id={`isCurrent-${job.id}`}
                      checked={job.isCurrent || false}
                      onChange={(e) => updateWorkExperience(job.id, { 
                        isCurrent: e.target.checked, 
                        endDate: e.target.checked ? 'Present' : '' 
                      })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`isCurrent-${job.id}`} className="ml-2 block text-sm text-gray-900">
                      I currently work here
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={job.city}
                  onChange={(e) => handleChange(job.id, e)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <ReactQuill
                  theme="snow"
                  value={job.description}
                  onChange={(value) => updateWorkExperience(job.id, { description: value })}
                  placeholder="e.g. Created and implemented a new UI component library..."
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addWorkExperience}
        className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        <span className="text-xl leading-none">+</span> Add employment
      </button>
    </div>
  );
}