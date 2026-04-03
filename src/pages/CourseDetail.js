import { useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Course Details</h2>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h3>Course ID: {id}</h3>

        <p>
          This is a detailed description of the course. You will learn amazing
          skills and improve your knowledge.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;