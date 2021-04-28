import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempInfo, handleInputChange } from "../store";

const options = [
  { value: "Randolph" },
  { value: "Anton" },
  { value: "Pavao" },
  { value: "Tihomir" },
  { value: "Alen" },
  { value: "Marija" },
];
const CardReporter = ({ card }) => {
  const dispatch = useDispatch();
  const tempInfo = useSelector(getTempInfo);

  return (
    <div className="reporter_type">
      {card.isInEditMode ? (
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
        card.reporter
      )}
    </div>
  );
};

export default CardReporter;
