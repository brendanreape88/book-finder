import React from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import Filter from './Filter/Filter'
import BookList from './BookList/BookList'

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <BookList />
    </div>
  );
}

export default App;