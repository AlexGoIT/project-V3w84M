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
import { selectError, selectIsLoading } from 'redux/api/apiSelectors';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import ProductItem from './ProductItem';
import { Link, useLocation } from 'react-router-dom';

const DayProducts = ({ consumedProducts, dateForDelete }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();

  return (
    <DayProductsArea
      dimentionArea={
        consumedProducts && consumedProducts.length > 0 ? 'true' : 'false'
      }
    >
      <TitleArea>
        <Title>Products</Title>
        <Link to={`/products`} state={{ from: location }}>
          <Button>
            <Add>Add product</Add>
            <ArrowIcon iconColor="#E6533C">
              <use href={`${sprite}#arrow`} />
            </ArrowIcon>
          </Button>
        </Link>
      </TitleArea>
      <TableArea>
        {isLoading && <Loader />}
        {consumedProducts && consumedProducts.length > 0 ? (
          <>
            <TableHeader>
              <Grid1>Title</Grid1>
              <Grid2>Category</Grid2>
              <Grid3>Calories</Grid3>
              <Grid4>Weight</Grid4>
              <Grid5>Recommend</Grid5>
              <Grid6></Grid6>
            </TableHeader>
            <List
              dimentionList={
                consumedProducts && consumedProducts.length > 0
                  ? 'true'
                  : 'false'
              }
            >
              {consumedProducts.map(
                ({
                  _id,
                  product,
                  caloriesConsumed,
                  weightConsumed,
                  recommendedByGroupBlood,
                }) => (
                  <ProductItem
                    key={_id}
                    id={_id}
                    product={product}
                    caloriesConsumed={caloriesConsumed}
                    weightConsumed={weightConsumed}
                    recommendedByGroupBlood={recommendedByGroupBlood}
                    dateForDelete={dateForDelete}
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
