import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import server from "../../apis/server";
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
      const response = await server.post("/auth/register", formInputs);
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
      {error ? <p className="err-msg">{errorMsg}</p> : ""}
      <form className="auth-form">
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formInputs.username}
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
              value={formInputs.email}
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
              value={formInputs.password}
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
              value={formInputs.name}
              placeholder="FirstName LastName"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button className="auth-submit-btn" onClick={register}>
          Sign Up
        </button>
      </form>
      <div className="switch-page">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
