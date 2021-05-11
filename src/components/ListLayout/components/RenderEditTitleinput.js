import React from "react";

const renderEditTitleInput = ({
  handleFinishEditing,
  listTitle,
  handleChange,
  handleFocus,
}) => {
  return (
    <form onSubmit={handleFinishEditing}>
      <input
        className="listLayout_section_header_listTitleEditableInput"
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onFocus={handleFocus}
        onBlur={handleFinishEditing}
      />
    </form>
  );
};

export default renderEditTitleInput;
