import React from "react";
import { motion } from "framer-motion";
import { topbar } from "./motionSettings";
import { Logo, UserInfoOptions } from "./components";
import "./styles/_topbar.scss";

const Topbar = ({ projects }) => (
  <motion.div {...topbar} className="topbar">
    {Logo()}
    {UserInfoOptions({ projects })}
  </motion.div>
);

export default Topbar;
