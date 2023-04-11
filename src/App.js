import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const submitHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <main className="App">
      <h1>Contact List</h1>
      <AddContact submitHandler={submitHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </main>
  );
}

export default App;
