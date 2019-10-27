import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import axios, { post } from "axios";
import { file } from "@babel/types";

import DisplayStudentDetailsCopy from "../containers/DisplayStudentDetailsCopy";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstName: "",
        lastName: "",
        username: "",
        dateOfBirth: "",
        gender: "",
        programs: [],
        about: "",
        name: "",
        fileDesc: ""
      },

      genderOptions: ["Male", "Female", "Others"],
      programOptions: ["Undergraduate", "Graduate", "Certificate", "Online"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFileName = this.handleFileName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileDesc = this.handleFileDesc.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleDate(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          dateOfBirth: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleFileDesc(e) {
    console.log("Inside FileDescription");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          fileDesc: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.programs.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.programs.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.programs, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, programs: newSelectionArray }
    }));
  }

  handleFileName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          fileName: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  onChange(e) {
    this.setState({ file: e.target.files });
    console.log("Testing     " + file + " " + file[0]);
  }

  handleChange = event => {
    this.setState({ fileName: event.target.files[0] });
  };

  handleSubmit = event => {
    console.log("inside handle submit " + this.state.fileName);
    console.log(this.state.fileName);
    console.log(this.state.fileName.name);
    console.log(this.state.fileName.lastModified);
    console.log(this.state.fileName.lastModifiedDate);
    this.state.name = this.state.fileName.name;
    console.log(this.state.name);
    let form_data = new FormData();
    form_data.append("file", this.state.fileName);
    form_data.append("username", this.state.newUser.username);

    let url = "http://54.241.137.64:8080/studentadmissionapp/addobject";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    userData.name = this.state.name;
    console.log("userData.name" + userData.name);

    fetch(
      "https://ygnr0sm77e.execute-api.us-west-1.amazonaws.com/production/student",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      response
        .json()
        .then(data => {
          console.log("Successful" + data);
          alert("Submitted successfully");
        })
        .then(() => this.props.history.push("/studentdata"));
    });
    //.then(() => this.props.history.push("/DisplayStudentDetailsCopy"));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        firstName: "",
        lastName: "",
        username: "",
        dateOfBirth: "",
        gender: "",
        programs: [],
        about: "",
        fileName: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div>
          <h3>Update Student Details</h3>
          <Input
            inputType={"text"}
            title={"First Name"}
            name={"firstName"}
            value={this.state.newUser.firstName}
            placeholder={"Enter your first name"}
            handleChange={this.handleInput}
          />{" "}
          <Input
            inputType={"text"}
            title={"Last Name"}
            name={"lastName"}
            value={this.state.newUser.lastName}
            placeholder={"Enter your last name"}
            handleChange={this.handleInput}
          />{" "}
          <Input
            inputType={"text"}
            title={"Username"}
            name={"username"}
            value={this.state.newUser.username}
            placeholder={"Enter your username"}
            handleChange={this.handleInput}
          />{" "}
          {/* Name of the user */}
          <Input
            inputType={"date"}
            name={"dateOfBirth"}
            title={"Date Of Birth"}
            value={this.state.newUser.dateOfBirth}
            placeholder={"Enter your age"}
            handleChange={this.handleDate}
          />{" "}
          {/* Date of Birth */}
          <Select
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />{" "}
          {/* Age Selection */}
          <CheckBox
            title={"Programs"}
            name={"programs"}
            options={this.state.programOptions}
            selectedOptions={this.state.newUser.programs}
            handleChange={this.handleCheckBox}
          />{" "}
          {/* Programs */}
          <TextArea
            title={"About you."}
            rows={5}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={"Describe your past experience and skills"}
          />
          {/* About you */}
          <TextArea
            title={"File Description"}
            rows={2}
            value={this.state.newUser.fileDesc}
            name={"fileDesc"}
            handleChange={this.handleFileDesc}
            placeholder={"Enter File Description Here"}
          />
          <Input
            inputType={"file"}
            name={"fileName"}
            title={"Upload Files"}
            value={this.state.newUser.fileName}
            placeholder={"Upload Your File"}
            onChange={this.handleChange}
          />{" "}
          <Button
            action={this.handleSubmit}
            type="submit"
            type={"primary"}
            title={"Upload Documents"}
            style={buttonStyle}
            onChange={this.handleChange}
          />{" "}
          {/* Upload Documents */}
          <br></br>
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}
        </div>
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
