import { showFilterPanel } from "../../../BoardLayout";
import React from "react";
import { useDispatch } from "react-redux";

const CloseButton = ({ toggle }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="closeButton"
      onClick={() => {
        toggle();
        dispatch(showFilterPanel());
      }}
    >
      confirm
    </button>
  );
};

export default CloseButton;
