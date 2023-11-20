import PropTypes from 'prop-types';
import {
  ExercisesSubcategoryPicture,
  PictureLink,
  WrapperDiv,
  Description,
  MainText,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem({ item }) {
  return (
    <ExercisesSubcategoryPicture>
      <PictureLink to={item.name}>
        <WrapperDiv img={item.imgURL}>
          <Description>
            <li>
              <MainText className="hoverText">{item.name}</MainText>
            </li>

            <li>
              <Subtext>{item.filter}</Subtext>
            </li>
          </Description>
        </WrapperDiv>
      </PictureLink>
    </ExercisesSubcategoryPicture>
  );
}

ExercisesSubcategoriesItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
