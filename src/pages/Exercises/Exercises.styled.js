import styled from '@emotion/styled';

import { exercises_background_1x } from 'utils/background';
import { exercises_background_2x } from 'utils/background';

export const ExercisesWrapper = styled.div`
  padding-top: 62px;
  padding-bottom: 80px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-bottom: 66px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 85px;
    padding-bottom: 46px;

    &.exercises-list {
      background: image-set(
        url(${exercises_background_1x}) 1x,
        url(${exercises_background_2x}) 2x
      );
      background-repeat: no-repeat;
      background-position: bottom right;
    }
  }
`;

export const ContentDiv = styled.div`
  position: relative;
  margin-inline: auto;
  @media screen and (min-width: 1440px) {
    padding-inline: 63px;
  }
`;

export const WrapperTitleCategoriesDiv = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${props => props.margin && '32px'};
    margin-top: ${props => props.margin && '72px'};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
    margin-bottom: ${props => props.margin && '32px'};
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 11px;
  padding: 0px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: calc(18 / 14);
  background: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    top: 32px;
    align-items: center;
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  & svg {
    transform: scale(-1, 1);
    width: 16px;
    height: 16px;
  }
`;
