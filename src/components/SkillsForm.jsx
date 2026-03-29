import React from 'react';
import { useResumeStore } from '../../useResumeStore';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function DragHandle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-gray-400 cursor-grab active:cursor-grabbing">
      <path d="M2 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function SortableSkillItem({ id, skill, onUpdate, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChange = (e) => {
    onUpdate(id, { name: e.target.value });
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3 bg-white p-1 rounded-md touch-none">
      <div {...attributes} {...listeners} className="p-2">
        <DragHandle />
      </div>
      <input
        type="text"
        value={skill.name || ''}
        onChange={handleChange}
        placeholder="e.g. React.js, Python, Project Management"
        className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => onRemove(id)}
        className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium shrink-0"
        title="Remove this skill"
      >
        ✕ Remove
      </button>
    </div>
  );
}

export default function SkillsForm() {
  const skills = useResumeStore((state) => state.skills);
  const addSkill = useResumeStore((state) => state.addSkill);
  const updateSkill = useResumeStore((state) => state.updateSkill);
  const removeSkill = useResumeStore((state) => state.removeSkill);
  const reorderSkills = useResumeStore((state) => state.reorderSkills);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = skills.findIndex((skill) => skill.id === active.id);
      const newIndex = skills.findIndex((skill) => skill.id === over.id);
      reorderSkills(oldIndex, newIndex);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        List your key skills, tools, and technologies.
      </p>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={skills} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {skills.map((skill) => (
              <SortableSkillItem key={skill.id} id={skill.id} skill={skill} onUpdate={updateSkill} onRemove={removeSkill} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={addSkill}
        className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        <span className="text-xl leading-none">+</span> Add skill
      </button>
    </div>
  );
}