import React, { useState } from "react";

const QuantityReviews = () => {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const countReviews = (type) => {
    setReviews((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

  return (
    <>
      <h3>Please leave feedback</h3>
      <button onClick={() => countReviews("good")}>Good</button>
      <button onClick={() => countReviews("neutral")}>Neutral</button>
      <button onClick={() => countReviews("bad")}>Bad</button>
      <div>
        <h3>Statistics</h3>
        <p>Good: {reviews.good}</p>
        <p>Neutral: {reviews.neutral}</p>
        <p>Bad: {reviews.bad}</p>
        <p>Positive feedback: {positiveFeedbackPercentage}%</p>
      </div>
    </>
  );
};

export default QuantityReviews;
