import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInEditMode, getTempInfo, handleInputChange } from "../store";

const CardDescription = ({ card }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);
  const tempInfo = useSelector(getTempInfo);

  // console.log(`\ninEditMode DESCRIPTION : -->`, inEditMode);

  return (
    <div className="description">
      {inEditMode.status && inEditMode.rowKey === card.key ? (
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
