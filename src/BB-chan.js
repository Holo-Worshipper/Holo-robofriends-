import React from 'react';
import { robots } from './Robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js'

const BB = (props) => {
    return(
        <div>
            <h1>Robofriends</h1>
            <SearchBox />
            <CardList robots = {robots}  />
        </div>
    );
}

export default BB;