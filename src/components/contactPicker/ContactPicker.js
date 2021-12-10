import React from "react";

export const ContactPicker = ({contacts, contact, setContact}) => {
  return (
    <select value={contact} onChange={(e) => setContact(e.target.value)}>
      <option value='none'></option>
      {contacts.map(c => (
        <option value={c.name}>{c.name} - {c.phone}</option>
      ))}
    </select>
  );
};
