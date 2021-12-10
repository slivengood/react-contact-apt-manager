import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ apts, addApt, contacts }) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addApt({ title, contact });
    setTitle("");
    setContact("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contacts={contacts}
          handleSubmit={handleSubmit}
          contact={contact}
          setContact={setContact}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={apts} />
      </section>
    </div>
  );
};
