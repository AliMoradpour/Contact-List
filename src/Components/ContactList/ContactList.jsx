import "./contactList.css";
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user.png";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contactList">
      <div className="listHeader">
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
      </div>
      {contacts ? (
        contacts.map((contact) => {
          const { name, id, email } = contact;
          return (
            <div key={id} className="item">
              <div className="userInfo">
                <img src={userImage} alt="user pic" />
                <Link
                  to={{ pathname: `user/${id}`, state: { contact: contact } }}>
                  <p>{name}</p>
                  <p>{email}</p>
                </Link>
              </div>
              <div className="btns">
                <Link to={`/edit/${id}`}>
                  <button className="edit">Edit</button>
                </Link>
                <button onClick={() => onDelete(id)}>Delete</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Add Contact</p>
      )}
    </div>
  );
};

export default ContactList;
