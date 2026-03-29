import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useResumeStore = create(
  persist(
    (set) => ({
      personalInfo: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        portfolioUrl: '',
        summary: ''
      },
      workExperience: [],
      education: [],
      skills: [],
      settings: {
        templateId: 'modern',
        themeColor: '#3b82f6',
        fontFamily: 'Inter'
      },

      updatePersonalInfo: (data) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...data }
        })),

      addWorkExperience: () =>
        set((state) => ({
          workExperience: [
            ...state.workExperience,
            {
              id: crypto.randomUUID(),
              jobTitle: '',
              employer: '',
              city: '',
              startDate: '',
              endDate: '',
              isCurrent: false,
              description: ''
            }
          ]
        })),

      updateWorkExperience: (id, data) =>
        set((state) => ({
          workExperience: state.workExperience.map((job) =>
            job.id === id ? { ...job, ...data } : job
          )
        })),

      removeWorkExperience: (id) =>
        set((state) => ({
          workExperience: state.workExperience.filter((job) => job.id !== id)
        })),

      addEducation: () =>
        set((state) => ({
          education: [
            ...state.education,
            {
              id: crypto.randomUUID(),
              school: '',
              degree: '',
              startDate: '',
              endDate: '',
              city: '',
              description: ''
            }
          ]
        })),

      updateEducation: (id, data) =>
        set((state) => ({
          education: state.education.map((edu) =>
            edu.id === id ? { ...edu, ...data } : edu
          )
        })),

      removeEducation: (id) =>
        set((state) => ({
          education: state.education.filter((edu) => edu.id !== id)
        })),

      addSkill: () =>
        set((state) => ({
          skills: [
            ...state.skills,
            { id: crypto.randomUUID(), name: '' }
          ]
        })),

      updateSkill: (id, data) =>
        set((state) => ({
          skills: state.skills.map((skill) =>
            skill.id === id ? { ...skill, ...data } : skill
          )
        })),

      removeSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((skill) => skill.id !== id)
        })),

      reorderSkills: (startIndex, endIndex) =>
        set((state) => {
          const result = Array.from(state.skills);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
          return { skills: result };
        }),

      updateSettings: (data) =>
        set((state) => ({
          settings: { ...state.settings, ...data }
        })),
    }),
    {
      name: 'resume-builder-data',
    }
  )
);