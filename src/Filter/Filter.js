import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    render(){
        return (
            <div className="filters">
                <label>Print Type:</label>
                <select>
                    <option>All</option>
                    <option>Book</option>
                    <option>Magazine</option>
                </select>

                <label>Book Type:</label>
                <select>
                    <option>All</option>
                    <option>All E-Books</option>
                    <option>Free E-Books</option>
                    <option>Paid E-Books</option>
                </select> 
            </div>
        );
    }
}

export default Filter;