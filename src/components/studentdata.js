import React from "react";
import DisplayStudentDetailsCopy from "../containers/DisplayStudentDetailsCopy";

const StudentData = ({ studentData }) => {
  return (
    <div>
      <br></br>

      <center>
        <h3>Student View</h3>
        <h1> Applicant Information Form </h1>
      </center>

      <table className="table">
        <thead>
          <tr>
            <th>StudentID</th>
            <th>UserName</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DateOfBirth</th>
            <th>Program Selected</th>

            <th>File Description</th>
            <th>File Upload Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{studentData.id}</td>
            <td>{studentData.username}</td>
            <td>{studentData.firstName}</td>
            <td>{studentData.lastName}</td>
            <td>{studentData.dateOfBirth}</td>
            <td>{studentData.programs}</td>

            <td>{studentData.fileDesc}</td>
            <td>{studentData.fileUploadTime}</td>
          </tr>
          <tr>
            <td colSpan="15"></td>
          </tr>
        </tbody>
      </table>
      <a href={StudentData.name}> Uploaded File</a>
      <p>
        <h5>Uploaded File URL{"   :       " + studentData.name}</h5>
      </p>
    </div>
  );
};

export default StudentData;
