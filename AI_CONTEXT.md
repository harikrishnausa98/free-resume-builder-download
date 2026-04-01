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

- **Completed (Phases 1-7):** Core architecture, state management, split-screen UI, all data entry forms, PDF export, theme/typography customization, and multiple resume templates are complete.
- **Next Task (Phase 8 - Planning):** The next major feature to implement is **Rich Text Editing (WYSIWYG)**.

## 5. Immediate Goal

The immediate goal is to begin work on Phase 8. This involves:
1.  Replacing standard `<textarea>` inputs with a client-side Rich Text Editor (e.g., `react-quill` or `tiptap`).
2.  Providing a formatting toolbar (Bold, Italics, Bulleted/Numbered Lists).
3.  Updating the Live Preview to safely parse and render formatted HTML.

## 6. Standing Instructions

*   **Always Update Documentation:** Whenever you make code changes, add features, or complete development phases, you **must** also update any relevant project documentation. This includes, but is not limited to:
    *   `DEVELOPMENT_PLAN.md`: Mark completed phases and update the status of the current phase.
    *   `FEATURES.md` / `PROJECT_REQUIREMENTS.md`: Update feature lists to reflect new or changed functionality.
