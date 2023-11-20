import PropTypes from 'prop-types';
import {
  ExercisesSubcategoryPictureLi,
  PictureLink,
  WrapperDiv,
  DescriptionUl,
  MainText,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem() {
  return (
    <ExercisesSubcategoryPictureLi>
      <PictureLink to="#">
        <WrapperDiv>
          <DescriptionUl>
            <li>
              <MainText>
                Shoulders
                {/* {item.name} */}
              </MainText>
            </li>

            <li>
              <Subtext>
                Body parts
                {/* {item.filter} */}
              </Subtext>
            </li>
          </DescriptionUl>
        </WrapperDiv>
      </PictureLink>
    </ExercisesSubcategoryPictureLi>
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
