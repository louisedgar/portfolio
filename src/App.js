import React from "react";
import "./tailwind.output.css";
import Home from "./pages/Home";
import Co from "./pages/Co";
import Aqimos from "./pages/Aqimos";
import Formbuilder from "./pages/Formbuilder";
import Mantis from "./pages/Mantis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/co">
          <Co/>
        </Route>
        <Route path="/aqimos">
          <Aqimos/>
        </Route>
        <Route path="/formbuilder">
          <Formbuilder/>
        </Route>
        <Route path="/mantis">
          <Mantis/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
