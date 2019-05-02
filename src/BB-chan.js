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

    onSearchChange(event) {
        console.log(event.target.value);
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase);
        })
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