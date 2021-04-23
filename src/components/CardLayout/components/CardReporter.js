import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInEditMode, getTempInfo, handleInputChange } from "../store";

const options = [
  { value: "Marija" },
  { value: "Randolph" },
  { value: "Anton" },
  { value: "Pavao" },
  { value: "Tihomir" },
  { value: "Alen" },
];

const CardReporter = ({ reporter, details }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);
  const tempInfo = useSelector(getTempInfo);

  return (
    <div className="reporter_type">
      {inEditMode.status && inEditMode.rowKey === details.key ? (
        <select
          className="reporter_type__select"
          name="reporter"
          id="reporter"
          value={tempInfo.reporter}
          onChange={(event) =>
            dispatch(
              handleInputChange({ [event.target.name]: event.target.value })
            )
          }
        >
          {options &&
            options.map(({ value }, idx) => (
              <option
                className="reporter_type__select_option"
                key={`selection-${idx}`}
                value={value}
              >
                {value}
              </option>
            ))}
        </select>
      ) : (
        reporter
      )}
    </div>
  );
};

export default CardReporter;
