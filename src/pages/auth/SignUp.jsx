import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import server from "../../apis/server";
import { useUserData } from "../../contexts/AuthContext";
import "./SignUp.css";

const SignUp = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const { googleSignIn } = useUserData();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleSignUpSuccess = (successMsg) => {
    navigate("/login", { state: successMsg });
  };

  const [inputsFocus, setInputsFocus] = useState({
    username: false,
    email: false,
    password: false,
    name: false,
  });

  const handleInputFocus = (e) => {
    setInputsFocus((prevInputFocus) => {
      return { ...prevInputFocus, [e.target.name]: true };
    });
  };

  const handleInputBlur = (e) => {
    setInputsFocus((prevInputFocus) => {
      return { ...prevInputFocus, [e.target.name]: false };
    });
  };

  const [errorMsg, setErrorMsg] = useState(null);
  const [inputNotValid, setInputNotValid] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const register = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(formData.username);
    const v2 = PWD_REGEX.test(formData.password);
    if (!v1 || !v2 || formData.email.length <= 0 || formData.name.length <= 0) {
      setInputNotValid(true);
      setErrorMsg("Invalid Inputs!!");
      return;
    }
    try {
      const response = await server.post("/auth/register", formData);
      handleSignUpSuccess(response.data);
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
              value={formData.username}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></input>
            {inputsFocus.username &&
            formData.username &&
            !USER_REGEX.test(formData.username) ? (
              <span className="instructions">
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </span>
            ) : (
              ""
            )}
            {inputNotValid && formData.username.length === 0 ? (
              <span className="input-err">This field is required</span>
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={formData.email}
            ></input>
            {inputNotValid && formData.email.length === 0 ? (
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={formData.password}
            ></input>
            {inputsFocus.password &&
            formData.password &&
            !PWD_REGEX.test(formData.password) ? (
              <span className="instructions">
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
            ) : (
              ""
            )}
            {inputNotValid && formData.password.length === 0 ? (
              <span className="input-err">This field is required</span>
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={formData.name}
            ></input>
            {inputNotValid && formData.name.length === 0 ? (
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
      <div className="sign-in-divider">
        <span className="lines"></span>
        <span className="or">OR</span>
        <span className="lines"></span>
      </div>
      <div className="google-btn" onClick={googleSignIn}>
        <i className="fa-brands fa-google"></i>
        <span>Sign up with Google</span>
      </div>
    </div>
  );
};

export default SignUp;
