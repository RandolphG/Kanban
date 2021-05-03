const ease = { ease: "easeInOut" };

const duration = 2.0;

const transition = {
  duration,
  ease,
};

export const loginAnimation = {
  initial: { opacity: 0, transition: { duration: 0.9 } },
  animate: { opacity: 1, transition: { duration: 1.0 } },
  exit: { opacity: 0, transition: { duration: 1.0 } },
};
