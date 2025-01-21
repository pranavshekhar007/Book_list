import "./style.css";

function Book(props){
    const {title, author, description, cover_image } = props.bookDetails;
    return(
        <>
        <div className="book-card">
            <img src={cover_image} alt="" width="200px" height="200px" className="book-cover"/>
            <div className="book-details">
                <h2 className="book-title"> {title} </h2>
                <p className="book-author">{author}</p>
                <p className="book-description">{description}</p>
            </div>    
        </div>
        </>
    )
}

export default Book;