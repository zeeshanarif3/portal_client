import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import TrainerFormModal from "./TrainerFormModal";
import "./TrainerList.css";

const TrainerList = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [data, setData] = useState([
    { S_NO: 1, Name: "Amit Rai", Email: "amit@yopmail.com", Contact_No: "9876543210", Expertise: "Technical", Status: "Active", _id: "1" },
    { S_NO: 2, Name: "Zeeshan Arif", Email: "zeeshan@yopmail.com", Contact_No: "9876543210", Expertise: "Technical", Status: "Inactive", _id: "2" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTrainer, setCurrentTrainer] = useState(null);

  const handleSelectAll = (checked) => {
    setSelectAllChecked(checked);
    setSelectedCheckboxes(checked ? data.map((_, index) => index + 1) : []);
  };

  const handleCheckboxChange = (index) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleAddClick = () => {
    setCurrentTrainer(null);
    setModalOpen(true);
  };

  const handleEditClick = (trainer) => {
    setCurrentTrainer(trainer);
    setModalOpen(true);
  };

  return (
    <div className="trainer-list-container">
      <h2 className="trainer-list-title">Trainer List</h2>
      {/* <button className="add-button" onClick={handleAddClick}>+ Add Trainer</button> */}
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={selectAllChecked} onChange={(e) => handleSelectAll(e.target.checked)} />
              </th>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Expertise</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" checked={selectedCheckboxes.includes(index + 1)} onChange={() => handleCheckboxChange(index + 1)} />
                </td>
                <td>{item.S_NO}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Contact_No}</td>
                <td>{item.Expertise}</td>
                <td className={`status ${item.Status.toLowerCase()}`}>{item.Status}</td>
                <td className="action-buttons">
                  <IoMdAdd className="icon add" onClick={handleAddClick} />
                  <MdOutlineModeEdit className="icon edit" onClick={() => handleEditClick(item)} />
                  <MdOutlineDelete className="icon delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit */}
      {modalOpen && (
        <TrainerFormModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          trainer={currentTrainer}
          setData={setData}
        />
      )}
    </div>
  );
};

export default TrainerList;
