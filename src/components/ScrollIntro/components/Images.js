import React, { Fragment } from "react";
import { imageSection } from "../assets";

const Images = () => (
  <Fragment>
    {imageSection.map(({ className, imgUrl, height, width }, idx) => (
      <image
        key={idx}
        className={className}
        xlinkHref={imgUrl}
        width={width}
        height={height}
      />
    ))}
  </Fragment>
);

export default Images;
