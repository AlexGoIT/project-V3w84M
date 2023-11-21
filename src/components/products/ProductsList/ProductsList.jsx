import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectProducts } from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';
// import products from '../../../resources/products.json';

import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductsListUl } from './ProductsList.styled';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { selectUser } from 'redux/auth/authSelectors';

const ProductsList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectUser);
  const bloodType = data?.profileData?.blood;

  const productsList = useSelector(selectProducts);
  const productItems =
    productsList?.result?.map(el => ({
      ...el,
      recommended: el.groupBloodNotAllowed[bloodType],
    })) ?? [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {productItems.length > 0 ? (
        <ProductsListUl>
          {productItems.map(product => (
            <ProductsItem key={product.title} product={product} />
          ))}
        </ProductsListUl>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};

export default ProductsList;
