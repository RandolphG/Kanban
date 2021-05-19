import React from "react";
import { useSelector } from "react-redux";
import { getUserState } from "../../../../store";
import { UserImage, Time } from "./components";
import { Tooltip } from "../../../Common";
import "./styles/_userInfo.scss";

/**
 * Options for the user
 * @param projects
 * @returns {JSX.Element}
 * @constructor
 */
const UserInfoOptions = ({ projects }) => {
  const user = useSelector(getUserState);

  const NumberOfProjects = () => (
    <span className="userInfo_projects">
      <Tooltip label="Projects" />
      {projects}
    </span>
  );

  const UserName = () => <span className="userInfo_name">{user.userName}</span>;

  return (
    <div className="userInfo">
      {NumberOfProjects()}
      {Time()}
      {UserName()}
      <UserImage />
    </div>
  );
};

export default UserInfoOptions;
