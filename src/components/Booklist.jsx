import {  useContext, useEffect, useState } from "react";
import Book from "./Book";
import "./style.css"
import Search from "./Search";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import userContext from "../utils/userContext";
function Booklist(){
    const [filteredBooks, setFilteredBooks] = useState([]);
    function filterSearchList(filteredSearchBooks) {
        setFilteredBooks(filteredSearchBooks);
    }

    const {setUserName} = useContext(userContext);

    const {data, error, loading} = useFetch("https://www.freetestapi.com/api/v1/books");

    // Called after component renders
    useEffect(() => {
        if(data){
            setFilteredBooks(data);
        }
    }, [data]);

    if(error){
        return <p>Error in loading Data: {error}</p>
    }
    if(loading){
        return <p>Loading..</p>
    }

    // async function fetchData(){
    //     const response = await fetch("https://www.freetestapi.com/api/v1/books");
    //     const data = await response.json();

    //     setFilteredBooks(data);

    //     console.log("Fetching data");

    //     console.log("result ", data);
    // }

    return (
        <>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
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