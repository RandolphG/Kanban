import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInEditMode, getTempInfo, handleInputChange } from "../store";

const options = [
  { value: "Randolph" },
  { value: "Anton" },
  { value: "Pavao" },
  { value: "Tihomir" },
  { value: "Alen" },
];

const CardAssignee = ({ card }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);
  const tempInfo = useSelector(getTempInfo);

  // console.log(`\ninEditMode ASSIGNEE : -->`, inEditMode);

  return (
    <div className="assignee_type">
      {inEditMode.status && inEditMode.rowKey === card.key ? (
        <select
          className="assignee_type__select"
          name="assignee"
          id="assignee"
          value={tempInfo.assignee}
          onChange={(event) =>
            dispatch(
              handleInputChange({ [event.target.name]: event.target.value })
            )
          }
        >
          {options &&
            options.map(({ value }, idx) => (
              <option
                className="assignee_type__select_option"
                key={`selection-${idx}`}
                value={value}
              >
                {value}
              </option>
            ))}
        </select>
      ) : (
        card.assignee
      )}
    </div>
  );
};

export default CardAssignee;
