import "./contactList.css";
import userImage from "../../assets/images/user.png";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contactList">
      {contacts ? (
        contacts.map((contact) => {
          const { name, id, email } = contact;
          return (
            <div key={id} className="item">
              <div className="userInfo">
                <img src={userImage} alt="user image" />
                <div>
                  <p>{name}</p>
                  <p>{email}</p>
                </div>
              </div>
              <button onClick={() => onDelete(id)}>Delete</button>
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
