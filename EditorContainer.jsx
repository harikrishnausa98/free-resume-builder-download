import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';

export default function EditorContainer() {
  return (
    <div className="space-y-6 pb-20">
      <PersonalInfoForm />
      <WorkExperienceForm />
      <EducationForm />
    </div>
  );
}