import { Component } from 'react';
import Container from '../Container/Container';
import Section from '../Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  getStatisticsOptions = () => [
    ...Object.entries(this.state),
    ['total', this.countTotalFeedback()],
    ['positive feedback', this.countPositiveFeedbackPercentage() + `%`],
  ];

  render() {
    return (
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        {this.countTotalFeedback() === 0 ||
        isNaN(this.countPositiveFeedbackPercentage()) ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics options={this.getStatisticsOptions()} />
          </Section>
        )}
      </Container>
    );
  }
}

export default Feedback;
