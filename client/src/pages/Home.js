import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import "../styles/layout.css";

function Home() {
  const [courses, setCourses] = useState([]);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.log("Error fetching courses:", error);
      });
  }, []);

function handleContactSubmit(e) {
  e.preventDefault();

  const contactData = {
    name: contactName,
    email: contactEmail,
    message: contactMessage,
  };

  fetch("http://127.0.0.1:5001/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Contact API response:", data);
      alert("Message sent successfully!");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

  return (
    <div>
      {/* Hero Section */}
      <section style={{ display: "flex", padding: "40px" }}>
        <div style={{ width: "50%", background: "#ddd", height: "250px" }}></div>

        <div style={{ width: "50%", paddingLeft: "40px" }}>
          <h1>Course Enrollment Platform</h1>
          <p>enroll in your dream course today</p>

          <input
            type="text"
            placeholder="search for courses"
            style={{ padding: "10px", width: "80%" }}
          />
        </div>
      </section>

      {/* Courses Section */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>List Courses</h2>

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
      </section>

      {/* Cases Section */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Cases</h2>

        <div className="responsive-grid three-columns">
          <div style={{ border: "1px solid #ccc", padding: "20px" }}>Case Card</div>
          <div style={{ border: "1px solid #ccc", padding: "20px" }}>Case Card</div>
          <div style={{ border: "1px solid #ccc", padding: "20px" }}>Case Card</div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>

        <form style={{ maxWidth: "400px", margin: "auto" }} onSubmit={handleContactSubmit}>
          <input
            placeholder="Name"
            style={{ width: "100%", marginBottom: "10px" }}
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <input
            placeholder="Email"
            style={{ width: "100%", marginBottom: "10px" }}
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            style={{ width: "100%", marginBottom: "10px" }}
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;