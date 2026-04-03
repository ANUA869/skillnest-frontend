import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://skillnest-backend-g385.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login successful 🎉");

      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Login failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;