import { useEffect, useState } from "react";
import axios from "axios";
import { FaBook, FaCheckCircle, FaUser } from "react-icons/fa";

function Dashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 FETCH ENROLLED COURSES
  useEffect(() => {
    if (!user) return;

    axios
      .get(
        `https://skillnest-backend-g385.onrender.com/api/courses/enrolled/${user._id}`
      )
      .then((res) => {
        setEnrolledCourses(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setEnrolledCourses([]);
      });
  }, [user]); // ✅ FIXED DEPENDENCY

  if (!user) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Please login first ❌</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Welcome Back 👋</h2>
        <p style={{ color: "#555" }}>
          Continue your learning journey with SkillNest
        </p>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <FaBook size={30} color="#2563eb" />
          <h3>Total Courses</h3>
          <p style={numberStyle}>--</p>
        </div>

        <div style={cardStyle}>
          <FaUser size={30} color="#22c55e" />
          <h3>Enrolled</h3>
          <p style={numberStyle}>{enrolledCourses.length}</p>
        </div>

        <div style={cardStyle}>
          <FaCheckCircle size={30} color="#f59e0b" />
          <h3>Completed</h3>
          <p style={numberStyle}>0</p>
        </div>
      </div>

      {/* COURSES */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Your Courses</h3>

        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <div
              key={course._id}
              style={{
                padding: "12px",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{course.title}</span>

              <button
                style={{
                  padding: "6px 12px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Continue
              </button>
            </div>
          ))
        ) : (
          <p>No enrolled courses yet ❌</p>
        )}
      </div>
    </div>
  );
}

/* STYLES */
const cardStyle = {
  flex: "1",
  minWidth: "200px",
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const numberStyle = {
  fontSize: "26px",
  fontWeight: "bold",
  marginTop: "10px",
};

export default Dashboard;