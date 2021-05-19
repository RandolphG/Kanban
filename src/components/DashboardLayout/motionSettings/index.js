/* motion settings for Dashboard layout */

const transition = { duration: 1.0 };

export const dashboard = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2.0 } },
  exit: { opacity: 0, transition: { duration: 2.0 } },
};

export const title = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { y: -30, opacity: 0, transition },
};
