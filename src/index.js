import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";
//import DisplayStudentDetails from "./containers/DisplayStudentDetails";
/*import DisplayStudentDetailsCopy from "./containers/DisplayStudentDetailsCopy";*/
import Admin from "./containers/Admin";
import DisplayStudentDetailsCopy from "./containers/DisplayStudentDetailsCopy";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Student Admission Application </h3>

        <Admin />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
