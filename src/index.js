import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import TodoProvider from "./context/TodoProvider";
import ThemeProvider from "./context/ThemProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
