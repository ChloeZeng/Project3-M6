import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthMascot from "../components/AuthMascot";
import "./Login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const signupData = {
      name,
      email,
      password,
    };

    console.log("Signup Submitted:", signupData);
    alert("Signup submitted successfully!");

    navigate("/login");
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
              NieNieLab Sign Up
            </div>

            <h1 className="auth-title">Create your account</h1>
            <p className="auth-subtitle">
              Join NieNieLab and start your learning journey with a playful AI
              companion by your side.
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
            <h2 className="auth-form-title">Sign Up</h2>
            <p className="auth-form-copy">
              Enter your information to create your NieNieLab account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="auth-field">
                <label className="auth-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  onChange={(e) => setName(e.target.value)}
                  className="auth-input"
                />
              </div>

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
                Sign Up
              </button>
            </form>

            <p className="auth-footer">
              Already have an account?{" "}
              <Link to="/login" className="auth-footer-link">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;