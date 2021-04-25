import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInEditMode,
  handleCancel,
  handleDelete,
  handleEdit,
  handleSave,
} from "../store";

const CardActionButtons = ({ listID, index, card }) => {
  const dispatch = useDispatch();
  const inEditMode = useSelector(getInEditMode);

  // console.log(`\ninEditMode ACTION BUTTONS : -->`, inEditMode);

  const SaveButton = () => (
    <button
      className="btn-save"
      onClick={() => {
        dispatch(handleSave());
      }}
    >
      Save
    </button>
  );

  const CancelButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(handleCancel());
      }}
    >
      Cancel
    </button>
  );

  const DeleteButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        // dispatch(setDeleteCard(id, listID, index));
        // dispatch(handleNotification({ message: "Deleted Task." }));
        dispatch(handleDelete(index));
      }}
    >
      delete
    </button>
  );

  const EditButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(handleEdit(card.key));
      }}
    >
      edit
    </button>
  );

  return (
    <div className="actions">
      {inEditMode.status && inEditMode.rowKey === card.key ? (
        <Fragment>
          {SaveButton()}
          {CancelButton()}
        </Fragment>
      ) : (
        <div className="actions__update">
          {DeleteButton()}
          {EditButton()}
        </div>
      )}
    </div>
  );
};

export default CardActionButtons;
