import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar(props) {
  const { currentUser, onLogout } = props;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
        background: "white",
        padding: "10px 20px",
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
          position: "relative",
        }}
      >
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            onClick={handleMenuClose}
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
                width: isMobile ? "44px" : "52px",
                height: isMobile ? "44px" : "52px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "64px",
                alignItems: "center",
              }}
            >
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

              <a
                href="/#cases"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Cases
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "14px",
              }}
            >
            {!currentUser ? (
              <>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    padding: "10px 18px",
                    border: "1px solid #d9d9d9",
                    borderRadius: "4px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    background: "white",
                  }}
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    background: "#28c7cd",
                    color: "white",
                    padding: "10px 28px",
                    borderRadius: "4px",
                    fontWeight: "600",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  Log In
                </Link>
              </>
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

                  <button
                    onClick={onLogout}
                    style={{
                      background: "#28c7cd",
                      color: "white",
                      border: "none",
                      padding: "10px 18px",
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
          </>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={handleMenuToggle}
            style={{
              background: "none",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#333",
              lineHeight: "1",
            }}
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        {/* Mobile Dropdown */}
        {isMobile && menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "0",
              width: "220px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link
              to="/courses"
              onClick={handleMenuClose}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "600",
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            >
              Courses
            </Link>

            <a
              href="/#cases"
              onClick={handleMenuClose}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "600",
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            >
              Cases
            </a>

            {!currentUser ? (
              <>
                <Link
                  to="/signup"
                  onClick={handleMenuClose}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #d9d9d9",
                    textAlign: "center",
                    background: "white",
                  }}
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  onClick={handleMenuClose}
                  style={{
                    textDecoration: "none",
                    background: "#28c7cd",
                    color: "white",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  onClick={handleMenuClose}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    padding: "10px 12px",
                    borderRadius: "8px",
                  }}
                >
                  Profile
                </Link>

                <button
                  onClick={() => {
                    onLogout();
                    handleMenuClose();
                  }}
                  style={{
                    background: "#28c7cd",
                    color: "white",
                    border: "none",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;