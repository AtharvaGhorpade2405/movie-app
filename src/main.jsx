import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { MovieContextProvider } from "./store/movie-store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </BrowserRouter>
);
