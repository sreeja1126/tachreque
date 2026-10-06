import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Temporary login check
    // Later this will connect to FastAPI
    if (email === "owner@tachreque.com" && password === "123456") {
      setError("");
      navigate("/owner/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <h1>Tachreque Jewellery</h1>

      <h2>Owner Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default OwnerLogin;