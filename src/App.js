import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    option === 'good' && setGood(prevState => prevState + 1);
    option === 'neutral' && setNeutral(prevState => prevState + 1);
    option === 'bad' && setBad(prevState => prevState + 1);
  };

  const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () =>
    Object.values(feedbackOptions).reduce((acc, curr) => acc + curr);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const getStatisticsOptions = () => [
    ...Object.entries(feedbackOptions),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedbackPercentage() + `%`],
  ];

  return (
    <main className="App">
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        {countTotalFeedback() === 0 &&
        isNaN(countPositiveFeedbackPercentage()) ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics options={getStatisticsOptions()} />
          </Section>
        )}
      </Container>
    </main>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
