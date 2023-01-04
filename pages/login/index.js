import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const result = await axios.post("http://localhost:8181/api/auth/login", {
        email,
        password,
      });
      const data = await result.data.token;

      console.log("token", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label>
        Email :{" "}
        <input
          type="text"
          placeholder="example@gmail.com"
          onChange={handleEmail}
        ></input>
      </label>
      <br />
      <label>
        Password :{" "}
        <input
          type="password"
          placeholder="enter your password..."
          onChange={handlePassword}
        ></input>
      </label>

      <button onClick={handleLogin}> Login </button>
    </div>
  );
}

export default Login;
