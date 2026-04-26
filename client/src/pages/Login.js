import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthMascot from "../components/AuthMascot";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const loginData = {
      email,
      password,
    };

    console.log("Login Submitted:", loginData);

    props.onLogin({
      name: "Demo User",
      email,
    });

    alert("Login successful!");
  }

  function handleMouseMove(e) {
    if (focusedField === "password" && !showPassword) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = (e.clientX - centerX) / rect.width;
    const dy = (e.clientY - centerY) / rect.height;

    setPupilOffset({
      x: Math.max(-5, Math.min(5, dx * 16)),
      y: Math.max(-5, Math.min(5, dy * 16)),
    });
  }

  function handleMouseLeave() {
    setPupilOffset({ x: 0, y: 0 });
  }

  const mascotMood = useMemo(() => {
    if (focusedField === "password" && !showPassword) return "shy";
    if (focusedField === "password" && showPassword) return "peek";
    return "normal";
  }, [focusedField, showPassword]);

  return (
    <div
      className="auth-page"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="auth-shell">
        <div className="auth-visual">
          <div>
            <div className="auth-pill">
              <span className="auth-pill-dot" />
              NieNieLab Login
            </div>

            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">
              Your little learning buddy is here. Enter your details and let’s
              continue your AI journey together.
            </p>
          </div>

          <div className="auth-mascot-area">
            <AuthMascot
              mood={mascotMood}
              pupilOffset={pupilOffset}
              isMobile={isMobile}
            />
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="auth-form-inner">
            <h2 className="auth-form-title">Log In</h2>
            <p className="auth-form-copy">
              Enter your email and password to continue learning with
              NieNieLab.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="auth-field">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                />
              </div>

              <div className="auth-field">
                <label className="auth-label">Password</label>

                <div className="auth-password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField("")}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input with-toggle"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="auth-toggle"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {error && <p className="auth-error">{error}</p>}

              <button type="submit" className="auth-submit">
                Log In
              </button>
            </form>

            <p className="auth-footer">
              New here?{" "}
              <Link to="/signup" className="auth-footer-link">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;