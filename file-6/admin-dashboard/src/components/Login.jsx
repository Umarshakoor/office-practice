import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handLogin = () => {
    onLogin(username);
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handLogin}>LogIn</button>
    </div>
  );
};

export default Login;
