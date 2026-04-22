import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import cases from "../data/cases";
import "../styles/cases.css";


function Home() {
  const [courses, setCourses] = useState([]);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
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
        <section
          style={{
            minHeight: "680px",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            padding: "60px 56px",
            padding: isMobile ? "40px 20px" : "60px 56px",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <h1
              style={{
                fontSize: "54px",
                fontWeight: "700",
                lineHeight: "1.15",
                color: "#333",
                marginBottom: "20px",
                fontSize: isMobile ? "36px" : "64px",
                lineHeight: isMobile ? "1.3" : "1.15",
              }}
            >
              In the AI Era, <br /> Are You Feeling Left Behind?
            </h1>

            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#555",
                marginBottom: "22px",
              }}
            >
              Too much information, too little clarity.  
              Too much noise, not enough real direction.
            </p>

            <div
              style={{
                border: "1.5px solid #4f7b7d",
                borderRadius: "16px",
                padding: "22px 24px",
                background: "rgba(255,255,255,0.78)",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "14px",
                  color: "#666",
                }}
              >
                <span style={{ color: "#f28c52" }}>NieNieLab</span> Bootcamp helps you break
                through the AI confusion.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#666",
                  marginBottom: "10px",
                }}
              >
                We do not just teach tools. We help you understand how to bring AI into
                your life and career, and turn invisible anxiety into visible growth.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#666",
                  margin: 0,
                }}
              >
                It is time to make AI your advantage, not your pressure.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", flexDirection: isMobile ? "column" : "row",  maxWidth: "100%", }}>
              <Link
                to="/courses"
                style={{
                  textDecoration: "none",
                  background: "#28c7cd",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "4px",
                  fontWeight: "700",
                  display: "block",
                  width: isMobile ? "100%" : "auto",
                  textAlign: "center",
                  boxSizing: "border-box"
                }}
              >
                Start Learning
              </Link>

              <Link
                to="/courses"
                style={{
                  textDecoration: "none",
                  background: "white",
                  color: "#333",
                  padding: "14px 28px",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  fontWeight: "700",
                  display: "block",
                  width: isMobile ? "100%" : "auto",
                  textAlign: "center",
                  boxSizing: "border-box"
                }}
              >
                View Courses
              </Link>
            </div>
          </div>
        </section>

      {/* Courses Section */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>List Courses</h2>

        <div className="responsive-grid two-columns">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
              />
            ))}
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="cases-section">
        <h2 className="cases-title">Cases</h2>

        <div className="cases-grid">
          {cases.map((item) => (
            <div key={item.id} className="case-card">
              <img src={item.image} alt={item.title} className="case-image" />

              <div className="case-content">
                <h3>{item.title}</h3>
                <p className="case-subtitle">{item.subtitle}</p>

                <p className="case-category">{item.category}</p>
                <p className="case-desc">{item.description}</p>
              </div>
            </div>
          ))}
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