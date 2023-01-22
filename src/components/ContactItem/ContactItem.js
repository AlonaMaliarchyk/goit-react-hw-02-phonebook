import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
const ContactItem = ({ name, number, id, deleteHandler}) => {
    return (
        <li>
            <span>{name} &nbsp;</span>
            <span>{number}&nbsp;</span>
            <button className={css.delBtn}
                type="button"
                onClick={() => deleteHandler(id)}>
                Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        deleteHandler: PropTypes.func,
}

export default ContactItem;