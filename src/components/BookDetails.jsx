import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function BookDetails(){
    const params = useParams();
    const book = Books.filter(book => book.id == params.id);
    const dispatch = useDispatch();

    function handleAddBook(item){
        dispatch(addItem(item))
    }

    function handleRemoveItem(){
        dispatch(removeItem());
    }

    return (
        <>
            <h1>{`Book Details for book with id ${params.id}`}</h1>
            <br />
            {book.map((book) => {
                return (
                    <>
                        <img src={book.coverImage} alt="" height="200px" width="200px"/>
                        <h2>{book.title}</h2>
                        <h3>{book.description}</h3>
                        <h4>{book.pages}</h4>
                        <button onClick={() => handleAddBook(book)}>Add to cart</button>
                        <button onClick={handleRemoveItem}>Remove item cart</button>
                    </>
                );
            })}
        </>
    )
}

export default BookDetails;