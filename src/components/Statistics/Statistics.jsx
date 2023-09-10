import {
  StatisticsContainer,
  StatisticItem,
} from '../Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsContainer>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral}</StatisticItem>
    <StatisticItem>Bad: {bad}</StatisticItem>
    <StatisticItem>Total: {total}</StatisticItem>
    <StatisticItem>Positive Percentage: {positivePercentage}%</StatisticItem>
  </StatisticsContainer>
);
