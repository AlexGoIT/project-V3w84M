import sprite from 'assets/images/sprite.svg';
import { SloganImage, SloganText, SloganWrapper } from './Slogan.styled';

const Slogan = () => {
  return (
    <SloganWrapper>
      <SloganText>Transforming your body shape with Power Pulse</SloganText>;
      <SloganImage>
        <use href={`${sprite}#slogan-line`} />
      </SloganImage>
    </SloganWrapper>
  );
};

export default Slogan;
