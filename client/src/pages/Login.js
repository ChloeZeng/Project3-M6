import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const loginData = {
      email: email,
      password: password,
    };

    console.log("Login Submitted:", loginData);

    props.onLogin({
      name: "Demo User",
      email: email,
    });

    alert("Login successful!");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;