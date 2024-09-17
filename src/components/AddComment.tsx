import { useState } from "react";
import useContacts from "../hooks/useContacts.tsx";


const AddComment = () => {
    const { handleAddComment } = useContacts();
    const [newComment, setNewComment] = useState<string>("");

    function handleClick() {
        handleAddComment(newComment)
        setNewComment("")
    }

    return (
        <div className="add-comment">
            <textarea rows={5} placeholder="Votre commentaire..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <button className="btn" onClick={handleClick}>Ajouter un commentaire</button>
        </div>
    );
};

export default AddComment;