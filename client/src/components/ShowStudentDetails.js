import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class showStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/students/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          student: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/students/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  }

  render() {
    const student = this.state.student;
    let StudentItem = (
      <div>
        <table className="table table-hover table-dark">
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Name of the student</td>
              <td>{student.student_name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Name of the guardian</td>
              <td>{student.guardian}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ISBN</td>
              <td>{student.isbn}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Addrees of the student</td>
              <td>{student.address}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Addmitted Date</td>
              <td>{student.admitted_date}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Student registration number</td>
              <td>{student.registration_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowStudentDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Student List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Students's Record</h1>
              <p className="lead text-center">View Student's Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{StudentItem}</div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, student._id)}
              >
                Delete Student
              </button>
              <br />
            </div>

            <div className="col-md-6">
              <Link
                to={`/edit-student/${student._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Student
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
        </div>
      </div>
    );
  }
}

export default showStudentDetails;
