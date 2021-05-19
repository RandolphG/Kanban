import * as imgs from "../assets";
import React from "react";

const UpperSection = () => (
  <mask id="m">
    <g className="cloud1">
      <rect fill="#fff" width="100%" height="801" y="799" />
      <image xlinkHref={imgs.cloud1Mask} width="1200" height="800" />
    </g>
  </mask>
);

export default UpperSection;
