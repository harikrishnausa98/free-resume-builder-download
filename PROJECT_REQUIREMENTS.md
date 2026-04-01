# Project Requirements

This document outlines the functional and non-functional requirements for the Free Resume Builder application.

## 1. Available Features (Phase 1 - Completed)

The following features are currently implemented and considered complete.

### 1.1. Live Split-Screen Editor
*   **Real-Time Preview**: See your resume update instantly on the right side of the screen as you type your details on the left.
*   **Draggable Resizer**: Custom drag handle allows users to dynamically adjust the width of the editor and preview panes (constrained between 20% and 80%) for a personalized workspace.
*   **Full Preview Mode**: Toggle a full-screen preview to hide the editor and review the final document layout before exporting.

### 1.2. Comprehensive Data Entry
*   **Personal Details**: Capture essential contact information, professional title, portfolio/LinkedIn links, and a professional summary.
*   **Employment History**: Dynamically add, update, or remove multiple work experience entries, including job titles, employers, dates, and descriptions.
*   **Education**: Dynamically add, update, or remove educational background details such as schools, degrees, and dates.

### 1.3. One-Click PDF Export
*   **Download as PDF**: High-quality export of the rendered resume directly to a PDF file using client-side generation, ensuring privacy since no data is sent to a backend server.

### 1.4. Auto-Save (Browser Persistence)
*   **Never Lose Progress**: All form data (Personal Info, Experience, Education, and Settings) is automatically saved to the browser's local storage. Users can safely refresh or close the tab and pick up exactly where they left off.

### 1.5. Modern UI/UX
*   Clean, responsive, and accessible interface.
*   Polished form inputs with active focus states, smooth transitions, and intuitive "Add/Remove" interactions for list-based data.
*   Custom scrollbars for a refined look and feel.

## 2. Upcoming Features (In Progress & Planning)

*(This section will be filled in as we plan the next development phases.)*

### 2.1. Skills Section (Phase 2 - Completed)
*   **Data Entry**: A form section to add, edit, and remove individual skills.
*   **Live Preview**: Display the list of skills on the resume preview.
*   **State Management**: Implement the missing Zustand actions (`addSkill`, `removeSkill`, `updateSkill`) to manage the skills array.
*   **Reordering**: Implement drag-and-drop functionality to allow users to reorder skills.

### 2.2. Theme & Typography Customization (Phase 6 - Completed)
*   **Settings Panel UI**: A new section in the editor where users can pick a primary accent color (e.g., Blue, Green, Dark Gray) and select from a few clean, professional web fonts (e.g., Inter, Roboto, Merriweather).
*   **Dynamic Preview Styling**: Binding these settings to the Live Preview so the layout's headers, accents, and typography change in real-time.
*   **State Management**: Store the user's selected `themeColor` and `fontFamily` in the Zustand store and persist them to `localStorage`.

### 2.3. Multiple Resume Templates (Phase 7 - Completed)
*   **Template Engine**: Refactor the Live Preview component to act as a wrapper that can conditionally render different layout components based on a `templateId` from the settings store.
*   **Template Varieties**: Create at least 10 distinct resume layouts (Modern, Classic, Minimalist, Professional, Creative, Elegant, Compact, Bold, Executive, Tech).
*   **Template Selector UI**: Add a visual selector in the Settings panel for users to switch between available templates instantly.

### 2.4. Rich Text Editing (Phase 5 - Planning)
*   **Editor Integration**: Replace standard `<textarea>` inputs for "Professional Summary" and "Job Descriptions" with a lightweight, client-side Rich Text Editor (e.g., `react-quill` or `tiptap`).
*   **Formatting Options**: Provide a small toolbar for users to add Bold, Italics, and Bulleted/Numbered Lists.
*   **Preview Rendering**: Update the Live Preview components to safely parse and render the formatted HTML output from the editor.

### 2.5. Data Portability & Advanced UX (Phase 6 - Planning)
*   **Import/Export JSON**: Allow users to download their raw resume data as a `.json` file and upload it to restore progress across devices, bypassing the limitations of `localStorage`.
*   **Drag-and-Drop Reordering**: Implement drag-and-drop functionality (e.g., using `dnd-kit` or `@hello-pangea/dnd`) to let users easily reorder their Work Experience and Education array entries.
*   **Schema Validation**: Ensure uploaded JSON files are validated against the expected Zustand store schema to prevent application crashes from corrupted imports.

### 2.6. User Authentication & Cloud Storage (Phase 7 - Planning)
*   **Authentication System**: Implement secure user registration and login using a BaaS (Backend-as-a-Service) provider like Firebase Auth, Supabase, or Auth0. Support Email/Password and social OAuth (e.g., Google).
*   **Cloud Sync**: Sync the Zustand store with a cloud database (Firestore or PostgreSQL) to allow cross-device access, replacing the strict reliance on `localStorage`.
*   **Row Level Security (RLS)**: Enforce strict database authorization policies to ensure users can only read, update, and delete their own resume documents.
*   **Data Encryption & Privacy**: Ensure Personally Identifiable Information (PII) is encrypted at rest in the database.
*   **Advanced XSS Protection**: Enforce strict validation and sanitization of all user inputs before they are written to the database to prevent cross-site scripting attacks.