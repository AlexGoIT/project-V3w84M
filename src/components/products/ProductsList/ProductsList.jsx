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

  const filterProducts = (productItems, filter) => {
    const { category, recommended } = filter;
    const search = filter.search ? filter.search.toLowerCase() : undefined;

    const stepOne = category
      ? productItems.filter(el => el.category === category)
      : productItems;
    const stepTwo =
      recommended === 'recommended'
        ? stepOne.filter(el => el.recommended)
        : recommended === 'notRecommended'
        ? stepOne.filter(el => !el.recommended)
        : stepOne;
    const stepThree = search
      ? stepTwo.filter(el => el.title.toLowerCase().includes(search))
      : stepTwo;

    return stepThree;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {filterProducts.length > 0 ? (
        <ProductsListUl>
          {productItems.length > 0 &&
            productItems.map(product => (
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
