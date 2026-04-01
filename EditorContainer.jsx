import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './src/components/SkillsForm';
import SettingsPanel from './src/components/SettingsPanel';

export default function EditorContainer() {
  return (
    <div className="space-y-6 pb-20">
      <SettingsPanel />
      <PersonalInfoForm />
      <WorkExperienceForm />
      <EducationForm />
      <SkillsForm />
    </div>
  );
}