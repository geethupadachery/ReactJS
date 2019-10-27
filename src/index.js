import React, { Component } from "react";
import App from "./App";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FormContainer from "./containers/FormContainer";
//import DisplayStudentDetails from "./containers/DisplayStudentDetails";
/*import DisplayStudentDetailsCopy from "./containers/DisplayStudentDetailsCopy";*/
import Admin from "./containers/Admin";
import DisplayStudentDetailsCopy from "./containers/DisplayStudentDetailsCopy";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

//class App extends Component {
ReactDOM.render(
  <Router>
        
    <App />
        
    <FormContainer />
        
    <DisplayStudentDetailsCopy />
        
    <Admin />
      
  </Router>,
  document.getElementById("root")
);
//}

render(<App />, document.getElementById("root"));
