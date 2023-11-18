import {
  DayProductsArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  Message,
  TableHeader,
  List,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
} from './DayProducts.styled';
import sprite from 'assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectError, selectIsLoading } from 'redux/api/apiSelectors';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import ProductItem from './ProductItem';
import { Link, useLocation } from 'react-router-dom';

const DayProducts = ({ consumedProducts }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();

  const findLength = async array => {
    try {
      const length = await array.length;
      return length;
    } catch (err) {
      return err;
    }
  };
  const arrayLength = findLength(consumedProducts); //Array.isArray(consumedProducts)

  //console.log(arrayLength);
  // console.log(consumedProducts);

  const [heightProductArea, setHeightProductArea] = useState(true);
  if (arrayLength === 0) {
    setHeightProductArea(false);
  }

  return (
    <DayProductsArea dimention={heightProductArea}>
      <TitleArea>
        <Title>Products</Title>
        <Link to={`/products`} state={{ from: location }}>
          <Button>
            <Add>Add product</Add>
            <ArrowIcon iconColor="#E6533C">
              <use href={`${sprite}#arrow`} />
            </ArrowIcon>
          </Button>{' '}
        </Link>
      </TitleArea>
      <TableArea>
        {isLoading && <Loader />}
        {arrayLength > 0 ? (
          <>
            <TableHeader>
              <Grid1>Title</Grid1>
              <Grid2>Category</Grid2>
              <Grid3>Calories</Grid3>
              <Grid4>Weight</Grid4>
              <Grid5>Recommend</Grid5>
              <Grid6></Grid6>
            </TableHeader>
            <List>
              {consumedProducts.map(
                ({
                  _id,
                  title,
                  category,
                  caloriesConsumed,
                  weightConsumed,
                  recommendedByGroupBlood,
                }) => (
                  <ProductItem
                    key={_id}
                    id={_id}
                    title={title}
                    category={category}
                    caloriesConsumed={caloriesConsumed}
                    weightConsumed={weightConsumed}
                    recommendedByGroupBlood={recommendedByGroupBlood}
                  />
                )
              )}
            </List>
          </>
        ) : (
          <Message>Not found exercises</Message>
        )}
        {error && Notify.failure(error.message)}
      </TableArea>
    </DayProductsArea>
  );
};

export default DayProducts;
