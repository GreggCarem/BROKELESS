import { useRef, useState } from "react";
import "../style/login.scss";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Signup error:", error); 
      setError("FAILED TO SIGN IN"); 
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
        LOGIN
      </button>
      <div>
        NEED AN ACCOUNT <Link to="/sign-up">SIGN UP</Link>{" "}
      </div>
      {error && <p className="">{error}</p>}
    </form>
  );
}
