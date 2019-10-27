import React, { Component } from "react";
import StudentData from "../components/studentdata";
import Table from "../components/Table";
import logo from "../assets/download.png";
import Button from "../components/Button";

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
      <div className="Admin">
        <nav class="navbar navbar-blue bg-light">
          <a class="navbar-brand" href="./">
            <img src={logo} alt="logo" width="100" /> SAN JOSE STATE UNIVERSITY
          </a>
        </nav>
        <Table studentData={this.state.studentData} />
        <br></br>
        <Button
          m-5
          action={this.handleUpdate}
          type={"primary"}
          title={"Approve"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleDelete}
          type={"primary"}
          title={"Reject"}
          style={buttonStyle}
          handleChange={this.handleInput}
        />{" "}
      </div>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default Admin;
