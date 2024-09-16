import { ContactsProvider } from "../contexts/ContactsContext.tsx";
import ContactsContainer from "../components/ContactsContainer.tsx";
import ProductsContainer from "../components/ProductsContainer.tsx";
import ProductContainer from "../components/ProductContainer.tsx";

import "../styles/contactsList.css"
import "../styles/search.css"

const Home = () => {
    return (
        <ContactsProvider>
            <div className="content">
                <ContactsContainer />
                <ProductsContainer />
                <ProductContainer />
            </div>
        </ContactsProvider>
    );
};

export default Home;