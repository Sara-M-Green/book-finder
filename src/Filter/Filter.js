import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    render(){
        return (
            <div className="filters">
                <label>Print Type:</label>
                <select onChange={e => this.props.handlePrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value ="books">Book</option>
                    <option value="magazines">Magazine</option>
                </select>
            </div>
        );
    }
}

export default Filter;