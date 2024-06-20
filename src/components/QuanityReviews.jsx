import React, { Component } from "react";

class QuanityReviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodReviews = () => {
    this.setState({ good: this.state.good + 1 });
  };

  countNeutralReviews = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  countBadReviews = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h3>Please leave feedback</h3>
        <button onClick={this.countGoodReviews}>Good</button>
        <button onClick={this.countNeutralReviews}>Neutral</button>
        <button onClick={this.countBadReviews}>Bad</button>
        <div>
          <h3>Statistics</h3>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </>
    );
  }
}

export default QuanityReviews;
