import { motion } from "framer-motion";
import { signInButton } from "../motionSettings";
import React from "react";

const SignInButton = () => (
  <motion.button
    {...signInButton}
    className="button__signin-button"
    type="submit"
  >
    Sign in
  </motion.button>
);

export default SignInButton;
