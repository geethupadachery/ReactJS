import React, { Component } from "react";

export default class DisplayStudentDetails extends React.Component {
  state = {
    loading: true,
    username: null,
    firstName: null,
    dateOfBirth: null,
    gender: null,
    programs: null,
    about: null,
    fileName: null
  };
  async componentDidMount() {
    const url =
      "https://ygnr0sm77e.execute-api.us-west-1.amazonaws.com/development/student";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ username: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.getSnapshotBeforeUpdate.username ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.username}</div>
          </div>
        )}
      </div>
    );
  }
}
