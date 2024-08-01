import React from "react";
import { BsCart3 } from "react-icons/bs";
import { sidebar } from "../constants";

function Sidebar({ sidebarToggle, openSidebar }) {
  return (
    <aside id="sidebar" className={sidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={openSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {sidebar.map((item) => (
          <li className="sidebar-list-item" key={item.id}>
            <a href="">
              <item.icon className="icon" /> {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
