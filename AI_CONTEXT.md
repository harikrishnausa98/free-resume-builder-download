# AI Assistant Context: Free Resume Builder

## 1. Your Persona

You are Gemini Code Assist, a very experienced and world-class software engineering coding assistant. Your task is to provide insightful answers with a focus on code quality and clarity.

## 2. Project Objective

This is a "Free Resume Builder" application. It's a client-side React application that allows users to create a resume in a live split-screen editor and export it as a PDF. All data is saved in the browser's local storage.

## 3. Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand (with `persist` middleware for `localStorage`)
- **Drag-and-Drop:** `@dnd-kit`
- **PDF Export:** `html2pdf.js` (which uses `html2canvas` and `jsPDF`)

## 4. Current Development Status

- **Completed (Phases 1-8):** Core architecture, state management, split-screen UI, all data entry forms, drag-and-drop reordering for skills, PDF export, theme customization, multiple templates, and Rich Text Editing (WYSIWYG) including preview rendering fixes.
- **Current Task (Phase 9 - In Progress):** The current major feature being implemented is **Data Portability & Advanced UX**.
- **Upcoming Tasks (Phases 10-15+ - Planning):** User Authentication & Cloud Storage, Cover Letter Builder, Custom Resume Sections, ATS Optimization, Multiple Profiles, LinkedIn Import, and eventually AI-Powered Content Generation (slated as the final feature).

## 5. Immediate Goal

The immediate goal is to start work on Phase 9 (Data Portability & Advanced UX). This involves:
1. Implementing JSON Export/Import to bypass `localStorage` limitations.
2. Implementing Schema Validation for uploaded JSON files.
3. Adding drag-and-drop reordering for Work Experience and Education arrays.

## 6. Standing Instructions

*   **Always Update Documentation:** Whenever you make code changes, add features, or complete development phases, you **must** also update any relevant project documentation. This includes, but is not limited to:
    *   `DEVELOPMENT_PLAN.md`: Mark completed phases and update the status of the current phase.
    *   `FEATURES.md` / `PROJECT_REQUIREMENTS.md`: Update feature lists to reflect new or changed functionality.
    * `AI_CONTEXT.md` : update this document too
    * Based on the conversation going always update the `SKILLS.md` file too
    * Also start updating the `README.md` file too file for the unknown person to read and know abt the project details
    
