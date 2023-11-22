import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { selectProducts } from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';

import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductsListUl } from './ProductsList.styled';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';

const ProductsList = ({
  changePage,
  filters,
  pageNumber,
  isNewRequest,
  resetIsNewRequest,
}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const { result: productsList, total_results: productsAmount } =
    useSelector(selectProducts);

  const { ref } = useInView({
    onChange: inView => {
      if (inView) {
        changePage();
      }
    },
    rootMargin: '1000px',
  });

  useEffect(() => {
    dispatch(fetchProducts({ ...filters, page: pageNumber }));
  }, [dispatch, filters, pageNumber]);

  useEffect(() => {
    if (pageNumber === 1 && isNewRequest) {
      setProducts([]);
      resetIsNewRequest();
    }
  }, [isNewRequest, pageNumber, resetIsNewRequest]);

  useEffect(() => {
    if (productsList) {
      setProducts(prev => [...prev, ...productsList]);
    }
  }, [productsList]);

  return (
    <>
      {products.length > 0 ? (
        <ProductsListUl id="products-list">
          {products.map(product => (
            <ProductsItem key={product.title} product={product} />
          ))}
          <div ref={products.length < productsAmount ? ref : null}></div>
        </ProductsListUl>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};

export default ProductsList;
