import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">🏠 Home</div>
      <div className="sidebar__item">🔍 Search</div>
      <div className="sidebar__item">📩 Navigation</div>
      <div className="sidebar__item">🎥 Short Videos</div>
      <div className="sidebar__item">📝 Text</div>
      <div className="sidebar__item">🔔 Notifications</div>
      <div className="sidebar__item">➕ Create Post</div>
      <div className="sidebar__item">👤 Profile</div>
    </div>
  );
};

export default Sidebar;
