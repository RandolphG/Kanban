import React from "react";
import "./styles/_image.scss";

const Image = ({ title }) => (
  <div className="image">
    <h3 className="image_title">{title}</h3>
    <figure>
      <img
        src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg"
        alt="img18"
      />
      <figcaption>
        <p>some unique description goes here ...</p>
      </figcaption>
    </figure>
  </div>
);

export default Image;
