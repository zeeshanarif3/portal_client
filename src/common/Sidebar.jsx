import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css"; // Ensure you have the appropriate styles

const Sidebar = ({ onClose }) => {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <aside id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <li>
              <p className="dme_logo">Admin</p>
            </li>
            <div id="close-sidebar" onClick={onClose}>
              <FaTimes />
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <Link to="/dashboard">
                  <img src="/assets/img/house.svg" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/patient-list">
                  <img src="/assets/img/patient.svg"  />
                  <span>Manage Patients</span>
                </Link>
              </li>
              <li>
                <Link to="/staff-list">
                  <img src="/assets/img/staff.svg" />
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
