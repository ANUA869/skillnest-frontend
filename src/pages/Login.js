import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://skillnest-backend-g385.onrender.com",
        form
      );

      // ✅ SAVE USER
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login successful 🎉");

      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.msg || "Login failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login 🔐</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={inputStyle}
      />

      <button onClick={handleLogin} style={btnStyle}>
        Login
      </button>
    </div>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: "10px",
  padding: "10px",
  width: "250px",
};

const btnStyle = {
  padding: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
};

export default Login;