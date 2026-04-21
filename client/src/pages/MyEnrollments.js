import { useEffect, useState } from "react";

function MyEnrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/enrollments")
      .then((res) => res.json())
      .then((data) => {
        console.log("Enrollments API data:", data);
        setEnrollments(data);
      })
      .catch((error) => {
        console.log("Error fetching enrollments:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Enrollments</h1>

      {enrollments.length === 0 ? (
        <p>No enrollments yet.</p>
      ) : (
        enrollments.map((enroll) => (
          <div key={enroll._id} style={{ marginBottom: "20px" }}>
            <h3>Course ID: {enroll.courseId}</h3>
            <p>Name: {enroll.name}</p>
            <p>Email: {enroll.email}</p>
            <p>Goal: {enroll.goal}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyEnrollments;