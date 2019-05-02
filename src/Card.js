 import React from 'react';
 import 'tachyons';

 const Card = (props) => {
     return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/test?200x200" alt="" />
            <div>
                <h2>BB</h2>
                <p>BB-chan@BBChannel.com</p>
            </div>
        </div>
     )
 }

 export default Card;