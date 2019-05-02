import React, { Component } from 'react';
import { robots } from './Robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js'

const state = {
    robots: robots,
    searchfield: "",
}

class BB extends Component {
    render() {
        return(
            <div className = "tc">
                <h1>Robofriends</h1>
                <SearchBox />
                <CardList robots = {robots}  />
            </div>
        );
    };
};

export default BB;