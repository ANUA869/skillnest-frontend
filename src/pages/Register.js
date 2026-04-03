import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "https://skillnest-backend-g385.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);
      window.location.href = "/login";
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Registration failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /><br />

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;