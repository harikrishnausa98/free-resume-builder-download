import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { auth } from '../lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function AuthModal({ isOpen, onClose }) {
  const { loginWithGoogle, loginWithLinkedIn, error, clearError } = useAuthStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    if (!window.recaptchaVerifier && isOpen) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = async (provider) => {
    if (provider === 'google') {
      await loginWithGoogle();
    } else if (provider === 'linkedin') {
      await loginWithLinkedIn();
    }
    onClose();
  };

  const handleSendCode = async () => {
    try {
      clearError();
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
    } catch (err) {
      useAuthStore.setState({ error: err.message });
    }
  };

  const handleVerifyCode = async () => {
    try {
      clearError();
      await confirmationResult.confirm(verificationCode);
      onClose();
    } catch (err) {
      useAuthStore.setState({ error: err.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full relative">
        <button 
          onClick={() => { clearError(); onClose(); }} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In / Register</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <div className="space-y-4">
          <button 
            onClick={() => handleLogin('google')}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          
          <button 
            onClick={() => handleLogin('linkedin')}
            className="w-full flex items-center justify-center gap-3 bg-[#0A66C2] text-white px-4 py-2 rounded-md hover:bg-[#004182] transition-colors font-medium shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter invert" />
            Continue with LinkedIn
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or phone</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {!confirmationResult ? (
            <div className="space-y-2">
              <input 
                type="tel" 
                placeholder="+1 234 567 8900" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                onClick={handleSendCode}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors font-medium"
              >
                Send Code
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder="123456" 
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                onClick={handleVerifyCode}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Verify & Login
              </button>
            </div>
          )}
          <div id="recaptcha-container"></div>
        </div>
        <p className="mt-6 text-xs text-center text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}