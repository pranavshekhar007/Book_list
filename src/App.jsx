import Booklist from "./components/Booklist"
import { Books } from "./utils/mockData"
import "./components/style.css"
import { useState } from "react"

function App() {
  const [searchText, setsearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch(){
    const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredBooks(filterBooks);
  }

  return(
    <>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input type="text" name="" id="" className="search-input" 
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button onClick={handleSearch} >Search</button>
        </div>
      </div>
      <Booklist BooksData={filteredBooks}/> 
    </>
  )  
}

export default App
