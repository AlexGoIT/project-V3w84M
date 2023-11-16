import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectProducts } from 'redux/api/apiSelectors';
import { fetchProducts } from 'redux/api/apiOperations';
// import products from '../../../resources/products.json';

import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductsListUl } from './ProductsList.styled';
import BasicModalWindow from '../../BasicModalWindow/BasicModalWindow';
import AddProductForm from '../../AddProductForm/AddProductForm';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { selectUser } from 'redux/auth/authSelectors';

const ProductsList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectUser);
  const bloodType = data.profileData.blood;
  const [products, setProducts] = useState(null);

  const productsList = useSelector(selectProducts);
  const productItems =
    productsList?.result?.map(el => ({
      ...el,
      recommended: el.groupBloodNotAllowed[bloodType],
    })) ?? [];

  // const filteredList = productItems.filter(item => item.recommended );

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

  const openModalToggle = el => {
    setProducts(el);
  };

  const closeModal = () => {
    setProducts(null);
  };

  return (
    <>
      {products && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {typeof products === 'object' ? (
            <AddProductForm products={products} closeModal={closeModal} />
          ) : (
            <AddProductSuccess
              closeModal={closeModal}
              calories={products.calories}
            />
          )}
        </BasicModalWindow>
      )}
      {filterProducts.length > 0 ? (
        <ProductsListUl>
          {productItems.length > 0 &&
            productItems.map(product => (
              <ProductsItem
                key={product.title}
                product={product}
                openModalToggle={openModalToggle}
              />
            ))}
        </ProductsListUl>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};

export default ProductsList;
