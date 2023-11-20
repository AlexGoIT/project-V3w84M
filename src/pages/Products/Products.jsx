import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductsFilter';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { ProductsWrapper, Wrapper } from './Products.styled';
import TitlePage from 'components/TitlePage';

const ProductsPage = () => {
  return (
    <ProductsWrapper>
      <Container>
        <Wrapper>
          <TitlePage title="Products" />
          <ProductsFilter />
          <ProductsList />
        </Wrapper>
      </Container>
    </ProductsWrapper>
  );
};

export default ProductsPage;
