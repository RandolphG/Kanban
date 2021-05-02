import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempInfo, handleInputChange } from "../store";

const CardTitle = ({ card }) => {
  const dispatch = useDispatch();
  const tempInfo = useSelector(getTempInfo);
  const textRef = useRef();
  const labelRef = useRef();
  const [text, setText] = useState();
  const [label, setLabel] = useState();
  const [duration, setDuration] = useState(null);
  const handleFocus = (e) => {
    e.target.select();
  };

  useEffect(() => {
    if (textRef.current && labelRef.current) {
      setText(textRef);
      setLabel(labelRef);
    }
    setDuration((card.title.length / 10) * 5);
  }, []);

  function shouldScroll() {
    if (text) {
      if (text.current.offsetWidth > label.current.offsetWidth) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <div className="cardLayout__topbar__label" ref={labelRef}>
      {card.isInEditMode ? (
        <input
          className="input-label"
          type="text"
          name="title"
          id="title"
          value={tempInfo.title}
          onFocus={handleFocus}
          onChange={(event) =>
            dispatch(
              handleInputChange({ [event.target.name]: event.target.value })
            )
          }
        />
      ) : (
        <span
          className={
            shouldScroll()
              ? "cardLayout__topbar__label_text anim"
              : "cardLayout__topbar__label_text"
          }
          style={{ "--anim-duration": `${duration}s` }}
          ref={textRef}
        >
          {card.title}
        </span>
      )}
    </div>
  );
};

export default CardTitle;
