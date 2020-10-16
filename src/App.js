import React from "react";
import "./tailwind.output.css";
import Home from "./pages/Home";
import Co from "./pages/Co";
import Aqimos from "./pages/Aqimos";
import Formbuilder from "./pages/Formbuilder";
import Mantis from "./pages/Mantis";

const home = () => {
  if (window.location.pathname === "/" || window.location.pathname === " ") {
    return <Home/>
  }
}

const co = () => {
  if (window.location.pathname === "/co") {
    return <Co/>
  }
}

const aqimos = () => {
  if (window.location.pathname === "/aqimos") {
    return <Aqimos/>
  }
}

const formbuilder = () => {
  if (window.location.pathname === "/formbuilder") {
    return <Formbuilder/>
  }
}

const mantis = () => {
  if (window.location.pathname === "/mantis") {
    return <Mantis/>
  }
}


function App() {
  return (
    <div className="App ">
      {home()}
      {co()}
      {aqimos()}
      {formbuilder()}
      {mantis()}
    </div>
  );
}

export default App;
