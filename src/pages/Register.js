function Register() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Register</h2>

      <div
        style={{
          maxWidth: "300px",
          margin: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <input placeholder="Name" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <input placeholder="Email" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <input placeholder="Password" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;