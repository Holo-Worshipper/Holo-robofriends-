import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid cyan', height: '800px', padding: '10px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;