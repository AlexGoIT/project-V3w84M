import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductsFilter';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { ProductsWrapper, Wrapper } from './Products.styled';
import TitlePage from 'components/TitlePage';
import { useState } from 'react';

const ProductsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState({});
  console.log(pageNumber);
  console.log('filters', filters);

  const handleChangePage = () => {
    setPageNumber(prev => prev + 1);
  };

  const handleSetFilters = values => {
    setPageNumber(1);
    setFilters({ ...values });
  };

  return (
    <ProductsWrapper>
      <Container>
        <Wrapper>
          <TitlePage title="Products" />
          <ProductsFilter handleSetFilters={handleSetFilters} />
          <ProductsList
            changePage={handleChangePage}
            filters={filters}
            pageNumber={pageNumber}
          />
        </Wrapper>
      </Container>
    </ProductsWrapper>
  );
};

export default ProductsPage;
