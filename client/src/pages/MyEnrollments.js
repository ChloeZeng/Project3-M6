import { useEffect, useState } from "react";
import "./MyEnrollments.css";

function MyEnrollments({ embedded = false }) {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:5001/api/enrollments").then((res) => res.json()),
      fetch("http://127.0.0.1:5001/api/courses").then((res) => res.json()),
    ])
      .then(([enrollmentsData, coursesData]) => {
        setEnrollments(enrollmentsData);
        setCourses(coursesData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function getCourseTitle(courseId) {
    const course = courses.find((c) => c._id === courseId);
    return course ? course.title : "Unknown Course";
  }

  if (loading) {
    return <h2 className="my-enrollments-loading">Loading...</h2>;
  }

  return (
    <div
      id="enrollments"
      className={embedded ? "my-enrollments-section" : "my-enrollments-page"}
    >
      <div className="my-enrollments-header">
        <h2 className="my-enrollments-title">
          {embedded ? "My Enrollments" : "My Enrollments"}
        </h2>
        <p className="my-enrollments-subtitle">
          Review the courses you have joined and the goals you submitted.
        </p>
      </div>

      {enrollments.length === 0 ? (
        <div className="my-enrollments-empty">
          <p>No enrollments yet.</p>
        </div>
      ) : (
        <div className="my-enrollments-grid">
          {enrollments.map((enroll) => (
            <div key={enroll._id} className="enrollment-card">
              <div className="enrollment-badge">Enrollment Record</div>

              <h3>{getCourseTitle(enroll.courseId)}</h3>

              <p className="enrollment-item">
                <strong>Name:</strong> {enroll.name}
              </p>

              <p className="enrollment-item">
                <strong>Email:</strong> {enroll.email}
              </p>

              <p className="enrollment-item">
                <strong>Goal:</strong> {enroll.goal}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEnrollments;