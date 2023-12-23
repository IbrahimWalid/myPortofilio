import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LanguageContextProvider } from "./contexts/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider >
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
);
