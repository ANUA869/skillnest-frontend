import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 FETCH COURSES
  useEffect(() => {
    axios
      .get("https://skillnest-backend-g385.onrender.com/api/courses") // ✅ correct URL
      .then((res) => {
        console.log("API DATA:", res.data);

        // ✅ ensure array (VERY IMPORTANT)
        setCourses(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setCourses([]);
      });
  }, []);

  // 🔥 ENROLL FUNCTION
  const handleEnroll = async (courseId) => {
    try {
      if (!user) {
        alert("Please login first ❌");
        return;
      }

      const res = await axios.post(
        "https://skillnest-backend-g385.onrender.com/api/courses/enroll", // ✅ fixed URL
        {
          userId: user._id,
          courseId,
        }
      );

      alert(res.data.message);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>All Courses 📚</h2>

      {/* ✅ SAFE CHECK */}
      {courses.length === 0 ? (
        <h3>No courses available ❌</h3>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {(Array.isArray(courses) ? courses : []).map((course) => (
            <div
              key={course._id}
              style={{
                width: "250px",
                padding: "20px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <h4>₹{course.price}</h4>

              <button
                onClick={() => handleEnroll(course._id)}
                disabled={!user}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: user ? "#2563eb" : "gray",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: user ? "pointer" : "not-allowed",
                }}
              >
                {user ? "Enroll" : "Login to Enroll"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;