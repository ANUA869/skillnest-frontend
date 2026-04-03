function Admin() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Dashboard</h2>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Manage Courses</h3>

        <button
          style={{
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Course
        </button>
      </div>
    </div>
  );
}

export default Admin;