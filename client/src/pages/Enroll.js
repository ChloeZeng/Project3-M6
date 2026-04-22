import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Enroll.css";

function Enroll() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5001/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      })
      .catch((error) => {
        console.log("Error fetching course:", error);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || goal === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const enrollmentData = {
      courseId: id,
      name,
      email,
      goal,
    };

    fetch("http://127.0.0.1:5001/api/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Enrollment API response:", data);
        alert("Enrollment submitted successfully!");
        setName("");
        setEmail("");
        setGoal("");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  if (!course) {
    return <h2 className="enroll-loading">Loading...</h2>;
  }

  return (
    <div className="enroll-page">
      <div className="enroll-grid">
        <div className="enroll-course-card">
          <img
            src={course.image}
            alt={course.title}
            className="enroll-course-image"
          />

          <div className="enroll-course-content">
            <div className="enroll-course-badge">Enrollment</div>
            <h1 className="enroll-course-title">{course.title}</h1>
            <p className="enroll-course-subtitle">{course.subtitle}</p>
            <p className="enroll-course-price">${course.price}</p>
          </div>
        </div>

        <div className="enroll-form-panel">
          <h2 className="enroll-form-title">Join This Course</h2>
          <p className="enroll-form-subtitle">
            Complete the form below and start your AI learning journey.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="enroll-form-group">
              <label className="enroll-form-label">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="enroll-form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="enroll-form-group">
              <label className="enroll-form-label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="enroll-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="enroll-form-group">
              <label className="enroll-form-label">Your Goal</label>
              <textarea
                placeholder="Why do you want to join this course?"
                className="enroll-form-textarea"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>

            {error && <p className="enroll-error">{error}</p>}

            <button type="submit" className="enroll-submit-button">
              Submit Enrollment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enroll;