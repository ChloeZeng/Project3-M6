import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const signupData = {
      name: name,
      email: email,
      password: password,
    };

    console.log("Signup Submitted:", signupData);
    alert("Signup submitted successfully!");

    navigate("/login");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Signup Page</h1>

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
          <label>Password:</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;