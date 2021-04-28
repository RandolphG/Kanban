import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { handleSave, onCancel, onDelete, onEdit } from "../store";
import { deleteCardFromList } from "../../ListLayout/store/list";

const CardActionButtons = ({ listID, card }) => {
  const dispatch = useDispatch();

  const SaveButton = () => (
    <button
      className="btn-save"
      onClick={() => {
        dispatch(handleSave({ card }));
      }}
    >
      Save
    </button>
  );

  const CancelButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(onCancel({ card }));
      }}
    >
      Cancel
    </button>
  );

  const DeleteButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(onDelete({ card }));
        dispatch(deleteCardFromList({ card, listID }));
      }}
    >
      delete
    </button>
  );

  const EditButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(onEdit({ card }));
      }}
    >
      edit
    </button>
  );

  return (
    <div className="actions">
      {card.isInEditMode ? (
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
