import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Enroll from "./pages/Enroll";
import Profile from "./pages/Profile";
import CaseDetail from "./pages/CaseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);

  function handleLogin(userData) {
    setCurrentUser(userData);
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  function handleAddEnrollment(data) {
    setEnrollments([...enrollments, data]);
  }

  return (
    <div>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/cases/:id" element={<CaseDetail />} />
        <Route
          path="/enroll/:id"
          element={<Enroll onEnroll={handleAddEnrollment} />}
        />
        <Route
          path="/profile"
          element={
            currentUser ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;