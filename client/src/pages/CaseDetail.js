import { useParams, Link } from "react-router-dom";
import cases from "../data/cases";

function CaseDetail() {
  const { id } = useParams();
  const caseItem = cases.find((item) => item.id === Number(id));

  if (!caseItem) {
    return (
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        <h1>Case Not Found</h1>
        <p>The case you are looking for does not exist.</p>
        <Link
          to="/#cases"
          style={{
            display: "inline-block",
            marginTop: "16px",
            textDecoration: "none",
            color: "#28c7cd",
            fontWeight: "700",
          }}
        >
          Back to Cases
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#f7f9f8", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px 72px" }}>
        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <Link
            to="/#cases"
            style={{
              textDecoration: "none",
              color: "#28c7cd",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            ← Back to Cases
          </Link>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
            marginBottom: "28px",
          }}
        >
          <img
            src={caseItem.image}
            alt={caseItem.title}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <div style={{ padding: "32px 28px" }}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#28c7cd",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontSize: "14px",
              }}
            >
              {caseItem.category}
            </p>

            <h1
              style={{
                margin: "0 0 14px",
                fontSize: "42px",
                color: "#1f1f1f",
              }}
            >
              {caseItem.title}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#555",
                maxWidth: "860px",
              }}
            >
              {caseItem.description}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
            }}
          >
            <section style={{ marginBottom: "28px" }}>
              <h2 style={{ margin: "0 0 12px", fontSize: "28px", color: "#1f1f1f" }}>
                Project Overview
              </h2>
              <p style={{ margin: 0, lineHeight: "1.9", color: "#666" }}>
                {caseItem.overview}
              </p>
            </section>

            <section style={{ marginBottom: "28px" }}>
              <h2 style={{ margin: "0 0 12px", fontSize: "28px", color: "#1f1f1f" }}>
                Challenge
              </h2>
              <p style={{ margin: 0, lineHeight: "1.9", color: "#666" }}>
                {caseItem.challenge}
              </p>
            </section>

            <section style={{ marginBottom: "28px" }}>
              <h2 style={{ margin: "0 0 12px", fontSize: "28px", color: "#1f1f1f" }}>
                Solution
              </h2>
              <p style={{ margin: 0, lineHeight: "1.9", color: "#666" }}>
                {caseItem.solution}
              </p>
            </section>

            <section>
              <h2 style={{ margin: "0 0 12px", fontSize: "28px", color: "#1f1f1f" }}>
                Outcome
              </h2>
              <p style={{ margin: 0, lineHeight: "1.9", color: "#666" }}>
                {caseItem.outcome}
              </p>
            </section>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                margin: "0 0 18px",
                fontSize: "22px",
                color: "#1f1f1f",
              }}
            >
              Project Info
            </h3>

            <div style={{ marginBottom: "16px" }}>
              <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#888" }}>Role</p>
              <p style={{ margin: 0, fontWeight: "700", color: "#333" }}>{caseItem.role}</p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#888" }}>Duration</p>
              <p style={{ margin: 0, fontWeight: "700", color: "#333" }}>{caseItem.duration}</p>
            </div>

            <div>
              <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#888" }}>Tools</p>
              <p style={{ margin: 0, fontWeight: "700", color: "#333", lineHeight: "1.8" }}>
                {caseItem.tools}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetail;