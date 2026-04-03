import { create } from 'zustand';
import { auth, db } from '../lib/firebase';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useResumeStore } from './useResumeStore';
import DOMPurify from 'dompurify';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  initAuth: () => {
    return onAuthStateChanged(auth, async (user) => {
      set({ user, loading: false });
      if (user) {
        try {
          const docRef = doc(db, "resumes", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const rawData = docSnap.data();
            
            // Sanitize Rich Text fields before loading them into local state
            const sanitizedData = {
              ...rawData,
              personalInfo: {
                ...rawData.personalInfo,
                summary: rawData.personalInfo?.summary ? DOMPurify.sanitize(rawData.personalInfo.summary) : ''
              },
              workExperience: (rawData.workExperience || []).map(exp => ({
                ...exp,
                description: exp.description ? DOMPurify.sanitize(exp.description) : ''
              })),
              education: (rawData.education || []).map(edu => ({
                ...edu,
                description: edu.description ? DOMPurify.sanitize(edu.description) : ''
              }))
            };
            
            useResumeStore.setState(sanitizedData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });
  },

  loginWithGoogle: async () => {
    try {
      set({ error: null });
      const { googleProvider } = await import('../lib/firebase');
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      set({ error: error.message });
    }
  },

  loginWithLinkedIn: async () => {
     try {
      set({ error: null });
      const { linkedinProvider } = await import('../lib/firebase');
      await signInWithPopup(auth, linkedinProvider);
    } catch (error) {
      set({ error: error.message });
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  
  clearError: () => set({ error: null })
}));