import PropTypes from 'prop-types';
import ContactItem from "../ContactItem";

const ContactList = ({ contacts, deleteHandler}) => {
    return (
    <div>
        <ul>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteHandler={deleteHandler} />          
            ))}
        </ul>
    </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired
    ),
    deleteHandler: PropTypes.func,
}

export default ContactList;