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
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/api/apiOperations';

const ProductItem = ({
  id,
  product,
  caloriesConsumed,
  weightConsumed,
  recommendedByGroupBlood,
  dateForDelete,
}) => {
  const dispatch = useDispatch();

  const handleClick = (id, dateForDelete) => {
    dispatch(deleteProduct({ productId: id, date: dateForDelete }));
  };

  return (
    <ProductDiv key={id}>
      <Grid1>
        <Title>Title</Title>
        <Column>{product.title}</Column>
      </Grid1>
      <Grid2>
        <Title>Category</Title>
        <Column>{product.category}</Column>
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
      <Grid6>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(id, dateForDelete)}>
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
  date: PropTypes.string,
};

export default ProductItem;
