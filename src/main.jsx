import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./styles/global.css";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);

