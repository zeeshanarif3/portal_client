import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Header from "./Header";
import "./Sidebar.css";
import React, { useState, useEffect } from "react";

const Sidebar = ({ onClose, userName, onLogout }) => {
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {
    const userdata = localStorage.getItem("user");
    if (userdata) {
      try {
        const userObj = JSON.parse(userdata);
        setUserRole(userObj.role); 
        console.log("User Role:", userObj.role); 
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div className="page-wrapper chiller-theme toggled">
     
      <Header userName={userName} onLogout={onLogout} />

      <aside id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <li>
              <p className="dme_logo">{userRole === 0 ? "ADMIN" : "TRAINER"}</p>
            </li>
            <div id="close-sidebar" onClick={onClose}>
              <FaTimes />
            </div>
          </div>

          <div className="sidebar-menu">
            <ul>
              {userRole !== null && (
                <>
               
                  {userRole === 0 ? (
                    <>
                      <li>
                        <Link to="/dashboard">
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/trainer-list">
                          <span>Trainer</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/leave">
                          <span>Leave</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                
                      <li>
                        <Link to="/userdashboard">
                          <span>User Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings">
                          <span>Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/myleave">
                          <span>My Leave</span>
                        </Link>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;


