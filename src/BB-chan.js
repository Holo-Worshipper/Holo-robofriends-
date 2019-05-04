import React, { Component } from 'react';
import { robots } from './Robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js'

class BB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchfield: ''
        }
    };

    onSearchChange = (event) => {
        this.setState({ searchfield :event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <div className = "tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = { filteredRobots }  />
            </div>
        );
    };
};

export default BB;