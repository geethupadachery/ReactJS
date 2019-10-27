import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Admin from "./containers/Admin";
import FormContainer from "./containers/FormContainer";
import DisplayStudentDetailsCopy from "./containers/DisplayStudentDetailsCopy";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => <FormContainer {...props} />} />
        <Route
          path="/studentdata"
          exact
          component={DisplayStudentDetailsCopy}
        />
        <Route path="/admindata" exact component={Admin} />
      </Switch>
    </Router>
  );
}
