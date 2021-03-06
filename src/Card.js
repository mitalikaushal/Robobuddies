import React from 'react';

const Card = (props) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="photo" src={`https://robohash.org/${props.id}`} style = {{height:'200px', weight:'200px'}} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;