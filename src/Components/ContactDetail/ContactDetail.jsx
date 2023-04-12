import { Link } from "react-router-dom";

const ContactDetail = ({ location }) => {
  const { contact } = location.state;
  return (
    <div>
      <p>Name is {contact.name}</p>
      <p>Email is {contact.email}</p>
      <Link to="/">Back To Contact List</Link>
    </div>
  );
};

export default ContactDetail;
