import { useState } from "react";
import axios from "axios";

interface RegisterProps {
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<number>>;
}

function Register({ setMain, setUser }: RegisterProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleClickRegister() {
    const response = await axios.post(
      `https://zagadnieniator.onrender.com/register`,
      {
        username: username,
        password: password,
      }
    );

    if (response.data.user) {
      setUser(response.data.user);
      setMain("userSets");
    } else {
      alert(response.data.message);
    }
  }

  function handleClickLogin() {
    setMain("login");
  }

  return (
    <main className="register">
      <h1>Join Fish Tank now!</h1> <label htmlFor="username">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
      />
      <button onClick={handleClickRegister}>Sign up!</button>
      <p>Already have an account?</p>
      <button onClick={handleClickLogin}>Sign in!</button>
    </main>
  );
}

export default Register;
