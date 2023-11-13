import styled from '@emotion/styled';
import auth_background_1x_mob from '../../assets/images/auth_background_1x_mob.jpg';
import auth_background_2x_mob from '../../assets/images/auth_background_2x_mob.jpg';
import welcome_background_1x_tab from '../../assets/images/welcome_background_1x_tab.jpg';
import welcome_background_2x_tab from '../../assets/images/welcome_background_2x_tab.jpg';
import welcome_background_1x_desk from '../../assets/images/welcome_background_1x_desk.jpg';
import welcome_background_2x_desk from '../../assets/images/welcome_background_2x_desk.jpg';
import { ContainerWrapper } from 'components/Container/Container.styled';

export const SignInSection = styled.div`
  min-height: 100dvh;
  padding-top: 24px;
  background-image: image-set(
    url(${auth_background_1x_mob}) 1x,
    url(${auth_background_2x_mob}) 2x
  );
  background-repeat: no-repeat;
  background-position: bottom right;

  /* overflow: hidden; */

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    background-image: image-set(
      url(${welcome_background_1x_tab}) 1x,
      url(${welcome_background_2x_tab}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${welcome_background_1x_desk}) 1x,
      url(${welcome_background_2x_desk}) 2x
    );
    background-size: contain;
  }
`;

export const AuthContainer = styled(ContainerWrapper)`
  display: flex;
  flex-direction: column;
  gap: 90px;

  @media screen and (min-width: 768px) {
    gap: 140px;
  }

  @media screen and (min-width: 1440px) {
    gap: 151px;
    padding-inline: 96px;
  }
`;
