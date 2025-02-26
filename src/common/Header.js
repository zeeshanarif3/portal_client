import React from "react";
import "./Header.css"; 
import imglogo from "../assets/img/employee.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav_collapse collapse navbar-collapse" id="navbarSupportedContent">
        <div className="row width_100">
          <div className="col-12 col-md-12 col-lg-12 padd_3">
            <ul className="navbar-nav navbar_nav mr-auto">
              <li className="nav-item bell_icon">
                {/* Notification Bell Icon (if needed) */}
              </li>
              <li className="nav-item welcome_user">
                <span>
                  Welcome Back! <strong>{userName}</strong>
                </span>
              </li>
              <li className="nav-item dropdown user_logout">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={imglogo} alt="User" />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" onClick={handleLogout} href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

