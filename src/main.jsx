// Libraries.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components.
import App from "./App.jsx";

// Styles.
import "./styles/App.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <App />
 </StrictMode>
);
