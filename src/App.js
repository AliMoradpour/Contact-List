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

  return (
    <main className="App">
      <h1>Contact List</h1>
      <AddContact submitHandler={submitHandler} />
      <ContactList contacts={contacts} />
    </main>
  );
}

export default App;
