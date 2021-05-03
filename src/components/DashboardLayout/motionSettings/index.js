const ease = { ease: "easeInOut" };

const duration = 2.0;

const transition = {
  duration,
  ease,
};

/* dashboard animation */
export const dashboardAnimation = {
  initial: { opacity: 0, transition },
  animate: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};
