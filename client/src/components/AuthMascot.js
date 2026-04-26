import "./AuthMascot.css";

function AuthMascot({ mood = "normal", pupilOffset = { x: 0, y: 0 }, isMobile = false }) {
  return (
    <div
      className="auth-mascot-wrap"
      style={{
        width: isMobile ? "220px" : "290px",
        height: isMobile ? "220px" : "280px",
      }}
    >
      <div className="auth-mascot-float auth-mascot-float-1" />
      <div className="auth-mascot-float auth-mascot-float-2" />
      <div className="auth-mascot-float auth-mascot-float-3" />

      <div
        className={`auth-mascot-body ${mood === "shy" ? "is-shy" : ""}`}
        style={{
          width: isMobile ? "170px" : "210px",
          height: isMobile ? "165px" : "200px",
        }}
      >
        <div
          className={`auth-mascot-ear auth-mascot-ear-left ${mood === "shy" ? "is-shy" : ""}`}
          style={{
            width: isMobile ? "28px" : "34px",
            height: isMobile ? "44px" : "52px",
          }}
        />
        <div
          className={`auth-mascot-ear auth-mascot-ear-right ${mood === "shy" ? "is-shy" : ""}`}
          style={{
            width: isMobile ? "28px" : "34px",
            height: isMobile ? "44px" : "52px",
          }}
        />

        <div
          className="auth-mascot-face"
          style={{
            inset: isMobile ? "22px 18px 18px" : "28px 22px 20px",
          }}
        >
          <div
            className="auth-mascot-blush auth-mascot-blush-left"
            style={{
              top: isMobile ? "70px" : "82px",
              width: isMobile ? "20px" : "24px",
              height: isMobile ? "10px" : "12px",
            }}
          />
          <div
            className="auth-mascot-blush auth-mascot-blush-right"
            style={{
              top: isMobile ? "70px" : "82px",
              width: isMobile ? "20px" : "24px",
              height: isMobile ? "10px" : "12px",
            }}
          />

          <Eye
            side="left"
            mood={mood}
            pupilOffset={pupilOffset}
            isMobile={isMobile}
          />
          <Eye
            side="right"
            mood={mood}
            pupilOffset={pupilOffset}
            isMobile={isMobile}
          />

          <div
            className="auth-mascot-mouth"
            style={{
              bottom: isMobile ? "30px" : "36px",
              width: mood === "peek" ? "22px" : "26px",
              height: mood === "peek" ? "10px" : "12px",
            }}
          />
        </div>
      </div>

      <div
        className="auth-mascot-book"
        style={{
          right: isMobile ? "18px" : "28px",
          bottom: isMobile ? "22px" : "28px",
          width: isMobile ? "34px" : "40px",
          height: isMobile ? "44px" : "48px",
          fontSize: isMobile ? "16px" : "18px",
        }}
      >
        📘
      </div>
    </div>
  );
}

function Eye({ side, mood, pupilOffset, isMobile }) {
  const isLeft = side === "left";

  const eyeStyle = {
    top: isMobile ? "44px" : "54px",
    width: isMobile ? "32px" : "40px",
    height: mood === "shy" ? "8px" : isMobile ? "26px" : "32px",
    left: isLeft ? (isMobile ? "34px" : "42px") : "auto",
    right: isLeft ? "auto" : isMobile ? "34px" : "42px",
  };

  if (mood === "shy") {
    return (
      <div
        className="auth-mascot-eye auth-mascot-eye-shy"
        style={eyeStyle}
      />
    );
  }

  if (mood === "peek" && isLeft) {
    return (
      <div
        className="auth-mascot-eye auth-mascot-eye-shy"
        style={{ ...eyeStyle, height: "8px" }}
      />
    );
  }

  return (
    <div className="auth-mascot-eye" style={eyeStyle}>
      <div
        className="auth-mascot-pupil"
        style={{
          width: isMobile ? "12px" : "15px",
          height: isMobile ? "12px" : "15px",
          transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
        }}
      />
    </div>
  );
}

export default AuthMascot;