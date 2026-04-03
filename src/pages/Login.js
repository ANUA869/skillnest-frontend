import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://skillnest-backend-g385.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      // ✅ Save user + token
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login successful 🎉");

      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login 🔐</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          padding: "8px 12px",
          background: loading ? "gray" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* ✅ REGISTER LINK */}
      <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}
        <a href="/register" style={{ color: "#2563eb" }}>
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;