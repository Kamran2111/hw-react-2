import React from "react";

const statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default statistics;
