import PropTypes from 'prop-types';
import sprite from 'assets/images/sprite.svg';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

import {
  ProductsCard,
  ProductsCardStatus,
  ProductsCardDiet,
  ProductsCardDietText,
  ProductsCardStatusCount,
  ProductsCardStatusCountTrue,
  ProductsCardStatusAdd,
  ProductsCardTitle,
  ProductsCardInfoList,
  ProductsCardInfoItem,
  ProductsCardInfoValue,
  IconAfterAdd,
  IconBeforeTitle,
} from './ProductsItem.styled';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/AddProductForm';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';
import { useState } from 'react';

export const ProductsItem = ({ product, color }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [totalCalories, setTotalCalories] = useState(0);
  const data = useSelector(selectUser);
  const bloodType = data.profileData.blood;

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
    setIsProductAdded(false);
    setTotalCalories(0);
  };

  const onAddedSuccessfully = calories => {
    setTotalCalories(calories);
    setIsProductAdded(true);
  };

  return (
    <ProductsCard>
      <ProductsCardStatus>
        <ProductsCardDiet>
          <ProductsCardDietText>DIET</ProductsCardDietText>
        </ProductsCardDiet>
        <ProductsCardStatusCount>
          <ProductsCardStatusCountTrue
            isRecommended={product.groupBloodNotAllowed[bloodType]}
          >
            {product.groupBloodNotAllowed[bloodType]
              ? 'Recommended'
              : 'Not recommended'}
          </ProductsCardStatusCountTrue>

          <ProductsCardStatusAdd onClick={toggleModal} type="button">
            Add
            <IconAfterAdd>
              <use href={`${sprite}#icon-arrow`} />
            </IconAfterAdd>
          </ProductsCardStatusAdd>
        </ProductsCardStatusCount>
      </ProductsCardStatus>

      <ProductsCardTitle>
        <IconBeforeTitle>
          <use href={`${sprite}#icon-icon`} />
        </IconBeforeTitle>
        {product.title}
      </ProductsCardTitle>

      <ProductsCardInfoList>
        <ProductsCardInfoItem>
          Calories:{' '}
          <ProductsCardInfoValue>
            {product.calories || '999'}
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          Category:{' '}
          <ProductsCardInfoValue>
            {product.category || '999'}
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          Weight:{' '}
          <ProductsCardInfoValue>
            {product.weight || '300'}
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
      </ProductsCardInfoList>

      {isModalOpen && (
        <BasicModalWindow isOpenModalToggle={toggleModal}>
          {isProductAdded ? (
            <AddProductSuccess
              key={'prodSuccess'}
              onClose={toggleModal}
              totalCalories={totalCalories}
            />
          ) : (
            <AddProductForm
              key={'addProd'}
              productId={product._id}
              closeModal={toggleModal}
              onSuccess={onAddedSuccessfully}
            />
          )}
        </BasicModalWindow>
      )}
    </ProductsCard>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  openModalToggle: PropTypes.func.isRequired,
};
