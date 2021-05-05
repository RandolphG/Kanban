import React, { useRef, useEffect } from "react";
import "./styles/_logo.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLogoColor, getAvailableColors, setLogoColor } from "./store";

const Logo = () => {
  const dispatch = useDispatch();
  const logoColor = useSelector(getLogoColor);
  const colors = useSelector(getAvailableColors);
  const words = ["Me", "You", "Everyone", "LIFE!"];
  const listItemRef = useRef(null);

  const Title = () => (
    <p ref={listItemRef} className="logo__container__text">
      Kanban for
    </p>
  );

  const Words = () => (
    <ul className="logo__container__list">
      {words.map((word, index) => (
        <li key={index} className="logo__container__list__item">
          {word}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const changeColor = setInterval(() => {
      const color = colors[Math.floor((Math.random() * colors.length) >> 0)];
      dispatch(setLogoColor({ color }));
      listItemRef.current.style.setProperty("--textColor", logoColor);
    }, 3000);

    return () => {
      clearInterval(changeColor);
    };
  }, []);

  return (
    <div className="logo">
      <div className="logo__container">
        {Title()}
        {Words()}
      </div>
    </div>
  );
};

export default Logo;
