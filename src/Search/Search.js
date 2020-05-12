import React from 'react'
import './Search.css'

class Search extends React.Component {

    render() {
        return (
            <div className="search-div">
                <form className="search-bar">
                    <label for="search">Search:</label>
                    <input type="text" name="search" placeholder="Gravity's Rainbow"></input>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search