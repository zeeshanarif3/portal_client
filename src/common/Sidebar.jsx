import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Header from "./Header";
import "./Sidebar.css";
import React, { useState, useEffect } from 'react';

const Sidebar = ({ onClose, userName, onLogout }) => {
  const [userRole, setUserRole] = useState("");

  
  useEffect(() => {
    const userdata = localStorage.getItem("user");
    if (userdata) {
      try {
        const userObj = JSON.parse(userdata);
        setUserRole(userObj.role === 0 ? "Admin" : "Trainer");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div className="page-wrapper chiller-theme toggled">
      {/* Include the Header above the Sidebar */}
      <Header userName={userName} onLogout={onLogout} />

      <aside id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <li>
              <p className="dme_logo">{userRole}</p>
            </li>
            <div id="close-sidebar" onClick={onClose}>
              <FaTimes />
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <Link to="/dashboard">
                  <img src="" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/patient-list">
                  <img src="" />
                  <span>Manage Patients</span>
                </Link>
              </li>
              <li>
                <Link to="/staff-list">
                  <img src="" />
                  <span>Manage Staff</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

