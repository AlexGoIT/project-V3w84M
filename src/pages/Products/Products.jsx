import Container from 'components/Container';
import ProductsFilter from 'components/products/ProductsFilter';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { Wrapper } from './Products.styled';
import TitlePage from 'components/TitlePage';

const ProductsPage = () => {
  return (
    <Container>
      <Wrapper>
        <TitlePage title="Products" />
        <ProductsFilter />
        <ProductsList />
      </Wrapper>
    </Container>
  );
};

export default ProductsPage;
