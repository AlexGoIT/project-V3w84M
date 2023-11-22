import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef, useState } from 'react';
import { selectProducts } from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';

import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductsListUl } from './ProductsList.styled';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { selectUser } from 'redux/auth/authSelectors';
// import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsList = ({ changePage, filters, pageNumber }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectUser);
  const bloodType = data?.profileData?.blood;
  const [products, setProducts] = useState([]);
  const observerTarget = useRef(null);

  const productsList = useSelector(selectProducts);
  const productItems = useMemo(
    () =>
      productsList?.result?.map(el => ({
        ...el,
        recommended: el.groupBloodNotAllowed[bloodType],
      })) ?? [],
    [bloodType, productsList?.result]
  );

  console.log(
    'products',
    products.map(prod => prod.title)
  );

  useEffect(() => {
    dispatch(fetchProducts({ ...filters, page: pageNumber }));
  }, [dispatch, filters, pageNumber]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts(productItems);
    }
    if (pageNumber === 1) {
      setProducts([]);
    }
  }, [pageNumber, productItems, products.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          changePage();
          dispatch(fetchProducts({ ...filters, page: pageNumber }));
          setProducts(prev => {
            console.log(
              'prev',
              prev.map(prod => prod.title)
            );
            console.log(
              'productItems',
              productItems.map(prod => prod.title)
            );
            return [...prev, ...productItems];
          });
        }
      },
      { rootMargin: '300px' }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [changePage, dispatch, filters, observerTarget, pageNumber, productItems]);

  // const fetchMoreProducts = () => {
  //   dispatch(fetchProducts({ ...filters, page: pageNumber }));
  // };
  // console.log(products);

  return (
    <>
      {productItems.length > 0 ? (
        <ProductsListUl id="products-list">
          {products.map(product => (
            <ProductsItem key={product.title} product={product} />
          ))}
          <div ref={observerTarget}></div>
        </ProductsListUl>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};

// <InfiniteScroll
//   dataLength={productsList.total_results} //This is important field to render the next data
//   next={fetchMoreProducts}
//   hasMore={true}
//   scrollableTarget="products-list"
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
// >
/* </InfiniteScroll> */

export default ProductsList;
