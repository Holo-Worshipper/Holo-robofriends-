import React, { Component } from 'react';
import './BB.css';
import 'tachyons';

const BB = (props) => {
        return(
            <div className = "tc f1">
                <p>nothing so far!</p>
                <p>Welcome to React!</p>
                <hr />
                <p>{props.greeting}</p>
            </div>
        )
}

export default BB