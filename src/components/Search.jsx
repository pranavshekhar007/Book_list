import { useState } from "react"
import { Books } from "../utils/mockData";
import "./style.css";

function Search(props){
    const [searchText, setsearchText] = useState("");

    function handleSearch(){
        const filterBooks = Books.filter((book)=> book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    {props.filterFunction(filterBooks)};
    }

    return (

        <>
        <div className="search">
            <h2>Search Books</h2>
            <div>
                <input type="text" className="search-input" 
                onChange={(e) => setsearchText(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        </>
    )
}

export default Search;