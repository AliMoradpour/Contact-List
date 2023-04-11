import { useState } from "react";
import "./addContact.css";

const AddContact = ({ submitHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    if (!contact.name || !contact.email) {
      alert("All Fildes Are Mandatory !");
      return;
    }
    e.preventDefault();
    submitHandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={addContactHandler}>
      <div className="formControl">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
