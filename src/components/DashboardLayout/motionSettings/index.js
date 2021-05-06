/* motion settings for Dashboard layout */

const transition = { duration: 1.0 };

export const dashboardLayout = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const title = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { y: -30, opacity: 0, transition },
};

export const input = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};
