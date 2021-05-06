import React from "react";

const Options = ({ projects }) => (
  <div className="dashboardLayout__options">
    <span className="dashboardLayout__options_projects">
      projects : {projects}
    </span>
    <span className="dashboardLayout__options_settings" />
    <span className="dashboardLayout__options_photo" />
  </div>
);

export default Options;
