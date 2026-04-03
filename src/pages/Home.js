import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* 🔷 HERO SECTION */}
      <div
        style={{
          padding: "60px 20px",
          background: "linear-gradient(to right, #2563eb, #1e3a8a)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Learn New Skills 🚀
        </h1>
        <p style={{ fontSize: "18px" }}>
          Explore courses and grow your career with SkillNest
        </p>

        <Link to="/courses">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "white",
              color: "#2563eb",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore Courses
          </button>
        </Link>
      </div>

      {/* 🔷 FEATURED COURSES */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Featured Courses</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Course Card 1 */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Web Development</h3>
            <p>Learn HTML, CSS, JavaScript & React</p>
          </div>

          {/* Course Card 2 */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Machine Learning</h3>
            <p>Build AI models using Python</p>
          </div>

          {/* Course Card 3 */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>UI/UX Design</h3>
            <p>Design modern and user-friendly interfaces</p>
          </div>
        </div>
      </div>

      {/* 🔷 FOOTER */}
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>© 2026 SkillNest. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;