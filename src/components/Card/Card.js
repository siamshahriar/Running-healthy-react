import React from 'react';
import "./Card.css";

const Card = (props) => {
    const {name, img, time} = props.card;
    console.log(props.product);
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>For Age: <span>13-40</span> </p>
            <p>Time required : <span>{time}</span>s</p>
            <button>Add to List</button>
        </div>
    );
};

export default Card;