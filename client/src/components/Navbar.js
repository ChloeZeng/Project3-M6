import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar(props) {
  const { currentUser, onLogout } = props;

  return (
    <nav
      style={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
            background: "white",
            padding: "8px 32px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        {/* Center */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            gap: "64px",
          }}
        >
          <Link
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Courses
          </Link>

          <a href="#cases">Cases</a>

          {/* <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Cases
          </Link> */}
        </div>

        {/* Right */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {!currentUser ? (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                background: "#28c7cd",
                color: "white",
                padding: "10px 32px",
                borderRadius: "4px",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Log In
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                Profile
              </Link>

              <Link
                to="/my-enrollments"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                My Enrollments
              </Link>

              <button
                onClick={onLogout}
                style={{
                  background: "#28c7cd",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "4px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;