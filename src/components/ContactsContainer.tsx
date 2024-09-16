import { useState } from "react";
import { Contact } from "../types/contact.ts";
import contacts from "../data/contacts.json"
import ContactsList from "./ContactsList.tsx";
import Search from "./Search.tsx";


const ContactsContainer = () => {
    const [contactsFiltered, setContactsFiltered] = useState<Contact[]>(contacts)

    function handleSearch(search: string) {
        if (search) {
            const filtered: Contact[] = contacts.filter((contact) => {
                const name = contact.name.toLowerCase()
                return name?.includes(search.toLowerCase())
            })
            setContactsFiltered(filtered)
        }
        else {
            setContactsFiltered(contacts)
        }
    }

    return (
        <div className="contacts-container">
            <Search onSearch={handleSearch} />
            <ContactsList contactsFiltered={contactsFiltered} />
        </div>
    );
};

export default ContactsContainer