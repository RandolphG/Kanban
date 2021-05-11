import React from "react";

const Topbar = ({ setIsEditing, listTitle, handleDeleteList }) => (
  <div className="listLayout_section_header_elements">
    <div
      onClick={() => setIsEditing(true)}
      className="listLayout_section_header_elements_listTitle"
    >
      {listTitle}
    </div>
    <div
      className="listLayout_section_header_elements_deleteButton"
      onClick={handleDeleteList}
    >
      delete
    </div>
  </div>
);

export default Topbar;
