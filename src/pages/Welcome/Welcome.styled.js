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
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;
  padding-top: 127px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${auth_background_1x_mob}) 1x,
    url(${auth_background_2x_mob}) 2x
  );

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 32px;
    padding-top: 200px;
    background-image: image-set(
      url(${welcome_background_1x_tab}) 1x,
      url(${welcome_background_2x_tab}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;

    background-size: contain;
    background-image: image-set(
      url(${welcome_background_1x_desk}) 1x,
      url(${welcome_background_2x_desk}) 2x
    );
  }
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 64px;
  }
`;
