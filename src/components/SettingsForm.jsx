import React from 'react';
import { useResumeStore } from '../store/useResumeStore';

const THEME_COLORS = [
  { name: 'Blue', color: '#3b82f6' },
  { name: 'Green', color: '#22c55e' },
  { name: 'Dark Gray', color: '#4b5563' },
];

const FONT_FAMILIES = [
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Merriweather', value: 'Merriweather, serif' },
];

export function SettingsForm() {
  const settings = useResumeStore((state) => state.settings);
  const updateSettings = useResumeStore((state) => state.updateSettings);

  const handleThemeChange = (color) => {
    updateSettings({ themeColor: color });
  };

  const handleFontChange = (e) => {
    updateSettings({ fontFamily: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">Theme & Typography</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
        <div className="flex gap-3">
          {THEME_COLORS.map(({ name, color }) => (
            <button
              key={name}
              type="button"
              title={name}
              onClick={() => handleThemeChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                settings.themeColor === color
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-transparent hover:border-gray-400'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="font-family" className="block text-sm font-medium text-gray-700 mb-1">
          Font Family
        </label>
        <select
          id="font-family"
          name="fontFamily"
          value={settings.fontFamily}
          onChange={handleFontChange}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          {FONT_FAMILIES.map(({ name, value }) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}