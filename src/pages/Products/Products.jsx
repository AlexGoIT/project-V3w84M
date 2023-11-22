import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductsFilter';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { ProductsWrapper, Wrapper } from './Products.styled';
import TitlePage from 'components/TitlePage';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/api/apiSelectors';
import Loader from 'components/Loader';

const ProductsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState({});
  const [isNewRequest, setIsNewRequest] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const handleChangePage = () => {
    setPageNumber(prev => prev + 1);
    setIsNewRequest(false);
  };

  const resetIsNewRequest = () => {
    setIsNewRequest(false);
  };

  const handleSetFilters = values => {
    setIsNewRequest(true);
    setPageNumber(1);
    setFilters({ ...values });
  };

  return (
    <ProductsWrapper>
      {isLoading && <Loader />}
      <Container>
        <Wrapper>
          <TitlePage title="Products" />
          <ProductsFilter handleSetFilters={handleSetFilters} />
          <ProductsList
            changePage={handleChangePage}
            filters={filters}
            pageNumber={pageNumber}
            isNewRequest={isNewRequest}
            resetIsNewRequest={resetIsNewRequest}
          />
        </Wrapper>
      </Container>
    </ProductsWrapper>
  );
};

export default ProductsPage;
