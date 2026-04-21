import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5001/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      })
      .catch((error) => {
        console.log("Error fetching course detail:", error);
      });
  }, [id]);

  if (!course) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course Detail Page</h1>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Category: {course.category}</p>

      <Link to={`/enroll/${course._id}`}>Enroll Now</Link>
    </div>
  );
}

export default CourseDetail;