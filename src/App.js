import React, { Component } from 'react';
import './App.css';
import BookSearch from './BookSearch/BookSearch';
import Filter from './Filter/Filter';
import Results from './Results/Results';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchQuery: "",
      printType: 'all',
      error: null
    };
  }

  handleSubmit = (e, userInput) => {
    e.preventDefault();
    this.setState({
      searchQuery: userInput
    });
    this.componentDidMount();
  }

  handlePrintType = (printType) => {
    this.setState({
      printType: printType
    })
  }

  componentDidMount() {
    const query = this.state.searchQuery
    const apiKey='AIzaSyB24GtWdpmkpvgUr4pjvudj4Xgd6mnOYi0';
    const printType = this.state.printType
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=${printType}`
    
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong. Try again later")
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const resultArray = data.items.map(item => {
          return ({
            image: item.volumeInfo.imageLinks.thumbnail,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            description: item.volumeInfo.description
          })

        })
        this.setState({
          books: resultArray,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <BookSearch handleSubmit={this.handleSubmit}/>
          <Filter handlePrintType={this.handlePrintType} />
          <Results resultList={this.state.books} error={this.state.error}/>
        </main>
      </div>
    )
  }
}

export default App;