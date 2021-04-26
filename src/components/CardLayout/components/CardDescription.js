import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempInfo, handleInputChange } from "../store";

const CardDescription = ({ card }) => {
  const dispatch = useDispatch();
  const tempInfo = useSelector(getTempInfo);

  return (
    <div className="cardLayout__description">
      {card.isInEditMode ? (
        <input
          className="input-value"
          type="text"
          name="description"
          id="description"
          value={tempInfo.description}
          onChange={(event) =>
            dispatch(
              handleInputChange({ [event.target.name]: event.target.value })
            )
          }
        />
      ) : (
        card.description
      )}
    </div>
  );
};

export default CardDescription;
