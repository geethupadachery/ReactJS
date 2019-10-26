import React, { Component } from "react";
import StudentData from "../components/studentdata";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/download.png";
import Table from "../components/Table";

class DisplayStudentDetailsCopy extends Component {
  constructor() {
    super();
    this.state = {
      studentData: []
    };
  }
  componentDidMount() {
    fetch(
      'https://ygnr0sm77e.execute-api.us-west-1.amazonaws.com/development/student/?username="maths"'
    )
      .then(Response => Response.json())
      .then(findresponse => {
        console.log(findresponse);
        this.setState({
          studentData: findresponse
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-blue bg-light">
          <a class="navbar-brand" href="./">
            <img src={logo} alt="logo" width="100" /> SAN JOSE STATE UNIVERSITY
          </a>
        </nav>
        <StudentData studentData={this.state.studentData} />
      </div>
    );
  }
}

export default DisplayStudentDetailsCopy;
