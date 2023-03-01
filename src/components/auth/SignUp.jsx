import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formInputs
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMsg(err.response.data);
    }
  };

  return (
    <div className="sign-up">
      <span className="page-logo">
        <img src={Logo} alt="logo" />
      </span>
      <p className="sign-up-text">Create a new account</p>
      <form className="auth-form">
        {error ? errorMsg : ""}
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="create a user name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="auth-detail">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              onChange={handleChange}
            ></input>
          </div>
          <div className="auth-detail">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="auth-detail">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="FirstName LastName"
              onChange={handleChange}
            ></input>
          </div>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button className="auth-submit-btn" onClick={register}>
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
