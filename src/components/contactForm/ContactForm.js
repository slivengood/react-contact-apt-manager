import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  foundDuplicateContact
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" title='Please enter a valid number in format xxx-xxx-xxxx' />
      <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type='email' />
      <button type='submit' disabled={!!foundDuplicateContact}>Add new contact</button>
      {foundDuplicateContact &&
        <p style={{color: 'red'}}>Duplicate name already found in contact list.</p>
      }
    </form>
  );
};
