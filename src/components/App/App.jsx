import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) => {
    this.setState((prevValue) => (
      { [e.target.name]: prevValue[e.target.name] + 1 }
    ))
  }
  
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => Math.round((good * 100) / (total));
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.state.good, total)

    return <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
      </Section>
      <Section title="Statistic">
        {total === 0
          ? <Notification message="There is no feedback" />
          : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />
        }
      </Section>
    </div>
  }
}

export default App;
