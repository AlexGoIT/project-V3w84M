import styled from '@emotion/styled';

export const ExercisesCard = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    /* width: calc((100% - 16px) / 2); */
    overflow: hidden;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`;
export const ExercisesCardStatusWorkout = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 27px;
  justify-content: space-between;
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
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #efede8;
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
  font-size: 24px;
  line-height: 1.333;
  color: #efede8;

  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  max-width: 100%;
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;
`;

export const ExercisesCardInfoItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  /* flex-direction: row; */
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;
`;

export const ExercisesCardInfoValue = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 12px;
  line-height: 18px;
`;
