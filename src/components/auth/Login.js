import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="page-logo">
        <img src={Logo} alt="logo" />
      </span>
      <p className="sign-in-text">Sign in to your account</p>
      <form className="auth-form">
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
            ></input>
          </div>
          <div className="auth-detail">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
            ></input>
          </div>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button type="submit" className="auth-submit-btn">
          Sign in
        </button>
      </form>
      <div className="switch-page">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
