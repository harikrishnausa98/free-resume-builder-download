import React from 'react';
import { useResumeStore } from '../store/useResumeStore';

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
                    type="text"
                    name="startDate"
                    placeholder="MM/YYYY"
                    value={job.startDate}
                    onChange={(e) => handleChange(job.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    placeholder="Present"
                    value={job.endDate}
                    onChange={(e) => handleChange(job.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                <textarea
                  name="description"
                  value={job.description}
                  onChange={(e) => handleChange(job.id, e)}
                  rows="4"
                  placeholder="e.g. Created and implemented a new UI component library..."
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>
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