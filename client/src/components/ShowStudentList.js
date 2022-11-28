import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

class ShowStudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://mern-student-registration-app.herokuapp.com/api/students")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from StudentList");
      });
  }

  render() {
    const students = this.state.students;
    console.log("PrintStudent: " + students);
    let studentList;

    if (!students) {
      studentList = "there is no student record!";
    } else {
      studentList = students.map((student, k) => (
        <StudentCard student={student} key={k} />
      )); ///tyutututu
    }

    // added searched method

    // filterData(students, searchKey);
    // const result = students.filter(
    //   (student) =>
    //     student.student_name.toLowerCase().includes(searchKey) ||
    //     student.registration_number.toLowerCase().includes(searchKey) ||
    //     student.isbn.toLowerCase().includes(searchKey)
    // );

    // this.setState({ students: result });

    // handleSearchArea = (e) => {
    //   const searchKey = e.currentTarget.value;
    //   axios.get("/students").then((res) => {
    //     if (res.data.success) {
    //       this.filterData(res.data.existingStudents, searchKey);
    //     }
    //   });
    // };

    return (
      <div className="ShowStudentList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">STUDENTS DETAILS</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-student"
                className="btn btn-outline-warning float-right"
              >
                + Add a New Student
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          {/* added search bar */}

          <div className="col-md-3">
            <h4>All Student</h4>

            <input
              type="search"
              className="form-control"
              name="searchQuery"
              placeholder="Search"
              onChange={this.handleSearchArea}
            ></input>
          </div>

          <div className="list">{studentList}</div>
        </div>
      </div>
    );
  }
}

export default ShowStudentList;
