function Profile(props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      {props.currentUser ? (
        <div>
          <h2>Welcome, {props.currentUser.name}</h2>
          <p>Email: {props.currentUser.email}</p>
        </div>
      ) : (
        <p>Please login first.</p>
      )}
    </div>
  );
}

export default Profile;