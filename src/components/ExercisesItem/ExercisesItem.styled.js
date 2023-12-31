import styled from '@emotion/styled';

export const ExercisesCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 333px;
  height: 163px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    overflow: hidden;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 141px;
  }
`;

export const ExercisesCardStatusWorkout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 33px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 27px;
  }
`;

export const ExercisesCardWorkout = styled.span`
  display: inline-flex;
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`;

export const ExercisesCardWorkoutText = styled.p`
  color: #efede8;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const ExercisesCardStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const ExercisesCardAddBtn = styled.button`
  background: transparent;
  border: none;
  color: #e6533c;
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #efede8;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const IconStart = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  margin-top: -3px;
  fill: #efa082;
  &:hover,
  &:focus {
    fill: #efede8;
  }
`;

export const IconBeforeTitle = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0;
  top: calc(50% - 12px);
  fill: #efa082;
`;

export const ExercisesCardTitle = styled.h4`
  position: relative;
  font-size: 20px;
  line-height: 1.333;
  color: #efede8;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  /* &::before {
    content: url();
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: calc(50% - 12px);
  } */
`;

export const ExercisesCardInfoList = styled.ul`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  gap: 4px 16px;
  flex-wrap: wrap;
`;

export const ExercisesCardInfoItem = styled.li`
  /* width: 40%; */
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  /* word-wrap: break-word; */
  /* flex-wrap: nowrap; */
`;

export const ExercisesCardInfoValue = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  /* word-wrap: break-word; */
`;
