import React from 'react';

const handelClick = (e) => {
  alert(e.name);
}

function MyLRImage(employee, index) {
  return (
    <div className="employee-profile" key={index}>
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={employee.imageUrl}
          alt={employee.name}
        />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{employee.name}</h2>
        <p className="profile-job-title">{employee.jobTitle}</p>
        <div className="profile-buttons">
          {/* <button className="profile-button primary" onClick={handelClick}>View</button> */}
          {/* <button className="profile-button primary" onClick={ handelClick(employee)}>View</button> */ /* always fire */}
          <button className="profile-button primary" onClick={() => handelClick(employee)}>View</button>

          <button className="profile-button secondary">Contact</button>
        </div>
      </div>
    </div>
  );
}

function ListRenderingExample(props) {
  const items = props.items;
  return (
    <div className="list-container">
      {items.map((item, index) => {
        return MyLRImage(item, index);
      })}
    </div>
  );
}

export default ListRenderingExample;
