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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import ProductItem from './ProductItem';

const DayProducts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const productsData = useSelector(selectProducts);
  const { result, total_results } = productsData;
  console.log(result);
  console.log(total_results);

  const [heightProductArea, setHeightProductArea] = useState(true);
  if (total_results === 0) {
    setHeightProductArea(false);
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <DayProductsArea dimention={heightProductArea}>
      <TitleArea>
        <Title>Products</Title>
        <Button>
          <Add>Add product</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>
      <TableArea>
        {isLoading && <Loader />}
        {total_results > 0 ? (
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
              {result.map(
                ({
                  _id,
                  title,
                  category,
                  calories,
                  weight,
                  groupBloodNotAllowed,
                }) => (
                  <ProductItem
                    key={_id}
                    id={_id}
                    title={title}
                    category={category}
                    calories={calories}
                    weight={weight}
                    groupBloodNotAllowed={groupBloodNotAllowed}
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
