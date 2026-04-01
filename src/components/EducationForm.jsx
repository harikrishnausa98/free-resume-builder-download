import React from 'react';
import { useResumeStore } from '../store/useResumeStore';

export default function EducationForm() {
  const education = useResumeStore((state) => state.education);
  const addEducation = useResumeStore((state) => state.addEducation);
  const updateEducation = useResumeStore((state) => state.updateEducation);
  const removeEducation = useResumeStore((state) => state.removeEducation);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, { [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        A varied education on your resume sums up the value that your learnings and background will bring to job.
      </p>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="p-5 border border-gray-200 rounded-md bg-gray-50 relative group">
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              title="Delete this education"
            >
              ✕ Remove
            </button>

            <h3 className="text-md font-semibold text-gray-700 mb-4">
              Education #{index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                <input
                  type="text"
                  name="school"
                  value={edu.school}
                  onChange={(e) => handleChange(edu.id, e)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, e)}
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
                    value={edu.startDate}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    placeholder="Present"
                    value={edu.endDate}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={edu.city}
                  onChange={(e) => handleChange(edu.id, e)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={edu.description}
                  onChange={(e) => handleChange(edu.id, e)}
                  rows="4"
                  placeholder="e.g. Graduated with High Honors..."
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addEducation}
        className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        <span className="text-xl leading-none">+</span> Add education
      </button>
    </div>
  );
}