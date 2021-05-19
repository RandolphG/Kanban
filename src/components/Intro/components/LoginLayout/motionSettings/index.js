/* motion settings for loginLayout elements */

const transition = { duration: 0.75 };

export const loginLayout = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition },
  exit: { opacity: 0, transition: { duration: 2.0 } },
};

export const socialAnimation = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { y: -30, opacity: 0, transition },
};

export const dividerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const input = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { x: -30, opacity: 0, transition },
};

export const stayLoggedIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const signInButton = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition },
  exit: { y: 30, opacity: 0, transition },
};
