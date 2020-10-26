import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.render(
  <React.StrictMode>
     <AnimatedCursor
      innerSize={16}
      outerSize={16}
      color='245, 101, 101'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
