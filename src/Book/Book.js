import React from 'react'
import './Book.css'

class Book extends React.Component {
    render() {
        return (
            <div className="book-div">
                <div>
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="something" />
                </div>
                <div>
                    <h3>Super Awesome Book Title</h3>
                    <p>Author: Literary Genius</p>
                    <p>Price: $1</p>
                    <p>This is a real page turner my dude!</p>
                </div>
            </div>
        )
    }
}

export default Book