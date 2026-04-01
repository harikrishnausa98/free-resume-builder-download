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

const templates = [
  { id: 'modern', name: 'Modern' },
  { id: 'classic', name: 'Classic' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'professional', name: 'Professional' },
  { id: 'creative', name: 'Creative' },
  { id: 'elegant', name: 'Elegant' },
  { id: 'compact', name: 'Compact' },
  { id: 'bold', name: 'Bold' },
  { id: 'executive', name: 'Executive' },
  { id: 'tech', name: 'Tech' },
];

const SettingsPanel = () => {
  const settings = useResumeStore((state) => state.settings) || {};
  const updateSettings = useResumeStore((state) => state.updateSettings);

  const currentTemplate = settings.templateId || 'modern';
  const currentTheme = settings.themeColor || '#3b82f6';
  const currentFont = settings.fontFamily || 'Inter, sans-serif';

  const handleThemeChange = (color) => {
    updateSettings({ themeColor: color });
  };

  const handleFontChange = (font) => {
    updateSettings({ fontFamily: font });
  };

  const handleTemplateChange = (templateId) => {
    updateSettings({ templateId: templateId });
  };

  return (
    <div className="bg-gray-50 p-6 border-b border-gray-200 shadow-sm mb-0 rounded-t-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-5">Resume Settings</h2>

      {/* Template Selection Section */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Layout Template</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateChange(template.id)}
              className={`p-3 border rounded-md text-center transition-colors font-medium ${
          currentTemplate === template.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {template.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
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
            currentTheme === theme.color
                    ? 'ring-2 ring-offset-2 ring-blue-500 border-white'
                    : 'border-transparent hover:border-gray-300'
                }`}
                style={{ backgroundColor: theme.color }}
              />
            ))}
          </div>
        </div>

        {/* Typography Section */}
        <div className="flex-1">
          <h3 className="text-md font-semibold text-gray-700 mb-3">Typography</h3>
          <div className="flex flex-wrap gap-3">
            {fonts.map((font) => (
              <label
                key={font.value}
                className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-300 transition-colors flex-1"
              >
                <input
                  type="radio"
                  name="fontFamily"
                  value={font.value}
            checked={currentFont === font.value}
                  onChange={() => handleFontChange(font.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span style={{ fontFamily: font.value }} className="text-sm font-medium whitespace-nowrap">
                  {font.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;