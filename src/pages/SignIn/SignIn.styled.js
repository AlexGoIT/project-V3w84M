import styled from '@emotion/styled';
import welcome_background_1x_mob from '../../assets/images/welcome_background_1x_mob.jpg';
import welcome_background_2x_mob from '../../assets/images/welcome_background_2x_mob.jpg';
import welcome_background_1x_tab from '../../assets/images/welcome_background_1x_tab.jpg';
import welcome_background_2x_tab from '../../assets/images/welcome_background_2x_tab.jpg';
import welcome_background_1x_desk from '../../assets/images/welcome_background_1x_desk.jpg';
import welcome_background_2x_desk from '../../assets/images/welcome_background_2x_desk.jpg';

export const SignInSection = styled.section`
  min-height: calc(100dvh - 84px);
  padding-block: 90px 40px;
  background-image: image-set(
    url(${welcome_background_1x_mob}) 1x,
    url(${welcome_background_2x_mob}) 2x
  );
  background-repeat: no-repeat;
  background-position: bottom right;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-block: 140px 48px;
    background-image: image-set(
      url(${welcome_background_1x_tab}) 1x,
      url(${welcome_background_2x_tab}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 151px 0px;
    padding-inline: 64px;
    background-image: image-set(
      url(${welcome_background_1x_desk}) 1x,
      url(${welcome_background_2x_desk}) 2x
    );
  }
`;
