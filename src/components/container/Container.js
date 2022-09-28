import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

import "./Container.css";
import Calculation from "../Calculation/Calculation";

const Container = () => {
  const [exercises, setExercise] = useState([]);

  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);
  return (
    <div className="container">
      <div className="whole-exercises">
        <div className="icon">
          <FontAwesomeIcon icon={faPersonRunning} />
          <p>Exercise Daily, Stay Healthy !</p>
        </div>
        <p className="select">Select today exercise</p>
        <div className="exercises">
          {exercises.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
      <div className="calculation">
        <Calculation></Calculation>
      </div>
    </div>
  );
};

export default Container;
