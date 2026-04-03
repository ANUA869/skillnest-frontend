import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <h3>{course.title}</h3>

      <p style={{ color: "#555" }}>{course.description}</p>

      <Link to={`/course/${course.id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
}

export default CourseCard;