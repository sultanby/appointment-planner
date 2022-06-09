import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key={-1} value={""} selected>No contact selected</option>
      {contacts.map((contact, index) =>(
        <option value={contact.name} key={index}>{contact.name}</option>
      ))}
    </select>
  );
};
