import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import fonts for theme customization
import '@fontsource/inter/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/merriweather/400.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)