import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import "../styles/layout.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);
        setCourses(data);
      })
      .catch((error) => {
        console.log("Error fetching courses:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses Page</h1>

      <div className="responsive-grid two-columns">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            title={course.title}
            instructor={course.instructor}
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;