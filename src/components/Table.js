import React from "react";
import Admin from "../containers/Admin";

const Table = ({ studentData }) => {
  return (
    <div>
      <br></br>
      <center>
        <h1> List of Student Details </h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th>StudentID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Programs</th>
            <th>FileName</th>
          </tr>
        </thead>
        <tbody>
          {studentData.length > 0 ? (
            studentData.map((studentData, index) => {
              return (
                <tr key={index}>
                  <td>{studentData.id}</td>
                  <td>{studentData.firstName}</td>
                  <td>{studentData.lastName}</td>
                  <td>{studentData.programs}</td>
                  <td>{studentData.name}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
