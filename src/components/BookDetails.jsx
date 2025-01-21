import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";

function BookDetails(){
    const params = useParams();
    const book = Books.filter(book => book.id == params.id);
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
                    </>
                );
            })}
        </>
    )
}

export default BookDetails;