import styled from '@emotion/styled';

import { exercises_background_1x } from 'utils/background';
import { exercises_background_2x} from 'utils/background';

export const ContentDiv = styled.div`
  position: relative;
  margin-inline: auto;
`;

export const ExercisesWrapper = styled.div`  
  padding-top: 62px;
  padding-bottom: 80px;  
  width: 100%;
    @media screen and (min-width: 768px) {   
      padding-bottom: 66px;  
  }

  @media screen and (min-width: 1440px) {      
    padding-top: 85px;
    padding-bottom: 81px;   
    background: image-set(url(${exercises_background_1x}) 1x, url(${exercises_background_2x}) 2x);
    background-repeat: no-repeat;
    background-position: top 85px right;
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
    padding-inline: 96px;
  }
`;