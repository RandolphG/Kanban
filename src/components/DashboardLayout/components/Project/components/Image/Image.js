import React from "react";
import "./styles/_image.scss";

const Image = ({ title }) => (
  <div className="image">
    <figure>
      <img
        src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg"
        alt="img18"
      />
      <figcaption>
        <p>{title}</p>
      </figcaption>
    </figure>
  </div>
);

export default Image;
