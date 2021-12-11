import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      student_name: "",
      isbn: "",
      guardian: "",
      address: "",
      admitted_date: "",
      registration_number: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      student_name: this.state.student_name,
      isbn: this.state.isbn,
      guardian: this.state.guardian,
      address: this.state.address,
      admitted_date: this.state.admitted_date,
      registration_number: this.state.registration_number,
    };

    axios
      .post("https://mern-student-registration-app.herokuapp.com/api/students", data)
      .then((res) => {
        this.setState({
          student_name: "",
          isbn: "",
          guardian: "",
          address: "",
          admitted_date: "",
          registration_number: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    return (
      <div className="CreateStudent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-primary float-left">
                Show Student List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <br></br>
              <h1 className="display-4 text-center">Student Menu</h1>
              <br></br>
              <p className="lead text-center">Add a new Student</p>
              <br></br>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the student"
                    name="student_name"
                    className="form-control"
                    value={this.state.student_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the guardian"
                    name="guardian"
                    className="form-control"
                    value={this.state.guardian}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Addrees of the student"
                    name="address"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Addmitted Date"
                    name="addmitted_date"
                    className="form-control"
                    value={this.state.addmitted_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Student registration number"
                    name="registration_number"
                    className="form-control"
                    value={this.state.registration_number}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  name="ghfhf"
                  type="submit"
                  className="btn btn-outline-danger btn-block mt-5"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudent;
