import "./style.css";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Book(props){
    const data = useContext(userContext);
    const {title, author, description, cover_image } = props.bookDetails;
    return(
        <>
        <div className="book-card">
            <img src={cover_image} alt="" width="200px" height="200px" className="book-cover"/>
            <div className="book-details">
                <h2 className="book-title"> {title} </h2>
                <p className="book-author">{author}</p>
                <p className="book-description">{description}</p>
                <p className="book-description">{data.loggedInUser}</p>
            </div>    
        </div>
        </>
    )
}

export default Book;