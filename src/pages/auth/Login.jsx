import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Login.css";
import { useUserData } from "../../contexts/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, googleSignIn } = useUserData();
  const { state } = useLocation();

  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formInputs);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleChange = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login">
      <span className="page-logo">
        <img src={Logo} alt="logo" />
      </span>
      <p className="sign-in-text">Sign in to your account</p>
      {state ? <p className="success">{state}</p> : ""}
      <form className="auth-form">
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formInputs.username}
              placeholder="username"
              onChange={handleChange}
            ></input>
          </div>
          <div className="auth-detail">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formInputs.password}
              placeholder="Your password"
              onChange={handleChange}
            ></input>
          </div>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button type="submit" className="auth-submit-btn" onClick={handleLogin}>
          Sign in
        </button>
      </form>
      <div className="switch-page">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
      <div className="sign-in-divider">
        <span className="lines"></span>
        <span className="or">OR</span>
        <span className="lines"></span>
      </div>
      <div className="google-btn" onClick={googleSignIn}>
        <i className="fa-brands fa-google"></i>
        <span>Sign in with Google</span>
      </div>
    </div>
  );
};

export default Login;
