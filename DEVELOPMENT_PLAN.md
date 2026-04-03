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

## Phase 6: Theme & Typography Customization (✅ Completed)
* **Focus:** Enable users to personalize the visual appearance of their resume.
* **Action Items:**
  * [x] Build a Settings Panel UI to pick primary accent colors and professional web fonts.
  * [x] Bind `themeColor` and `fontFamily` from the Zustand store to the Live Preview.
  * [x] Ensure settings are persisted to `localStorage` via Zustand.

## Phase 7: Multiple Resume Templates (✅ Completed)
* **Focus:** Introduce distinct structural layouts for the resume.
* **Action Items:**
  * [x] Refactor the Live Preview component into a Template Engine based on a `templateId`.
  * [x] Create at least two distinct resume layouts (e.g., classic single-column, modern two-column).
  * [x] Add a visual template selector UI in the Settings panel.

## Phase 8: Rich Text Editing (WYSIWYG) (✅ Completed)
* **Focus:** Enhance text descriptions with professional formatting.
* **Tech Stack:** `react-quill`
* **Action Items:**
  * [x] Replace standard `<textarea>` inputs with a client-side Rich Text Editor (e.g., `react-quill` or `tiptap`).
  * [x] Provide a formatting toolbar (Bold, Italics, Bulleted/Numbered Lists).
  * [x] Update Live Preview to safely parse and render formatted HTML.

## Phase 9: Data Portability & Advanced UX (⏳ In Progress)
* **Focus:** Allow data portability and seamless data entry reordering.
* **Action Items:**
  * [ ] Implement JSON Export/Import to bypass `localStorage` limitations.
  * [ ] Implement Schema Validation for uploaded JSON files.
  * [ ] Add drag-and-drop reordering for Work Experience and Education arrays.

## Phase 10: User Authentication & Cloud Storage (✅ Completed)
* **Focus:** Transition to a cloud-synced platform.
* **Action Items:**
  * [x] **Authentication:** Implement Firebase Authentication supporting Email/Password, Google (Gmail) OAuth, LinkedIn OAuth, and Phone Number login.
  * [x] **Database Design:** Structure Firestore documents to cleanly store user profiles and their resume data.
  * [x] **Cloud Sync:** Create a sync mechanism between the local Zustand store and Firestore (e.g., auto-save to cloud when authenticated, fetch on login).
  * [x] **Security Rules:** Write strict Firebase Security Rules to ensure users can only read, update, and delete their own documents.
  * [x] **Data Privacy & Security:** Ensure PII is handled securely and maintain strict XSS sanitization (via DOMPurify) for all cloud-retrieved data.

## Phase 11: Cover Letter Builder (⏳ Planning)
* **Focus:** Expand the application to generate theme-matching cover letters.
* **Action Items:**
  * [ ] Add a "Cover Letter" toggle/tab in the main UI to switch editor modes.
  * [ ] Create a Zustand store slice for Cover Letter state (Sender, Recipient, Body, Date).
  * [ ] Build Cover Letter data entry form components.
  * [ ] Build Cover Letter Live Preview component utilizing the global theme/typography settings.
  * [ ] Update PDF export engine to support standalone or combined (Resume + Cover Letter) PDF generation.

## Phase 12: Custom Resume Sections (⏳ Planning)
* **Focus:** Allow users to create, manage, and reorder custom resume sections.
* **Action Items:**
  * [ ] Expand Zustand store to support dynamic custom sections (list or text-based).
  * [ ] Build a UI to add, name, and delete custom sections.
  * [ ] Create dynamic form components for data entry within custom sections.
  * [ ] Implement drag-and-drop (`@dnd-kit`) to reorder the layout of all sections globally.
  * [ ] Update all templates to render custom sections dynamically based on user-defined order.

## Phase 13: ATS Optimization & Job Match Scoring (⏳ Planning)
* **Focus:** Help users tailor their resume to specific job descriptions.
* **Action Items:**
  * [ ] Create a text input for users to paste a Job Description.
  * [ ] Implement keyword extraction and comparison logic.
  * [ ] Build a UI to display the "ATS Match Score" and missing keywords.

## Phase 14: Multiple Resume Profiles/Versions (⏳ Planning)
* **Focus:** Allow users to create, save, and manage multiple distinct resumes.
* **Action Items:**
  * [ ] Update Zustand store to support multiple resume objects and a `currentResumeId`.
  * [ ] Build a Dashboard UI for users to view, duplicate, and delete saved resumes.
  * [ ] Integrate multi-document syncing with Cloud Storage (Phase 10).

## Phase 15: LinkedIn Profile Import (⏳ Planning)
* **Focus:** Speed up onboarding by extracting data from LinkedIn PDF exports.
* **Action Items:**
  * [ ] Add a file upload dropzone for LinkedIn PDFs.
  * [ ] Integrate a client-side PDF text extraction library (e.g., `pdf.js`).
  * [ ] Build a parser to map LinkedIn text sections to the Zustand store schema.

## Future Phase (Final Feature): AI-Powered Content Generation (⏳ Planning)
* **Focus:** Integrate an AI API to assist users with writing resume content.
* **Action Items:**
  * [ ] Integrate an AI API (e.g., Google Gemini or OpenAI).
  * [ ] Add "Fix my grammar" and "Make it professional" actions to text areas.
  * [ ] Create a "Generate bullet points" button based on job titles.