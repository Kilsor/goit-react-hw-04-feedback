import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    {options.map(option => (
      <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackButton>
    ))}
  </FeedbackContainer>
);
