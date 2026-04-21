function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "20px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <p>Platform Logo</p>

      <div style={{ margin: "10px 0" }}>
        <span style={{ marginRight: "15px" }}>About</span>
        <span style={{ marginRight: "15px" }}>Contact</span>
        <span>Terms</span>
      </div>

      <p style={{ fontSize: "12px" }}>
        CompanyName © 202X. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;