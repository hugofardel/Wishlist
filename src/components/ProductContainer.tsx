
import avatar1 from "../assets/avatar1.svg"
import useContacts from "../hooks/useContacts.tsx";
import AddComment from "./AddComment.tsx";

const ProductContainer = () => {
    const { selectedProduct } = useContacts()

    if (!selectedProduct) {
        return (
            <div className="contacts-container">
                <p>Aucun produit selectionné !</p>
            </div>
        )
    }

    return (
        <div className="column">
            <div className="box">
                <div className="contacts-list">
                    <p className="product-name">{selectedProduct.name}</p>
                    <p className="product-description">{selectedProduct.description}</p>
                </div>
            </div>

            <div className="box">
                <ul className="comments">
                    {selectedProduct.comments.map((comment) => (
                        <li
                            key={comment.id}
                            className={`comment`}
                        >
                            <img src={avatar1} alt="avatar" className="author-avatar" />
                            <div className="comment-info">
                                <div className="comment-author">{comment.author}</div>
                                <div className="comment-content">&#34;{comment.content}&#34;</div>
                            </div>
                        </li>
                    ))}
                </ul>

                <AddComment key={selectedProduct.id} />
            </div>
        </div>
    );
};

export default ProductContainer;