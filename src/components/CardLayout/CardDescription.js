import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInEditMode, getTempInfo, handleInputChange } from "./store";

const CardDescription = ({ description, details }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);
  const tempInfo = useSelector(getTempInfo);

  return (
    <div className="description">
      {inEditMode.status && inEditMode.rowKey === details.key ? (
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
        description
      )}
    </div>
  );
};

export default CardDescription;
