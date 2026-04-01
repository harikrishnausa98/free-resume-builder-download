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

- **Completed (Phases 1-6):** Core architecture, state management, split-screen UI, all data entry forms (including skills with D&D reordering), PDF export, and theme/typography customization are complete.
- **Next Task (Phase 7 - Planning):** The next major feature to implement is **Multiple Resume Templates**.

## 5. Immediate Goal

The immediate goal is to begin work on Phase 7. This involves:
1.  Refactoring the `LivePreview` component to act as a template engine.
2.  Creating at least two distinct resume layout components.
3.  Adding a UI for template selection in the settings panel.
