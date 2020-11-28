import React, { Component } from 'react';
import './ResultItem.css';

export default function ResultItem(props) {
    return(
       <li>
            <img src={props.book.image} />
            <h2>{props.book.title}</h2>
            <h3>{props.book.author}</h3>
            <p>{props.book.description}</p>
        </li>
    )
}