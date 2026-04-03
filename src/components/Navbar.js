import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#facc15" : "white", // yellow active
    margin: "10px",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#1e293b",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "white" }}>SkillNest</h2>

      {/* Links */}
      <div>
        <Link to="/" style={linkStyle("/")}>
          Home
        </Link>

        <Link to="/courses" style={linkStyle("/courses")}>
          Courses
        </Link>

        <Link to="/login" style={linkStyle("/login")}>
          Login
        </Link>

        <Link to="/dashboard" style={linkStyle("/dashboard")}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;