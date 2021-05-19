import cloud1 from "./cloud1.webp";
import cloud2 from "./cloud2.webp";
import cloud3 from "./cloud3.webp";
import cloud1Mask from "./cloud1Mask.webp";
import sky from "./sky.webp";
import mountBg from "./mountBg.webp";
import mountFg from "./mountFg.webp";
import mountMg from "./mountMg.webp";

export { cloud1, cloud2, cloud3, cloud1Mask, sky, mountBg, mountFg, mountMg };

export const viewBox = {
  viewBox: "0 0 1200 800",
};

export const imageSection = [
  {
    className: "sky",
    imgUrl: sky,
    width: 1200,
    height: 590,
  },
  {
    className: "mountBg",
    imgUrl: mountBg,
    width: 1200,
    height: 800,
  },
  {
    className: "mountMg",
    imgUrl: mountMg,
    width: 1200,
    height: 800,
  },
  {
    className: "cloud2",
    imgUrl: cloud2,
    width: 1200,
    height: 800,
  },
  {
    className: "mountFg",
    imgUrl: mountFg,
    width: 1200,
    height: 800,
  },
  {
    className: "cloud1",
    imgUrl: cloud1,
    width: 1200,
    height: 800,
  },
  {
    className: "cloud3",
    imgUrl: cloud3,
    width: 1200,
    height: 800,
  },
];
