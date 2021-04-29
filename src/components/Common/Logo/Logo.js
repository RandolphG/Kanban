import React from "react";
import "./styles/_logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__container">
        <p className="logo__container__text">Kanban for</p>
        <ul className="logo__container__list">
          <li className="logo__container__list__item">Me</li>
          <li className="logo__container__list__item">You</li>
          <li className="logo__container__list__item">Everyone</li>
          <li className="logo__container__list__item">LIFE!</li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
