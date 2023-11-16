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

export const ProductsItem = ({ product, openModalToggle, color }) => {
  const data = useSelector(selectUser);
  const bloodType = data.profileData.blood;
  // console.log(bloodType);

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

          <ProductsCardStatusAdd
            onClick={() => {
              openModalToggle(product);
            }}
            type="button"
          >
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
    </ProductsCard>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  openModalToggle: PropTypes.func.isRequired,
};
