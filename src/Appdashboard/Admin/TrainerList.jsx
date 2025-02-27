import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import "./Trainer.css"; // Import CSS for proper styling

const TrainerList = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <h2>PRESCRIBER</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Staff</li>
          <li>Manage Patients</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="card-body">
          <div className="search-bar">
            <div className="search-input">
              <FaSearch className="search-icon" />
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3>Manage Patient</h3>
            <button className="btn btn-primary" onClick={() => navigate("/patient-addForm")}>
              + Add New
            </button>
          </div>
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>johndoe@example.com</td>
                  <td>123-456-7890</td>
                  <td>Active</td>
                  <td>
                    <FaEdit className="mx-2" />
                    <FaEye className="mx-2" />
                    <FaTrash className="mx-2 text-danger" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pagination-controls">
              <button className="btn">&laquo; Previous</button>
              <span className="page-number">1</span>
              <button className="btn">Next &raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerList;