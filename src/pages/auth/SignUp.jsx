import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import server from "../../apis/server";
import "./SignUp.css";

const SignUp = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [inputNotValid, setInputNotValid] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const register = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(formInputs.username);
    const v2 = PWD_REGEX.test(formInputs.password);
    if (
      !v1 ||
      !v2 ||
      formInputs.email.length <= 0 ||
      formInputs.name.length <= 0
    ) {
      setInputNotValid(true);
      return;
    }
    try {
      const response = await server.post("/auth/register", formInputs);
      console.log(response);
      setSuccess(response);
    } catch (err) {
      console.log(err);
      setErrorMsg(err.response.data);
    }
  };

  return (
    <div className="sign-up">
      <span className="page-logo">
        <img src={Logo} alt="logo" />
      </span>
      <p className="sign-up-text">Create a new account</p>
      {success ? <p className="success">{errorMsg}</p> : ""}
      {errorMsg ? <p className="err-msg">{errorMsg}</p> : ""}
      <form className="auth-form">
        <div className="user-auth-details">
          <div className="auth-detail">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="create a user name"
              required
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {inputNotValid ? (
              formInputs.username.length === 0 ? (
                <span className="input-err">This field is required</span>
              ) : (
                !USER_REGEX.test(formInputs.username) && (
                  <span className="input-err">
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </span>
                )
              )
            ) : (
              ""
            )}
          </div>
          <div className="auth-detail">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              required
              placeholder="example@mail.com"
              onChange={handleChange}
            ></input>
            {inputNotValid && formInputs.email.length === 0 ? (
              <span className="input-err">This field is required</span>
            ) : (
              ""
            )}
          </div>
          <div className="auth-detail">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              required
              placeholder="Your password"
              onChange={handleChange}
            ></input>
            {inputNotValid ? (
              formInputs.password.length === 0 ? (
                <span className="input-err">This field is required</span>
              ) : (
                !PWD_REGEX.test(formInputs.password) && (
                  <span className="input-err">
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                  </span>
                )
              )
            ) : (
              ""
            )}
          </div>
          <div className="auth-detail">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              placeholder="FirstName LastName"
              onChange={handleChange}
            ></input>
            {inputNotValid && formInputs.name.length === 0 ? (
              <span className="input-err">This field is required</span>
            ) : (
              ""
            )}
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
