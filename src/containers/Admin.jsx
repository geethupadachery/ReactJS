import React, { Component } from "react";
import StudentData from "../components/studentdata";
import Table from "../components/Table";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: []
    };
  }

  componentDidMount() {
    fetch(
      "https://ygnr0sm77e.execute-api.us-west-1.amazonaws.com/production/studentapplications"
    )
      .then(res => res.json())
      .then(json => json.studentData)
      .then(studentData => this.setState({ studentData: studentData }));
    console.log(this.state.studentData);
  }

  render() {
    return (
      <div className="Admin">
        <Table studentData={this.state.studentData} />
      </div>
    );
  }
}

export default Admin;
