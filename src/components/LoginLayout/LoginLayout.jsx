import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginLayout } from "./motionSettings";
import "./styles/_loginLayout.scss";
import ErrorBoundary from "../../ErrorBoundary";
import { Divider, Inputfield, Social } from "./components";

const LoginLayout = memo(() => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    reporter: "",
  });

  async function handleSubmit(e) {
    history.push("/dashboard");
  }

  function handleChange(e) {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <ErrorBoundary>
      <motion.div {...loginLayout} key="login" className="login">
        <div className="login_border">
          <div className="login_border__container">
            {Social()}
            {Divider()}
            {Inputfield({ handleSubmit, handleChange })}
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
});

export default LoginLayout;
