import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { Enquire } from "./Enquire";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/enquire" component={Enquire} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
