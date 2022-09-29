import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Calculation.css";
import { Seconds } from "../seconds/Seconds";

const Calculation = (props) => {
  const { time } = props;

  const [values, setValues] = useState(localStorage.getItem("seconds") || 0);



  let total = 0;
  for (const gym of time) {
    total = total + gym.time;
  }

  const seconds = [
    { id: 1, values: 10 },
    { id: 2, values: 20 },
    { id: 3, values: 30 },
    { id: 4, values: 40 },
    { id: 5, values: 50 },
  ];

  const handleAddToSeconds = (time) => {
    localStorage.setItem("seconds", time);
    let digits = (localStorage.getItem("seconds"));
    setValues(digits);
  };

  

  return (
    <div className="">
      <div className="pic-and-name align">
        <img
          src="https://avatars.githubusercontent.com/u/72511886?v=4"
          alt=""
        />
        <div className="name">
          <span>Md. Shahriar Rahman</span>
          <div className="align">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      <div className="add-break">
        <p>Add A Break</p>
        <div className="anchor">
          {seconds.map((second) => (
            <Seconds
              key={second.id}
              handleAddToSeconds={handleAddToSeconds}
              time={second.values}
              setValues={setValues}
            ></Seconds>
          ))}
          
        </div>
      </div>
      <div className="details-calc">
        <p>Exercise Details</p>
        <div className="ex-details">
          <span>Exercise time</span>
          <span className="seconds">{total} seconds</span>
        </div>
        <div className="ex-details">
          <span>Break Time</span>
          <span className="seconds">{values} seconds</span>
        </div>
      </div>
      <button className="cmplt-btn">Activity Completed</button>
    </div>
  );
};

export default Calculation;
