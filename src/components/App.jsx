import React, { useState, useEffect } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  // Крок 1: Створення стану для збереження відгуків
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Крок 2: Обробник для збільшення лічильника відгука обраного типу
  const handleLeaveFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Крок 3: Обчислення загальної кількості відгуків та відсотка позитивних відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      {/* Крок 4: Відображення секції для залишення відгуків */}
      <Section title="Please leave your feedback">
        {/* Крок 5: Відображення компонента FeedbackOptions */}
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {/* Крок 6: Умовний рендерінг для відображення статистики або повідомлення */}
      {totalFeedback > 0 ? (
        /* Крок 7: Відображення секції для відображення статистики */
        <Section title="Statistics">
          {/* Крок 8: Відображення компонента Statistics та передача йому необхідних даних */}
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        /* Крок 9: Відображення повідомлення, якщо немає відгуків */
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
