import React from 'react'
import Book from '/Users/brendanreape/Projects/book-finder/src/Book/Book'

class BookList extends React.Component {
    render() {
        const book = this.state["book data"]
            .map(data => <Book title={title} authors={authors} amount={amount} currency={currency} description={description} />)

        return (
            <div>
                {book}
            </div>
        )
    }
}

export default BookList