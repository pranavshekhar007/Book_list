import {  useEffect, useState } from "react";
import Book from "./Book";
import "./style.css"
import Search from "./Search";
import { Link } from "react-router-dom";

function Booklist(){
    const [filteredBooks, setFilteredBooks] = useState([]);
    function filterSearchList(filteredSearchBooks) {
        setFilteredBooks(filteredSearchBooks);
    }

    // Called after component renders
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData(){
        const response = await fetch("https://www.freetestapi.com/api/v1/books");
        const data = await response.json();

        setFilteredBooks(data);

        console.log("Fetching data");

        console.log("result ", data);
    }
    console.log("Component rendered");

    return (
        <>
        <Search filterFunction = {filterSearchList} />
        <div className="bookList">

            {filteredBooks.map((book) =>(
                <Link to={`/book/${book.id}`} key={book.id}>
                <Book key={book.id} bookDetails={book} />
                </Link> 
            ) )}
        </div>
        </>
    )
}

export default Booklist;