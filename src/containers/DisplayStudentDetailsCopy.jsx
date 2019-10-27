import React, { Component } from "react";
import StudentData from "../components/studentdata";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/download.png";
import Table from "../components/Table";
import Button from "../components/Button";
import axios, { post } from "axios";
import { file } from "@babel/types";
import Input from "../components/Input";

class DisplayStudentDetailsCopy extends Component {
  constructor() {
    super();
    this.state = {
      studentData: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    fetch(
      'https://ygnr0sm77e.execute-api.us-west-1.amazonaws.com/production/student/?username="missileman"'
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

  handleUpdate(e) {
    console.log("Update");
  }

  onChange(e) {
    this.setState({ file: e.target.files });
    console.log("Testing     " + file + " " + file[0]);
  }

  handleChange = event => {
    this.setState({ fileName: event.target.files[0] });
  };

  handleDelete = event => {
    console.log("inside handle delete " + this.state.studentData.name);
    this.state.studentData.name = this.state.studentData.name.replace(
      /^.*[\\\/]/,
      ""
    );
    console.log(this.state.studentData.name);

    let url =
      "http://www.geethupadachery.com:8080/studentadmissionapp/deleteobject/?fileName=" +
      this.state.studentData.name +
      "&username=" +
      this.state.studentData.username;
    axios
      .delete(url, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleUpdate = event => {
    console.log("inside handle update " + this.state.studentData.name);
    this.state.studentData.name = this.state.studentData.name.replace(
      /^.*[\\\/]/,
      ""
    );
    console.log(this.state.studentData.name);
    let form_data = new FormData();
    form_data.append("file", this.state.fileName);
    form_data.append("username", this.state.studentData.username);

    let url =
      "http://www.geethupadachery.com:8080/studentadmissionapp/updateobject";
    axios
      .put(url, form_data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data);
        alert("File Updated successfully");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-blue bg-light">
          <a class="navbar-brand" href="./">
            <img src={logo} alt="logo" width="100" /> SAN JOSE STATE UNIVERSITY
          </a>
        </nav>
        <StudentData studentData={this.state.studentData} />
        {/* Update Documents */}
        <br></br>
        <Input
          inputType={"file"}
          name={"fileName"}
          title={"Upload Files"}
          value={this.state.studentData.fileName}
          placeholder={"Upload Your File"}
          onChange={this.handleChange}
        />{" "}
        <Button
          m-5
          action={this.handleUpdate}
          type={"primary"}
          title={"Update Existing File"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleDelete}
          type={"primary"}
          title={"Delete File"}
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

export default DisplayStudentDetailsCopy;
