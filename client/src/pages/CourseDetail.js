import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5001/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      })
      .catch((error) => {
        console.log("Error fetching course detail:", error);
      });
  }, [id]);

  if (!course) {
    return <h2 className="course-detail-loading">Loading...</h2>;
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-grid">
        <div className="course-detail-image-wrap">
          <img
            src={course.image}
            alt={course.title}
            className="course-detail-image"
          />
        </div>

        <div className="course-detail-panel">
          <div className="course-detail-badge">AI Bootcamp</div>

          <h1 className="course-detail-title">{course.title}</h1>

          <p className="course-detail-subtitle">{course.subtitle}</p>

          <div className="course-detail-section">
            <h3 className="course-detail-section-title">Course Content</h3>
            <ul className="course-detail-list">
              {course.content?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="course-detail-section">
            <h3 className="course-detail-section-title">Best For</h3>
            <p className="course-detail-audience">{course.audience}</p>
          </div>

          <div className="course-detail-footer">
            <div className="course-detail-price-wrap">
              <p className="course-detail-price-label">Course Fee</p>
              <h2 className="course-detail-price">${course.price}</h2>
            </div>

            <Link
              to={`/enroll/${course._id}`}
              className="course-detail-button"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;