import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод для підрахунку загальної кількості відгуків
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  // Метод для підрахунку відсотка позитивних відгуків
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  // Обробник для кнопок відгуків
  handleLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <div>
        {/* Секція для залишення відгуків */}
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        {/* Умовна рендерінг для відображення статистики або повідомлення */}
        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
