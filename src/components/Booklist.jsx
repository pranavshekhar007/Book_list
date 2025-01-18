import Book from "./Book";
import "./style.css"

function Booklist(props){
    return (
        <div className="bookList">

            {props.BooksData.map((data) =>(
                <Book key={data.id} bookDetails={data} />
            ) )}
        </div>
    )
}

export default Booklist;