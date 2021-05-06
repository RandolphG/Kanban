import { Logo } from "../../Common";
import React from "react";
import { motion } from "framer-motion";
import { title } from "../motionSettings";

const Title = () => (
  <motion.div {...title} className="dashboardLayout_title">
    <Logo />
  </motion.div>
);

export default Title;
