import React from "react";
import "./row.css";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  console.log("number")
  console.log(contact.adress)
  return (
    <tr>
      {/* <td>{contact.fullName}</td> */}
      <td>{contact.phone_number}</td>
      <td>{contact.email}</td>
      {/* <td>{contact.password}</td> */}
      <td>{contact.adress}</td>
      <td>
        <button
          type="button"
          className="button_delete"
          onClick={() => handleDeleteClick(contact.ID)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
