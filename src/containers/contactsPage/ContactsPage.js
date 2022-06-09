import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate !== true) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    const found = contacts.find(contact => contact.name === name);
    if (found === undefined) {
      setIsDuplicate(false);
    }
    else {
      setIsDuplicate(true);
    }
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate ? 'Name already exists' : ''}
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={contacts} />
      </section>
    </div>
  );
};
