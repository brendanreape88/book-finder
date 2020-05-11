import React from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import Filter from './Filter/Filter'
import BookList from './BookList/BookList'

const key = 'AIzaSyAZlkvFYaXQ6ZVXEa-CAW6OuE59TMLFzvU'
const endPoint = 'https://www.googleapis.com/books/v1/volumes'
const exampleFetch = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAZlkvFYaXQ6ZVXEa-CAW6OuE59TMLFzvU'

///API Data
///data.items.volumeInfo.title
///data.items.volumeInfo.authors
///data.items.saleInfo.retailPrice.amount
///data.items.saleInfo.retailPrice.currencyCode
///data.items.volumeInfo.description

class App extends React.Component {
  
  state = {
    search: "",
    /*"print type": "",
    "book type": "",*/
    "book data": {}
  }

  componentDidMount() {
    fetch(exampleFetch)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong')
      }
      return res.json();
    })
    .then(data => {
      console.log(data)
      this.setState({ "book data": data })
      /*this.props.handleSomething(something)*/
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  handleSearch(event) {
    const {name, value} = event.target
    this.setState({ search: value })
  }

  handlePrintType(event) {
    const {name, value} = event.target
    this.setState({ "print type": value })
  }

  handleBookType(event) {
    const {name, value} = event.target
    this.setState({ "book type": value })
  }

  render(){
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : " ";
    
    const title = this.state["book data"].items.volumeInfo.title;
    const authors = this.state["book data"].items.volumeInfo.authors;
    const amount = this.state["book data"].items.saleInfo.retailPrice.amount;
    const currency = this.state["book data"].items.saleInfo.retailPrice.currencyCode;
    const description = this.state["book data"].items.volumeInfo.description;

    return (
      <div>
        <Header />
        <Search />
        <Filter />
        { error }
        <BookList
          title={title}
          authors={authors}
          amount={amount}
          currency={currency}
          description={description}/>
      </div>
    );
  }
  
}

export default App;