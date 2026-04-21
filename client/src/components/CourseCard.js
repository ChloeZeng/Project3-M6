import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
      }}
    >
      <h2>{props.title}</h2>
      <p>Instructor: {props.instructor}</p>
      <p>Category: {props.category}</p>
      <Link to={`/courses/${props.id}`}>View Details</Link>
    </div>
  );
}

export default CourseCard;