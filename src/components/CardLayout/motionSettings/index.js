const ease = { ease: "easeInOut" };
const duration = 2.0;
const transition = {
  duration,
  ease,
};

const dashboardAnimation = {
  initial: { opacity: 0, transition: { duration: 0.9 } },
  animate: { opacity: 1, transition: { duration: 1.0 } },
  exit: { opacity: 0, transition: { duration: 1.0 } },
};

const backdropAnimation = {
  initial: { opacity: 0, transition: { duration: 0.4 } },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const modalAnimation = {
  initial: { y: 20, x: 20, opacity: 0, transition: { duration: 0.3 } },
  animate: { y: 0, x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { y: -20, x: -20, opacity: 0, transition: { duration: 0.3 } },
};

const filterPanelAnimation = {
  initial: { x: -100, opacity: 0, transition: { duration: 0.3 } },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.3 } },
};

const signUpMotionSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: { opacity: 0, transition },
};

const slideOut = {
  initial: {
    x: 10,
    opacity: 0,
    transition,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  exit: {
    x: 10,
    opacity: 0,
    transition,
  },
};

module.exports = {
  modalAnimation,
  backdropAnimation,
  dashboardAnimation,
  filterPanelAnimation,
  signUpMotionSettings,
  slideOut,
};
