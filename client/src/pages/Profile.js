import MyEnrollments from "./MyEnrollments";

function Profile(props) {
  const user = props.currentUser;

  return (
    <div
      style={{
        background: "#f5f7f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0px 0px 72px",
        }}
      >
        {/* Top Dashboard Banner */}
        <div
          style={{
            background: "#dff4f3",
            padding: "28px 32px",
            marginBottom: "28px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flex: "1 1 520px",
                minWidth: "280px",
              }}
            >
              <div
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#28c7cd",
                  flexShrink: 0,
                }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>

              <div>
                <h1
                  style={{
                    fontSize: "34px",
                    margin: "0 0 8px",
                    color: "#1f1f1f",
                  }}
                >
                  Profile Dashboard
                </h1>

                {user ? (
                  <>
                    <h2
                      style={{
                        fontSize: "24px",
                        margin: "0 0 8px",
                        color: "#1f1f1f",
                      }}
                    >
                      Welcome, {user.name}
                    </h2>

                    <p
                      style={{
                        margin: "0 0 8px",
                        fontSize: "16px",
                        color: "#555",
                      }}
                    >
                      <strong>Email:</strong> {user.email}
                    </p>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        color: "#666",
                        lineHeight: "1.7",
                        maxWidth: "620px",
                      }}
                    >
                      Review your account information and keep track of the
                      courses you have joined from one place.
                    </p>
                  </>
                ) : (
                  <p>Please login first.</p>
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
            </div>
          </div>
        </div>

        {/* Enrollments Content Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "28px 24px 24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <MyEnrollments embedded={true} />
        </div>
      </div>
    </div>
  );
}

export default Profile;