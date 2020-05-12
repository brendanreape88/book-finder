import React from 'react'
import Book from '/Users/brendanreape/Projects/book-finder/src/Book/Book.js'

class BookList extends React.Component {
    render() {
        /*const title = this.state.bookData.items.volumeInfo.title;
        const authors = this.state.bookData.items.volumeInfo.authors;
        const amount = this.state.bookData.items.saleInfo.retailPrice.amount;
        const currency = this.state.bookData.items.saleInfo.retailPrice.currencyCode;
        const description = this.state.bookData.items.volumeInfo.description;*/
        
        /*const book = this.props.state.bookData
            .map(<Book
                title={title}
                authors={authors}
                amount={amount}
                currency={currency}
                description={description} />)*/
        return (
            <div>
                <Book />
            </div>
        )
    }
}

export default BookList