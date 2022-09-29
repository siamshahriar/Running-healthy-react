import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

import "./Container.css";
import Calculation from "../Calculation/Calculation";

const Container = () => {
  const [exercises, setExercise] = useState([]);

  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const handleAddToCalc = (card) => {
    // console.log(card);
    const newTime = [...time, card];
    setTime(newTime);
    console.log(time);
  };
  return (
    <div className="container">
      <div className="whole-exercises">
        <div className="icon">
          <FontAwesomeIcon icon={faPersonRunning} />
          <p>Exercise Daily, Stay Healthy !</p>
        </div>
        <p className="select">Select todays exercise</p>
        <div className="exercises">

          {exercises.map((card) => (

            <Card key={card.id} card={card} handleAddToCalc={handleAddToCalc}></Card>
          ))}
        </div>
      </div>
      <div className="calculation">
        <Calculation time={time}></Calculation>
      </div>
    </div>
  );
};

export default Container;
