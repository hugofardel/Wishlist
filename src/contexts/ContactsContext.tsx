import { createContext, useState } from 'react';
import { Contact } from '../types/contact.ts';
import { Comment, Product } from '../types/product.ts';

interface ContextInterface {
    selectedContact: Contact | null;
    selectedProduct: Product | null;
    products: Product[];
    handleSelectContact: (contact: Contact) => void;
    handleSelectProduct: (product: Product) => void;
    handleAddComment: (content: string) => void;
}

interface propsContactsProvider {
    children: JSX.Element
}

const defaultContext: ContextInterface = {
    selectedContact: null,
    selectedProduct: null,
    products: [],
    handleSelectContact: () => { },
    handleSelectProduct: () => { },
    handleAddComment: () => { },
};

const ContactsContext = createContext<ContextInterface>(defaultContext)

const ContactsProvider = ({ children }: propsContactsProvider) => {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [products, setProducts] = useState<Product[]>([])

    function handleSelectContact(contact: Contact) {
        setSelectedContact(contact);
        setProducts(contact.products);
        setSelectedProduct(null);
    }

    function handleSelectProduct(product: Product) {
        setSelectedProduct(product);
    }

    function handleAddComment(content: string) {
        const newComment: Comment = { id: "1", author: "Moi", content: content };
        const listComments: Comment[] = selectedProduct ? selectedProduct.comments : [];
        if (selectedProduct !== null && selectedProduct !== undefined) {
            setSelectedProduct((current) => ({
                ...current!,
                comments: [...listComments, newComment]
            }));
        }
    }

    return (
        <ContactsContext.Provider
            value={{
                selectedContact,
                selectedProduct,
                products,
                handleSelectContact,
                handleSelectProduct,
                handleAddComment
            }}
        >
            {children}
        </ContactsContext.Provider>
    )
}


export { ContactsProvider, ContactsContext };