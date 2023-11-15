import styled from '@emotion/styled';
import {
  welcome_background_1x_desk,
  welcome_background_2x_desk,
  auth_background_1x_mob,
  auth_background_2x_mob,
  welcome_background_1x_tab,
  welcome_background_2x_tab,
} from 'utils/background';

export const WelcomeSection = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: 66px;
  gap: 40px;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${auth_background_1x_mob}) 1x,
    url(${auth_background_2x_mob}) 2x
  );

  @media screen and (min-width: 768px) {
    gap: 64px;
    padding-top: 105px;
    background-image: image-set(
      url(${welcome_background_1x_tab}) 1x,
      url(${welcome_background_2x_tab}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    background-size: contain;
    background-image: image-set(
      url(${welcome_background_1x_desk}) 1x,
      url(${welcome_background_2x_desk}) 2x
    );
  }
`;

export const WelcomeWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    padding-left: 64px;
  }
`;
