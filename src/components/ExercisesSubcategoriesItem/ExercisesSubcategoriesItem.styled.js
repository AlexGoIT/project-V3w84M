import styled from '@emotion/styled';

export const ExercisesSubcategoryPictureLi = styled.li`
  max-width: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 224px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 237px;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(4, 4, 4, 0.5);
  background: linear-gradient(
      0deg,
      rgba(4, 4, 4, 0.5) 0%,
      rgba(4, 4, 4, 0.5) 100%
    ),
    url(${props => props.img}) center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DescriptionUl = styled.ul`
  color: white;
  text-align: center;
  z-index: 2;
`;

export const MainText = styled.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtext = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;
