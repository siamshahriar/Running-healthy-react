import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Calculation.css";
import Seconds from "../seconds/Seconds";

const Calculation = (props) => {
  const {time} = props;

  let total = 0;
  for (const gym of time){
      total = total + gym.time
  }

  // const seconds = [{id:1 , second = 10}];
  // const seconds = [10,20,30,40,50];
  const seconds = [{id: 1, values:10},{id: 2, values:20},{id: 3, values:30},{id: 4, values:40},{id: 5, values:50}];
  
  return (
    <div className="">
      <div className="pic-and-name align">
        <img src="https://avatars.githubusercontent.com/u/72511886?v=4" alt="" />
        <div className="name">
          <span>Md. Shahriar Rahman</span>
          <div className="align">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

    {/* add a break  */}

    <div className="add-break">
        <p>Add A Break</p>
        <div className="anchor">
          {
            seconds.map(second => <Seconds key={second.id} time={second.values}></Seconds>)
          }
            {/* <a href="#">20s</a>
            <a href="#">30s</a>
            <a href="#">40s</a>
            <a href="#">50s</a> */}
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
            <span className="seconds">15 seconds</span>
        </div>
    </div>
    <button className="cmplt-btn">Activity Completed</button>
    </div>
  );
};

export default Calculation;
