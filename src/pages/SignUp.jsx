import { useRef, useState } from "react";
import "../style/login.scss";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      console.login("Signup error:", error);
      setError("FAILED TO SIGN UP");
    }
  }

  return (
    <form className="login-container " onSubmit={handleSubmit}>
      <h1 className="login-tittle">BROKELESS</h1>

      <h2 className="login-name">EMAIL</h2>
      <input
        className="login-name-input"
        type="email"
        placeholder="admin"
        required
        ref={emailRef}
      />
      <h2 className="login-password">PASSWORD</h2>
      <input
        className="login-password-input"
        type="password"
        placeholder="admin"
        required
        ref={passwordRef}
      />

      <button disabled={loading} className="login-submit_btn" type="submit">
        SIGN UP
      </button>
      <br />
      <div>
        HAVE AN ACCOUNT? <Link to="/">LOGIN</Link>{" "}
      </div>
      {error && <p className="">{error}</p>}
    </form>
  );
}
