import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import '../App.css';
import Scroll from '../Components/MeltScroll';

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if (!robots.length) {
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