import React from 'react';
import "./Seconds.css";

const Seconds = (props) => {
    const {time} = props;
    const handleAddToSeconds = (time) => {
        console.log(time);
      };

    return (
        <div className='seconds'>
            <a href="#" onClick={() => handleAddToSeconds(time)}>{time}</a>  
        </div>
    );
};

export default Seconds;