import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInEditMode,
  handleCancel,
  handleDelete,
  handleEdit,
  handleSave,
  onCancel,
  onEdit,
} from "../store";
import { deleteCard } from "../../../store/actions";

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
        dispatch(onCancel({ card: card }));
      }}
    >
      Cancel
    </button>
  );

  const DeleteButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        console.log(listID);
        console.log(card.id);

        // dispatch(deleteCard(card.id, listID));
        // dispatch(setDeleteCard(id, listID, index));
        // dispatch(handleNotification({ message: "Deleted Task." }));
        // dispatch(handleDelete(index));
      }}
    >
      delete
    </button>
  );

  const EditButton = () => (
    <button
      className="btn-cancel"
      onClick={() => {
        dispatch(onEdit({ card: card }));
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
