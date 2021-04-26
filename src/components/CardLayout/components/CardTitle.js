import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempInfo, handleInputChange } from "../store";

const CardTitle = ({ card }) => {
  const dispatch = useDispatch();
  const tempInfo = useSelector(getTempInfo);

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="cardLayout__topbar_label">
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
        card.title
      )}
    </div>
  );
};

export default CardTitle;
