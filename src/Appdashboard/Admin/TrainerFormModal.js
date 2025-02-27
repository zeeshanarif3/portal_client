import React, { useState, useEffect } from "react";
import "./TrainerForm.css";

const TrainerFormModal = ({ isOpen, onClose, trainer, setData }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contact_No: "",
    Expertise: "",
    Status: "Active",
  });

  useEffect(() => {
    if (trainer) {
      setFormData(trainer);
    } else {
      setFormData({ Name: "", Email: "", Contact_No: "", Expertise: "", Status: "Active" });
    }
  }, [trainer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setData((prevData) => {
      if (trainer) {
        return prevData.map((t) => (t._id === trainer._id ? { ...t, ...formData } : t));
      } else {
        return [...prevData, { ...formData, _id: Date.now().toString(), S_NO: prevData.length + 1 }];
      }
    });

    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>{trainer ? "Edit Trainer" : "Add Trainer"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />

          <label>Contact No:</label>
          <input type="text" name="Contact_No" value={formData.Contact_No} onChange={handleChange} required />

          <label>Expertise:</label>
          <select name="Expertise" value={formData.Expertise} onChange={handleChange} required>
            <option value="">Select Expertise</option>
            <option value="Technical">Technical</option>
            <option value="Soft Skill">Soft Skill</option>
            <option value="QA/LR">QA/LR</option>
          </select>


          <label>Status:</label>
          <select name="Status" value={formData.Status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="modal-buttons">
            <button type="submit">{trainer ? "Update" : "Add"}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainerFormModal;
