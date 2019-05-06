import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from './MeltScroll';

class BB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({
                robots: users
            })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield :event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return <h1 id="loading" >Loading...</h1>
        } else {
            return(
                <div className = "tc">
                    <h1 >Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = { filteredRobots }  />
                    </Scroll>
                </div>
            );
        }

    };
};

export default BB;