import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginLayout } from "./motionSettings";
import "./styles/_loginLayout.scss";
import ErrorBoundary from "../../../../ErrorBoundary";
import { Divider, Inputfield, Social } from "./components";
import { useDispatch } from "react-redux";
import { setName } from "../../../../store";

const LoginLayout = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    reporter: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setName({ credentials }));
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
