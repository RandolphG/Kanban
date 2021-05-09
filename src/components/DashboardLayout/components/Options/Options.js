import React from "react";
import { useSelector } from "react-redux";
import { getUserState } from "../../../../store";
import { UserImage } from "../UserImage";
import "./styles/_options.scss";
import { Tooltip } from "../../../Common";

/**
 * Options for the user
 * @param projects
 * @returns {JSX.Element}
 * @constructor
 */
const Options = ({ projects }) => {
  const user = useSelector(getUserState);

  return (
    <div className="options">
      <span className="options_projects">
        <Tooltip label="Projects" />
        {projects}
      </span>
      <span className="options_name">{user.userName}</span>
      <UserImage />
    </div>
  );
};

export default Options;
