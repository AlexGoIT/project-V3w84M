import {
  ProductDiv,
  Column,
  ButtonEl,
  DeleteIcon,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Title,
} from './ProductItem.styled';
import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';

const ProductItem = ({
  id,
  title,
  category,
  caloriesConsumed,
  weightConsumed,
  recommendedByGroupBlood,
}) => {
  return (
    <ProductDiv key={id}>
      <Grid1>
        <Title>Title</Title>
        <Column>{title}</Column>
      </Grid1>
      <Grid2>
        <Title>Category</Title>
        <Column>{category}</Column>
      </Grid2>
      <Grid3>
        <Title>Calories</Title>
        <Column>{caloriesConsumed}</Column>
      </Grid3>
      <Grid4>
        <Title>Weight</Title>
        <Column>{weightConsumed}</Column>
      </Grid4>
      <Grid5>
        <Title>Recommend</Title>
        <Column>Yes</Column>
      </Grid5>
      {/* <ButtonEl onClick={() => deleteThisExercise(id)}>Delete</ButtonEl> */}
      <Grid6>
        <Title></Title>
        <ButtonEl>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid6>
    </ProductDiv>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  caloriesConsumed: PropTypes.number,
  weightConsumed: PropTypes.number,
  recommendedByGroupBlood: PropTypes.bool,
};

export default ProductItem;
