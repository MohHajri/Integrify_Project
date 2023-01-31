import React from 'react'
import { useState } from 'react'

function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    
     const handleChange = (event) => {
         setSearchTerm(event.target.value);
         onSearch(searchTerm);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
           <a className="navbar-brand"> Country Portal</a>
           <form className="form-inline" onSubmit={handleSubmit}>
                <input className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleChange}
                    value={searchTerm}>
                 </input>
                <button className="btn btn-outline-success my-2 my-sm-0"
                    type="submit" 
                >Search</button>
            </form>
      </nav>
     
  )
}

export default Navbar