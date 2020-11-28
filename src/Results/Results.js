import React, { Component } from 'react';
import './Results.css';
import ResultItem from '../ResultItem/ResultItem';

class Results extends Component {
 

    render(){
        const error = this.props.error
        ? <p>{this.props.error}</p>
        : "";

        const listOfBooks = this.props.resultList
            .map((book, index) => <ResultItem
                book = { book }
                key={index} /> );

        return (

            <div className="results">
                {error}
                <ul>
                    {listOfBooks}
                </ul>
            </div>
        )  
         
    }
}

export default Results;