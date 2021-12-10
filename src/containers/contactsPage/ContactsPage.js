import React, {useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [foundDuplicate, setFoundDuplicate] = useState(false);

  useEffect(() => {
    // Check on name change, does name exist already
    let duplicateName = false;
    contacts.forEach(contact => {
      if (name === contact.name) {
        duplicateName = true;
      }
    });
    setFoundDuplicate(duplicateName);
  }, [name, contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foundDuplicate) return;
    addContact({name, phone, email})
    setName('');
    setPhone('');
    setEmail('');
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          foundDuplicateContact={foundDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
