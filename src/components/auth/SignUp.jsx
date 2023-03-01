import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <span className="page-logo">
        <img src={Logo} alt="logo" />
      </span>
      <p className="sign-up-text">Create a new account</p>
      <form className="auth-form">
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text"
              placeholder="create a user name"
            ></input>
          </div>
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
          <div className="auth-detail">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="FirstName LastName"
            ></input>
          </div>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button type="submit" className="auth-submit-btn">
          Sign Up
        </button>
        <p className="agreement-text">
          By creating an account you agree with our <a href="#">Terms of use</a>{" "}
          and <a href="#">privacy policy</a>
        </p>
      </form>
      <div className="switch-page">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
