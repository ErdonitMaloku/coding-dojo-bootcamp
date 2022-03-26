import React from 'react'

const PersonCard = (props) => {
    return (
        <div>
            <h2>{props.firstName}, {props.lastName}</h2>
            <p>Age: {props.Age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard
