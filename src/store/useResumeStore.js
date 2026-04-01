import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    portfolioUrl: '',
    summary: '',
  },
  workExperience: [],
  education: [],
  skills: [],
  settings: {
    themeColor: '#3b82f6', // Default to blue
    fontFamily: 'Inter, sans-serif', // Default to Inter
    templateId: 'modern',
  },
};

export const useResumeStore = create(
  persist(
    (set) => ({
      ...initialState,
      updatePersonalInfo: (info) =>
        set((state) => ({ personalInfo: { ...state.personalInfo, ...info } })),
      addWorkExperience: () =>
        set((state) => ({
          workExperience: [
            ...state.workExperience,
            { id: crypto.randomUUID(), jobTitle: '', employer: '', city: '', startDate: '', endDate: '', isCurrent: false, description: '' },
          ],
        })),
      updateWorkExperience: (id, data) =>
        set((state) => ({
          workExperience: state.workExperience.map((exp) => (exp.id === id ? { ...exp, ...data } : exp)),
        })),
      removeWorkExperience: (id) =>
        set((state) => ({
          workExperience: state.workExperience.filter((exp) => exp.id !== id),
        })),
      addEducation: () =>
        set((state) => ({
          education: [
            ...state.education,
            { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '', city: '', description: '' },
          ],
        })),
      updateEducation: (id, data) =>
        set((state) => ({
          education: state.education.map((edu) => (edu.id === id ? { ...edu, ...data } : edu)),
        })),
      removeEducation: (id) =>
        set((state) => ({ education: state.education.filter((edu) => edu.id !== id) })),
      addSkill: () =>
        set((state) => ({
          skills: [...state.skills, { id: crypto.randomUUID(), name: '' }],
        })),
      updateSkill: (id, data) =>
        set((state) => ({
          skills: state.skills.map((skill) => (skill.id === id ? { ...skill, ...data } : skill)),
        })),
      removeSkill: (id) => set((state) => ({ skills: state.skills.filter((skill) => skill.id !== id) })),
      reorderSkills: (oldIndex, newIndex) =>
        set((state) => {
          const newSkills = Array.from(state.skills);
          const [moved] = newSkills.splice(oldIndex, 1);
          newSkills.splice(newIndex, 0, moved);
          return { skills: newSkills };
        }),
      updateSettings: (newSettings) =>
        set((state) => ({ settings: { ...state.settings, ...newSettings } })),
    }),
    {
      name: 'resume-builder-data',
      storage: createJSONStorage(() => localStorage),
    }
  )
);