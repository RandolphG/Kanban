import React from "react";
import { Tooltip } from "../../../Common";
import "./styles/_logoutButton.scss";
import { motion } from "framer-motion";

const LogoutButton = ({ history }) => {
  function handleSignOut() {
    history.push("/");
  }

  const LogOutSvg = () => (
    <svg
      className="logout-svg"
      fill="none"
      viewBox="0 0 24 24"
      id="img__logout-24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9v-2H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9V3H5zm16.83 9.557a1 1 0 0 0-.128-1.27l-3.995-3.994a1 1 0 1 0-1.414 1.414L18.586 11H11a1 1 0 1 0 0 2h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l3.995-3.995a.997.997 0 0 0 .128-.155z"
        fill="currentColor"
      />
    </svg>
  );

  const logout = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    transition: { duration: 1.0 },
  };

  return (
    <motion.div {...logout} className="signOutButton">
      <Tooltip label="log out" />
      <div className="signOutButton_container">
        <button
          onClick={handleSignOut}
          className="signOutButton_container_button"
        >
          {LogOutSvg()}
        </button>
      </div>
    </motion.div>
  );
};

export default LogoutButton;
