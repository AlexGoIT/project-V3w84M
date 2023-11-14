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
// import { fetchProducts } from '../../redux/api/apiOperations';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectIsLoading,
//   selectError,
//   selectProducts,
// } from '../../redux/api/apiSelectors';
// import { useEffect } from 'react';
// import Loader from 'components/Loader';

const DayProducts = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const productsData = useSelector(selectProducts);
  // const { result, total_results } = productsData;
  // console.log(result);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

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
        {/* {isLoading && <Loader />}
        {total_results > 0 ? (
          <div></div>
        ) : ( */}
        <table>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Calories</th>
            <th>Weight</th>
            <th>Recommend</th>
            <th>del</th>
          </tr>
        </table>
        <Message>Not found products</Message>
        {/* )}
        {error && alert('Sorry, something is wrong!')} */}
      </TableArea>
    </DayProductsArea>
  );
};

export default DayProducts;
