import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const StudentCard = (props) => {
  const student = props.student;

  return (
    <div className="card-container">
      <img
        src="https://extend.schoolwires.com/ClipartGallery/images/34626102.gif"
        alt=""
      />

      <div className="desc">
        <h2>
          <Link to={`/show-student/${student._id}`}>
            {student.student_name}
          </Link>
        </h2>
        <h3>{student.registration_number}</h3>
        <p>{student.isbn}</p>
      </div>
    </div>
  );
};

export default StudentCard;
