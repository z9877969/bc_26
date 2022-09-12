import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   return (
//     <div>
//       <button>ClickMe</button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "button",
  //     {
  //       disabled: true,
  //     },
  //     "Click Me"
  //   )
  // )
  // <div>
  //   <button disabled>Click Me</button>
  // </div>
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
