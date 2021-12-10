import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} required />
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
      <button type='submit'>Add new apt</button>
    </form>
  );
};
