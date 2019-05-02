import React from 'react';
import { robots } from './Robots.js';
import CardList from './CardList.js';

const BB = (props) => {
    return(
        <CardList robots = {robots}  />
    );
}

export default BB;