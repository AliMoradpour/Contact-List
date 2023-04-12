import { useEffect, useState } from "react";
import { getOneContact } from "../../services/Requests";

const EditContact = ({ editHandler, history , match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const editContactHandler = (e) => {
    if (!contact.name || !contact.email) {
      alert("All Fildes Are Mandatory !");
      return;
    }
    e.preventDefault();
    editHandler(contact , match.params.id);
    setContact({ name: "", email: "" });
    history.push("/");
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

  return (
    <form onSubmit={editContactHandler}>
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
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
