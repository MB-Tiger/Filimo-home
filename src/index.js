import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRoutes from "./routes/MyRoutes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
