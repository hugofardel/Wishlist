import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext.tsx";

function useContacts() {
    const context = useContext(ContactsContext);
    if (context === undefined)
        throw new Error("ContactsContext was used outside the ContactsProvider");
    return context;
}

export default useContacts;