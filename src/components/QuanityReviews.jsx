import React, { useState } from "react";

const QuantityReviews = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGoodReviews = () => {
    setGood(good + 1);
  };

  const countNeutralReviews = () => {
    setNeutral(neutral + 1);
  };

  const countBadReviews = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <h3>Please leave feedback</h3>
      <button onClick={countGoodReviews}>Good</button>
      <button onClick={countNeutralReviews}>Neutral</button>
      <button onClick={countBadReviews}>Bad</button>
      <div>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

export default QuantityReviews;
