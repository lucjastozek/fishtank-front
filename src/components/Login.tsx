import { useState } from "react";
import axios from "axios";

interface LoginProps {
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<number>>;
}

function Login({ setMain, setUser }: LoginProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleClickLogin() {
    const response = await axios.post(
      `https://zagadnieniator.onrender.com/login`,
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

  function handleClickRegister() {
    setMain("register");
  }

  return (
    <main className="register">
      <h1>Log in</h1> <label htmlFor="username">Username</label>
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
      <button onClick={handleClickLogin}>Sign in!</button>
      <p>Or create an account</p>
      <button onClick={handleClickRegister}>Sign up!</button>
    </main>
  );
}

export default Login;
