import React from "react";

const Seconds = (props) => {
  const { time, handleAddToSeconds } = props;

  return (
    <div className="seconds">
      {/* <a href="#" onClick={() => handleAddToSeconds(time)}>
        {time}
      </a> */}
      <button onClick={() => handleAddToSeconds(time)}>
        {time}
      </button>
    </div>
  );
};

export { Seconds };
