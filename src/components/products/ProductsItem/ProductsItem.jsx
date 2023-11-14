import PropTypes from 'prop-types';

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
} from './ProductsItem.styled';

export const ProductsItem = ({ product, openModalToggle }) => {
  const profileData = useSelector(selectUser);
  const bloodType = profileData.blood;
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
          </ProductsCardStatusAdd>
        </ProductsCardStatusCount>
      </ProductsCardStatus>
      <ProductsCardTitle>{product.title}</ProductsCardTitle>

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
