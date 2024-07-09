import React from "react";
import { useState } from "react";

const ContactsBook = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDeleteContact = (name) => {
    const updateContact = contact.filter((cont) => cont.name !== name);
    setContact(updateContact);
  };

  const handleSubmitContact = (event) => {
    event.preventDefault();

    const newContact = {
      name,
      phone,
    };
    setContact([...contact, newContact]);
    setName("");
    setPhone("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitContact}>
        <h4>My contacts</h4>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {contact.map((contact, id) => {
          return (
            <li key={id}>
              {contact.name} - {contact.phone}
              <button onClick={() => handleDeleteContact(contact.name)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsBook;
