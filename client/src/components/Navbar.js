import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar(props) {
  const { currentUser, onLogout } = props;

  return (
    <nav
      style={{
        background: "#f7f7f7",
        padding: "14px 32px",
        borderRadius: "18px",
        margin: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
            src={logo}
            alt="logo"
            style={{
                width: "52px",
                height: "52px",
                objectFit: "cover",
                borderRadius: "12px",
            }}
            />

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#7a7a7a",
              fontWeight: "700",
              fontSize: "28px",
            }}
          >

          </Link>
        </div>

        {/* Center */}
        <div style={{ display: "flex", gap: "60px" }}>
          <Link
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Courses
          </Link>

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Cases
          </Link>
        </div>

        {/* Right */}
        <div>
          {!currentUser ? (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                background: "#27c2c9",
                color: "white",
                padding: "12px 32px",
                borderRadius: "4px",
                fontWeight: "700",
                display: "inline-block",
              }}
            >
              Log In
            </Link>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Link to="/profile">Profile</Link>
              <Link to="/my-enrollments">My Enrollments</Link>
              <button onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;