const ContactList = ({contacts}) => {
    return ( 
        <div>
        {console.log(contacts)}
            <p>{contacts.name}</p>
        </div>
     );
}
 
export default ContactList;