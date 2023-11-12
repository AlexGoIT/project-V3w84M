import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductsFilter';
import ProductsList from 'components/products/ProductsList';
import { Wrapper, ProductsTitle } from './Products.styled';

const ProductsPage = () => {
  return (
    <Container>
      <Wrapper>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter />
        <ProductsList />
      </Wrapper>
    </Container>
  );
};

export default ProductsPage;
