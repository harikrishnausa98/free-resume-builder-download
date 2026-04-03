import { create } from 'zustand';
import { useResumeStore } from './useResumeStore';
import DOMPurify from 'dompurify';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  initAuth: () => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        set({ user: { uid: user.uid, email: user.email }, loading: false });
        
        try {
          const docRef = doc(db, "resumes", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const rawData = docSnap.data();
            const sanitizedData = {
              ...rawData,
              personalInfo: {
                ...rawData.personalInfo,
                summary: rawData.personalInfo?.summary ? DOMPurify.sanitize(rawData.personalInfo.summary) : ''
              },
              workExperience: (rawData.workExperience || []).map(exp => ({ ...exp, description: exp.description ? DOMPurify.sanitize(exp.description) : '' })),
              education: (rawData.education || []).map(edu => ({ ...edu, description: edu.description ? DOMPurify.sanitize(edu.description) : '' }))
            };
            useResumeStore.setState(sanitizedData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        set({ user: null, loading: false });
      }
    });
    return unsubscribe;
  },

  registerWithEmail: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await createUserWithEmailAndPassword(auth, email, password);
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  loginWithEmail: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await signInWithEmailAndPassword(auth, email, password);
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      set({ error: error.message });
    }
  },
  
  clearError: () => set({ error: null })
}));