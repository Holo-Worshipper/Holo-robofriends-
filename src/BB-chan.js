import React, { Component } from 'react';
import { robots } from './Robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js'

class BB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchfield: "",
        }
    }

    onSearchChange = (event) => {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
        })
        console.log(filteredRobots);
    }

    render() {
        return(
            <div className = "tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {this.state.robots}  />
            </div>
        );
    };
};

export default BB;