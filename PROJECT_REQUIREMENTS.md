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

### 1.6. Rich Text Editing (WYSIWYG)
*   **Editor Integration**: Lightweight, client-side Rich Text Editor (`react-quill`) replaces standard textareas for Professional Summary and Job Descriptions.
*   **Formatting Options**: Users can add Bold, Italics, and Bulleted/Numbered Lists.
*   **Preview Rendering**: Safely parsing and rendering the formatted HTML output onto the live resume templates.

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

### 2.4. Data Portability & Advanced UX (Phase 9 - In Progress)
*   **Import/Export JSON**: Allow users to download their raw resume data as a `.json` file and upload it to restore progress across devices, bypassing the limitations of `localStorage`.
*   **Drag-and-Drop Reordering**: Implement drag-and-drop functionality (e.g., using `dnd-kit` or `@hello-pangea/dnd`) to let users easily reorder their Work Experience and Education array entries.
*   **Schema Validation**: Ensure uploaded JSON files are validated against the expected Zustand store schema to prevent application crashes from corrupted imports.

### 2.5. User Authentication & Cloud Storage (Phase 10 - Planning)
*   **Authentication System**: Implement secure user registration and login using Firebase Auth. Support Email/Password, Google (Gmail), LinkedIn OAuth, and Phone Number authentication.
*   **Cloud Sync**: Sync the Zustand store with Firestore to allow cross-device access, serving as a cloud-based alternative to `localStorage`.
*   **Security Rules**: Enforce strict Firebase Security Rules to ensure users can only read, write, and delete their own resume documents.
*   **Data Encryption & Privacy**: Ensure Personally Identifiable Information (PII) is encrypted at rest in the database.
*   **Advanced XSS Protection**: Enforce strict validation and sanitization (via DOMPurify) of all user inputs before they are written to or read from the database to prevent cross-site scripting attacks.

### 2.6. Cover Letter Builder (Phase 11 - Planning)
*   **Editor Tab**: A dedicated tab/mode in the UI to switch from building a Resume to building a Cover Letter.
*   **Theme Synchronization**: The cover letter must seamlessly inherit the active resume template's typography and primary color scheme.
*   **Export Options**: Users should be able to download the cover letter as a standalone PDF or combined with the resume document.

### 2.7. Custom Resume Sections (Phase 12 - Planning)
*   **Dynamic Creation**: Users can create new sections (e.g., "Certifications", "Languages") and choose their data type (list of items or rich text block).
*   **Global Reordering**: Users can use drag-and-drop to reorder entire sections (e.g., moving "Education" above "Work Experience").
*   **Template Integration**: All resume templates must support rendering these dynamic sections seamlessly, adhering to the active theme.

### 2.8. ATS Optimization & Job Match Scoring (Phase 13 - Planning)
*   **Job Description Input**: A dedicated area to paste a target job description.
*   **Keyword Analysis**: Extract and compare keywords between the resume and the job description.
*   **Scoring & Suggestions**: Calculate an "ATS Match Score" and suggest missing keywords to improve the match.

### 2.9. Multiple Resume Profiles/Versions (Phase 14 - Planning)
*   **Dashboard**: A dedicated view to manage multiple resumes.
*   **Management Actions**: Users must be able to create new, duplicate, edit, and delete specific resume versions.
*   **Cloud Persistence**: All profiles must independently sync to the user's cloud account.

### 2.10. LinkedIn Profile Import (Phase 15 - Planning)
*   **PDF Upload**: A secure, client-side dropzone for LinkedIn's native "Save to PDF" documents.
*   **Data Extraction & Mapping**: Automatically parse and populate the user's Personal Info, Experience, Education, and Skills forms based on the PDF content.

### 2.11. AI-Powered Content Generation (Future Planning - Final Feature)
*   **API Integration**: Connect to a robust AI API (e.g., Google Gemini).
*   **Smart Editing**: Buttons for "Fix my grammar" or "Make it sound more professional" integrated into the text editors.
*   **Content Generation**: "Generate bullet points" for job descriptions based on a provided job title.