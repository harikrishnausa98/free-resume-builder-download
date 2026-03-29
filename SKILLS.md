# Skills & Technologies

This project demonstrates proficiency in the following technologies and concepts:

## Core Frontend Stack
* **React.js**: Building dynamic, component-driven user interfaces. Extensive use of React Hooks (`useState`, `useEffect`, `useRef`) for managing component lifecycles and local state.
* **JavaScript (ES6+)**: Usage of modern JavaScript features including arrow functions, object/array destructuring, template literals, and functional array methods (`map`, `filter`).

## Global State Management
* **Zustand**: Implementation of a lightweight, scalable global state management solution (`useResumeStore`) to handle complex form data across multiple independent components.
* **State Persistence**: Utilizing Zustand's `persist` middleware to automatically cache the user's resume data in the browser's `localStorage`, ensuring data is not lost on refresh.

## Styling & UI Design
* **Tailwind CSS**: Rapid UI development using utility-first CSS classes for responsive design, layout structuring (Flexbox and Grid), and custom interactive states (`hover`, `focus`, `group`).
* **Interactive Layouts**: Implementing custom DOM event listeners (mouse tracking) to create a draggable, resizable split-screen layout.

## Client-Side Document Generation
* **PDF Export**: Integrating `html2canvas` and `jsPDF` (via `html2pdf.js`) to capture the React DOM and render it into a downloadable, high-quality PDF document entirely on the client side.

## Build Tools & Architecture
* **Vite**: Modern frontend build tooling and bundling (inferred from the `dist/assets` output structure).
* **Component Modularity**: Breaking down complex UIs into maintainable, focused components (e.g., `PersonalInfoForm`, `WorkExperienceForm`, `EducationForm`, `SplitScreenLayout`).