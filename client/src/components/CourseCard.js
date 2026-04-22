import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-content">
        <h2>{course.title}</h2>
        <p>{course.subtitle}</p>

        <h3>Course Content:</h3>
        <ul>
          {course.content?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Best For:</h3>
        <p>{course.audience}</p>

        <div className="course-footer">
          <span className="price">${course.price}</span>
          <Link to={`/courses/${course._id}`} className="enroll-button">
            Enroll Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CourseCard;