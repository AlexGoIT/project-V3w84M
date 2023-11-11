import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductFilter';
import ProductsList from 'components/products/ProductList';
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
