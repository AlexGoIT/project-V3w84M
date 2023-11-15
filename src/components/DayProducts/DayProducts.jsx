import {
  DayProductsArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  Message,
} from './DayProducts.styled';
import sprite from 'assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';

const DayProducts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const productsData = useSelector(selectProducts);
  const { result } = productsData;
  console.log(result);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <DayProductsArea>
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
        <Message>Not found products</Message>
        {error && Notify.failure(error.message)}
      </TableArea>
    </DayProductsArea>
  );
};

export default DayProducts;
