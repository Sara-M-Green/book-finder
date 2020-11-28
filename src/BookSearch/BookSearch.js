import React, { Component } from 'react';
import './BookSearch.css';

class BookSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: ""
        }
    }

    updateSearchQuery(searchQuery) {
        this.setState({
            searchQuery: searchQuery
        })
    }

    render(){
        return(
            <div className="booksearch">
                <form 
                    className="booksearch__form"
                    onClick={ submitEvent => this.props.handleSubmit(submitEvent, this.state.searchQuery)}>
                    <label htmlFor="search">Search: </label>
                    <input 
                        type="text"
                        name="search"
                        id="search"
                        onChange={e => this.updateSearchQuery(e.target.value)}
                        ></input>
                    <button 
                        className="booksearch__button"
                        type="submit"
                        >
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default BookSearch;