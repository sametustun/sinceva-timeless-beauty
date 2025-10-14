import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'

console.log('Main.tsx loading...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

console.log('Root element found, rendering App...');
createRoot(rootElement).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
