import React from 'react';
import { useResumeStore } from '../store/useResumeStore';

const themes = [
  { name: 'Blue', color: '#3b82f6' },
  { name: 'Green', color: '#10b981' },
  { name: 'Dark Gray', color: '#374151' },
  { name: 'Purple', color: '#8b5cf6' },
  { name: 'Red', color: '#ef4444' },
];

const fonts = [
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Merriweather', value: 'Merriweather, serif' },
];

const SettingsPanel = () => {
  // Safely access settings and updateSettings, providing default values
  // to prevent crashes if they are not yet defined in the store.
  const settings = useResumeStore((state) => state.settings) || {};
  const updateSettings = useResumeStore((state) => state.updateSettings);

  const handleThemeChange = (color) => {
    if (updateSettings) {
      updateSettings({ themeColor: color });
    }
  };

  const handleFontChange = (font) => {
    if (updateSettings) {
      updateSettings({ fontFamily: font });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">Theme & Typography</h2>

      {/* Theme Color Section */}
      <div>
        <h3 className="text-md font-semibold text-gray-700 mb-3">Theme Color</h3>
        <div className="flex gap-3">
          {themes.map((theme) => (
            <button
              key={theme.name}
              title={theme.name}
              onClick={() => handleThemeChange(theme.color)}
              className={`w-8 h-8 rounded-full transition-all border-2 ${
                settings.themeColor === theme.color
                  ? 'ring-2 ring-offset-2 ring-blue-500 border-white'
                  : 'border-transparent hover:border-gray-300'
              }`}
              style={{ backgroundColor: theme.color }}
            />
          ))}
        </div>
      </div>

      {/* Typography Section */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Typography</h3>
        <div className="space-y-2">
          {fonts.map((font) => (
            <label
              key={font.value}
              className="flex items-center gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-300 transition-colors"
            >
              <input
                type="radio"
                name="fontFamily"
                value={font.value}
                checked={settings.fontFamily === font.value}
                onChange={() => handleFontChange(font.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span style={{ fontFamily: font.value }} className="text-lg">
                {font.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;