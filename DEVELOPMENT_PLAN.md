# Development Phases & Feature Plan

A strict, step-by-step development roadmap focusing on feature rollout, tech stack utilization, and necessary development tasks.

## Phase 1: Project Initialization & Architecture (✅ Completed)
* **Focus:** Set up the core environment and build tools.
* **Tech Stack:** React, Vite, Tailwind CSS.
* **Action Items:**
  * [x] Scaffold React project via Vite.
  * [x] Configure Tailwind CSS for utility-first styling.
  * [x] Define global CSS variables (custom scrollbars, base typography).

## Phase 2: Global State & Data Persistence (✅ Completed)
* **Focus:** Establish the data layer to hold user input without a backend.
* **Tech Stack:** Zustand, Browser `localStorage`.
* **Action Items:**
  * [x] Create the `useResumeStore` using Zustand.
  * [x] Define data schemas: Personal Info, Work Experience, Education, Skills.
  * [x] Apply Zustand's `persist` middleware to save progress automatically on keystrokes.

## Phase 3: Interactive Workspace Layout (✅ Completed)
* **Focus:** Build the split-screen editor UI.
* **Tech Stack:** React Hooks (`useState`, `useEffect`, `useRef`), DOM Event Listeners.
* **Action Items:**
  * [x] Develop `SplitScreenLayout.jsx` with Left (Editor) and Right (Preview) panels.
  * [x] Implement the draggable resizer handle (mouse tracking constraints between 20% and 80% width).
  * [x] Build the Header with the "Preview" toggle and "Download PDF" buttons.

## Phase 4: Form Components (Data Entry) (✅ Completed)
* **Focus:** Build the UI for users to input their data.
* **Action Items:**
  * [x] Create static input forms (Personal Details).
  * [x] Create dynamic array-based forms (Employment, Education, Skills) with "Add", "Update", and "Remove" capabilities.

## Phase 4.5: Drag-and-Drop Reordering (Skills) (✅ Completed)
* **Focus:** Allow users to reorder their skills via drag-and-drop.
* **Tech Stack:** `@dnd-kit/core`, `@dnd-kit/sortable`.
* **Action Items:**
  * [x] Add `reorderSkills` action to the Zustand store.
  * [x] Integrate Dnd-Kit into the `SkillsForm` component.

## Phase 5: Live Template & Export Engine (✅ Completed)
* **Focus:** Real-time rendering and document generation.
* **Action Items:**
  * [x] Build the visual Resume Preview component mapping directly to the Zustand store.
  * [x] Integrate client-side PDF generation (e.g., using `html2canvas` and `jsPDF`) to capture the preview DOM and download it.

## Phase 6: Theme & Typography Customization (⏳ Planning)
* **Focus:** Enable users to personalize the visual appearance of their resume.
* **Action Items:**
  * [ ] Build a Settings Panel UI to pick primary accent colors and professional web fonts.
  * [ ] Bind `themeColor` and `fontFamily` from the Zustand store to the Live Preview.
  * [ ] Ensure settings are persisted to `localStorage` via Zustand.

## Phase 7: Multiple Resume Templates (⏳ Planning)
* **Focus:** Introduce distinct structural layouts for the resume.
* **Action Items:**
  * [ ] Refactor the Live Preview component into a Template Engine based on a `templateId`.
  * [ ] Create at least two distinct resume layouts (e.g., classic single-column, modern two-column).
  * [ ] Add a visual template selector UI in the Settings panel.

## Phase 8: Rich Text Editing (WYSIWYG) (⏳ Planning)
* **Focus:** Enhance text descriptions with professional formatting.
* **Action Items:**
  * [ ] Replace standard `<textarea>` inputs with a client-side Rich Text Editor (e.g., `react-quill` or `tiptap`).
  * [ ] Provide a formatting toolbar (Bold, Italics, Bulleted/Numbered Lists).
  * [ ] Update Live Preview to safely parse and render formatted HTML.

## Phase 9: Data Portability & Advanced UX (⏳ Planning)
* **Focus:** Allow data portability and seamless data entry reordering.
* **Action Items:**
  * [ ] Implement JSON Export/Import to bypass `localStorage` limitations.
  * [ ] Implement Schema Validation for uploaded JSON files.
  * [ ] Add drag-and-drop reordering for Work Experience and Education arrays.

## Phase 10: User Authentication & Cloud Storage (⏳ Planning)
* **Focus:** Transition to a cloud-synced platform.
* **Action Items:**
  * [ ] Implement secure user registration and login using a BaaS (e.g., Firebase, Supabase).
  * [ ] Sync local Zustand store data with the cloud database.
  * [ ] Enforce Row Level Security (RLS) for data privacy.
  * [ ] Implement data encryption for PII and advanced XSS protection.