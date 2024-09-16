import avatar2 from "../assets/avatar2.svg"
import useContacts from "../hooks/useContacts.tsx"


const ProductsList = () => {
    const { products, selectedProduct, handleSelectProduct } = useContacts()

    if (products.length === 0) {
        return (
            <p>Pas de produits à afficher !</p>
        )
    }

    return (
        <ul className="list">
            {products.map((product) => {
                return (
                    <li
                        key={product.id}
                        className={`list-item ${selectedProduct && selectedProduct.id === product.id ? 'active' : ''}`}
                        onClick={() => handleSelectProduct(product)}
                    >
                        <div className="item-info">
                            <img src={avatar2} alt="avatar" className="item-avatar" />
                            <span className="item-name">{product.name}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductsList;