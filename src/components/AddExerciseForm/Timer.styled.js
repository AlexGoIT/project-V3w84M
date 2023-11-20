import styled from 'styled-components';

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TimerTitle = styled.h1`
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 4px;
`;

export const FormattedTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

export const TimerBtn = styled.button`
  background-color: #e6533c;
  margin-top: 14px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  display: flex;

  &:hover,
  &:focus-visible {
    background-color: #ef8964;
  }
`;

export const PlayIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const TimerText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 12px;
  line-height: 1.28;
  margin-top: 8px;
`;

export const TimerSub = styled.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.28;
  display: inline-flex;
  margin-left: 8px;
`;
