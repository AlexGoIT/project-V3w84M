import PropTypes from 'prop-types';
import {
  ExercisesSubcategoryPictureLi,
  DescriptionUl,
  MainText,
  Subtext,
  InfoWrapper,
  CardWrapper,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem({ category, handleClick }) {
  return (
    <ExercisesSubcategoryPictureLi onClick={() => handleClick(category.name)}>
      <CardWrapper>
        <InfoWrapper>
          <DescriptionUl>
            <li>
              <MainText>{category.name}</MainText>
            </li>

            <li>
              <Subtext>{category.filter}</Subtext>
            </li>
          </DescriptionUl>
        </InfoWrapper>
        <img src={category.imgURL} alt={category.name} />
      </CardWrapper>
    </ExercisesSubcategoryPictureLi>
  );
}

ExercisesSubcategoriesItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
