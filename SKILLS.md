# Skills & Technologies

This project demonstrates proficiency in the following technologies and concepts:

## Core Frontend Stack
* **React.js**: Building dynamic, component-driven user interfaces. Extensive use of React Hooks (`useState`, `useEffect`, `useRef`) for managing component lifecycles and local state.
* **JavaScript (ES6+)**: Usage of modern JavaScript features including arrow functions, object/array destructuring, template literals, and functional array methods (`map`, `filter`).

## Global State Management
* **Zustand**: Implementation of a lightweight, scalable global state management solution (`useResumeStore`) to handle complex form data across multiple independent components.
* **State Persistence**: Utilizing Zustand's `persist` middleware to automatically cache the user's resume data in the browser's `localStorage`, ensuring data is not lost on refresh.

## Backend & Cloud Sync
* **Firebase Authentication**: Support for Google (Gmail) OAuth, LinkedIn OAuth, and secure Phone Number (OTP) login directly from the client.
* **Cloud Firestore**: Real-time NoSQL database integration to securely persist and sync user resume progress across devices via Firestore schema binding and Row Level Security rules.

## Styling & UI Design
* **Tailwind CSS**: Rapid UI development using utility-first CSS classes for responsive design, layout structuring (Flexbox and Grid), and custom interactive states (`hover`, `focus`, `group`).
* **Interactive Layouts**: Implementing custom DOM event listeners (mouse tracking) to create a draggable, resizable split-screen layout.

## Form Inputs & Editing
* **Rich Text Editing**: Integration of `react-quill` to provide a WYSIWYG editor for professional descriptions with complex HTML outputs safely managed.

## Client-Side Document Generation
* **PDF Export**: Integrating `html2canvas` and `jsPDF` (via `html2pdf.js`) to capture the React DOM and render it into a downloadable, high-quality PDF document entirely on the client side.

## Build Tools & Architecture
* **Vite**: Modern frontend build tooling and bundling (inferred from the `dist/assets` output structure).
* **Component Modularity**: Breaking down complex UIs into maintainable, focused components (e.g., `PersonalInfoForm`, `WorkExperienceForm`, `EducationForm`, `SplitScreenLayout`).
* **Extensible Architecture (Planned)**: Designing the state and component structure to easily scale for multi-document generation (e.g., expanding from Resumes to Cover Letters) and dynamic data modeling (Custom Sections).