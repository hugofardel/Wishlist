import { Contact } from "../types/contact.ts";
import avatar1 from "../assets/avatar1.svg"
import useContacts from "../hooks/useContacts.tsx";

interface PropsContactsList {
    contactsFiltered: Contact[];
}

const ContactsList = ({ contactsFiltered }: PropsContactsList) => {
    const { selectedContact, handleSelectContact } = useContacts();

    return (
        <ul className="list">
            {contactsFiltered.map(contact => (
                <li
                    key={contact.id}
                    className={`list-item ${selectedContact && selectedContact.id === contact.id ? 'active' : ''}`}
                    onClick={() => handleSelectContact(contact)}
                >
                    <div className="item-info">
                        <img src={avatar1} alt="avatar" className="item-avatar" />
                        <span className="item-name">{contact.name}</span>
                    </div>
                    <div className="contact-products">{contact.products.length} produits</div>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList;