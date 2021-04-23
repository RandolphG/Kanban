import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInEditMode, getTempInfo, handleInputChange } from "../store";

const CardTitle = ({ title, details }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);
  const tempInfo = useSelector(getTempInfo);

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="card-body__enclosure__top__td-label">
      {inEditMode.status && inEditMode.rowKey === details.key ? (
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
        title
      )}
    </div>
  );
};

export default CardTitle;
