import React, { useState } from "react";

const ListPage = ({ formData, setFormData,initialFormData }) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(formData);
  };

  const heandelCancel = () => {
    setIsEditing(false);
    setFormData(initialFormData);
  }

  return (
    <>
      <ul>
        <li>
          <strong>First Name:</strong> {formData.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {formData.lastName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>Password:</strong> {formData.password}
        </li>
        <li>
          <strong>Gender:</strong> {formData.gender}
        </li>
        <li>
          <strong>Subscribe:</strong> {formData.subscribe ? "Yes" : "No"}
        </li>
        <li>
          <strong>Interests:</strong>
          <ul>
            {formData.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Message:</strong> {formData.message}
        </li>
      </ul>
      <div>
        {isEditing ? (
          <button onClick={heandelCancel}>Cancel</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </>
  );
};

export default ListPage;
