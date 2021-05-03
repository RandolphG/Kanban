import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { dashboardAnimation } from "./motionSettings";
import { Logo } from "../Common";
import "./styles/_loginLayout.scss";

const LoginLayout = memo(() => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    reporter: "",
  });

  function handleLogin() {
    history.push("/dashboard");
  }

  async function handleSubmit(e) {
    handleLogin();
  }

  function handleChange(e) {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const GoogleSignIn = () => (
    <button className="button__google-sign-in">Sign in with Google</button>
  );

  const TwitterSignIn = () => (
    <button className="button__alternative-options">
      <svg viewBox="0 0 24 24" className="button__alternative-options__icon">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    </button>
  );

  const SignIn = () => (
    <button className="button__signin-button" type="submit">
      Sign in
    </button>
  );

  const SocialButtons = () => (
    <div className="alternative-sign-in">
      <GoogleSignIn />
      <TwitterSignIn />
    </div>
  );

  const FormAndInput = () => (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <input
          className="input-group__input"
          onChange={handleChange}
          type="text"
          name="reporter"
          id="reporter"
          placeholder="&nbsp;"
          required
        />
        <label className="input-group__label">Reporter</label>
      </div>
      <div className="login-options">
        <label className="label">
          <input className="remember-me" type="checkbox" /> Remember Me
        </label>
      </div>
      <SignIn />
    </form>
  );

  return (
    <motion.div {...dashboardAnimation} key="login" className="login">
      <motion.div {...dashboardAnimation} className="login_border">
        <div className="login_border__container">
          <Logo />
          {SocialButtons()}
          <hr className="login_border__container__divider" />
          {FormAndInput()}
        </div>
      </motion.div>
    </motion.div>
  );
});

export default LoginLayout;
