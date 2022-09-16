import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const theme = {
  colors: {
    primaryLight: "#fff",
    secondaryLight: "lightgrey",
    dark: "black",
    bgColor: "blue",
  },
  border: {
    radius: [0, 6, 12, 18],
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
