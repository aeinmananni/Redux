import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div className="w-full h-screen overflow-hidden p-2 flex flex-col gap-2">
      <App />
    </div>
  </BrowserRouter>
);
