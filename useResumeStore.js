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