import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  text-transform: capitalize;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
