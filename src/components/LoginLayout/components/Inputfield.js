import React from "react";
import { motion } from "framer-motion";
import { input, stayLoggedIn } from "../motionSettings";
import SignInButton from "./SignInButton";

const Inputfield = ({ handleChange, handleSubmit }) => {
  const Inputfield = () => (
    <motion.div {...input} className="input-group">
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
    </motion.div>
  );

  const StayLoggedIn = () => (
    <motion.div {...stayLoggedIn} className="login-options">
      <label className="label">
        <input className="remember-me" type="checkbox" /> Remember Me
      </label>
    </motion.div>
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <motion.div {...input} className="input-group">
        {Inputfield()}
      </motion.div>
      {StayLoggedIn()}
      {SignInButton()}
    </form>
  );
};

export default Inputfield;
