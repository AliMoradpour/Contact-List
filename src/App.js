import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import {
  deleteContact,
  getContacts,
  postContact,
  updateContact,
} from "./services/Requests";
import EditContact from "./Components/EditContact/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const editHandler = async (contact, id) => {
    try {
      await updateContact(contact, id);
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitHandler = async (contact) => {
    try {
      const { data } = await postContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main className="App">
      <h1>Contact List</h1>
      <Switch>
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditContact editHandler={editHandler} {...props} />
          )}
        />
        <Route path="/user/:id" component={ContactDetail} />
        <Route
          path="/add"
          render={(props) => (
            <AddContact submitHandler={submitHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <ContactList contacts={contacts} onDelete={deleteContactHandler} setContacts={setContacts}/>
          )}
        />
      </Switch>
    </main>
  );
}

export default App;
