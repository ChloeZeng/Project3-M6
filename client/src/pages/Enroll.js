import { useState } from "react";
import { useParams } from "react-router-dom";

function Enroll(props) {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

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

    // 清空表单
    setName("");
    setEmail("");
    setGoal("");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
}

  return (
    <div style={{ padding: "20px" }}>
      <h1>Enroll Page</h1>
      <h2>Enroll for Course ID: {id}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Goal:</label>
          <br />
          <input
            type="text"
            placeholder="Why do you want to join?"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Enroll;