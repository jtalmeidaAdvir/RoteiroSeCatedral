import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registado com sucesso:', registration.scope);
      })
      .catch((error) => {
        console.log('Falha ao registar Service Worker:', error);
      });
  });
}
