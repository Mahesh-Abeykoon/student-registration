import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateStudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_name: "",
      isbn: "",
      guardian: "",
      address: "",
      admitted_date: "",
      registration_number: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/students/" + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          student_name: res.data.student_name,
          isbn: res.data.isbn,
          guardian: res.data.guardian,
          address: res.data.address,
          admitted_date: res.data.admitted_date,
          registration_number: res.data.registration_number,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateStudentInfo");
      });
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
      .put(
        "http://localhost:8082/api/students/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-student/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateStudentInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateStudentInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Student List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Student</h1>
              <p className="lead text-center">Update Students's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  placeholder="Name of the student"
                  name="student_name"
                  className="form-control"
                  value={this.state.student_name}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
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
                <label htmlFor="author">Guardian</label>
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
                <label htmlFor="description">Addrees</label>
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
                <label htmlFor="published_date">Addmitted Date</label>
                <input
                  type="date"
                  placeholder="Addmitted Date"
                  name="published_date"
                  className="form-control"
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Registration Number</label>
                <input
                  type="text"
                  placeholder="Student registration number"
                  name="registration_number"
                  className="form-control"
                  value={this.state.registration_number}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStudentInfo;
