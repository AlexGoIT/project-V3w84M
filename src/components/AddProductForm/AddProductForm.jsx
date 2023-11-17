import { useFormik } from 'formik';
import format from 'date-fns/format';
import { addProductSchema } from 'helpers/schemas/addProductSchema';
import {
  ProductCaloriesAddButton,
  ProductCaloriesButtonsWrapper,
  ProductCaloriesCancelButton,
  ProductCaloriesError,
  ProductCaloriesErrorIcon,
  ProductCaloriesField,
  ProductCaloriesFieldWrapper,
  ProductCaloriesLabel,
  ProductCaloriesText,
  ProductFormFieldsWrapper,
  ProductNameField,
  ProductStyledForm,
} from './AddProductForm.styled';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from 'redux/api/apiSelectors';
import { addProduct } from 'redux/api/apiOperations';
import Loader from 'components/Loader';

const AddProductForm = ({ productId, closeModal, onSuccess }) => {
  const products = useSelector(selectProducts);
  const product = products.result.find(product => product._id === productId);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { amount: '' },
    validationSchema: addProductSchema,
    onSubmit: ({ amount }) => handleSubmit(amount),
  });

  const calculateCalories = () => {
    const calories = (formik.values.amount * product.calories) / 100;
    return Math.round(calories);
  };

  const handleSubmit = async amount => {
    const data = {
      productId: productId,
      date: format(Date.now(), 'dd-MM-yyyy'),
      weightConsumed: amount,
      caloriesConsumed: calculateCalories(),
    };

    await dispatch(addProduct(data)).unwrap();

    if (!isLoading && !error) {
      onSuccess(calculateCalories());
    }
  };

  return (
    <>
      <ProductStyledForm onSubmit={formik.handleSubmit}>
        {isLoading && <Loader />}
        <ProductFormFieldsWrapper>
          <ProductNameField type="text" defaultValue={product.title} disabled />
          <ProductCaloriesFieldWrapper>
            <ProductCaloriesLabel htmlFor="amount">grams</ProductCaloriesLabel>
            <ProductCaloriesField
              type="number"
              id="amount"
              name="amount"
              placeholder="0"
              required
              autoFocus
              value={formik.values.amount}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </ProductCaloriesFieldWrapper>
          {formik.touched.amount && formik.errors.amount && (
            <ProductCaloriesError>
              <ProductCaloriesErrorIcon>
                <use href={`${sprite}#error`}></use>
              </ProductCaloriesErrorIcon>
              {formik.errors.amount}
            </ProductCaloriesError>
          )}
        </ProductFormFieldsWrapper>
        <ProductCaloriesText>
          Calories: <span>{calculateCalories()}</span>
        </ProductCaloriesText>
        <ProductCaloriesButtonsWrapper>
          <ProductCaloriesAddButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Add to diary
          </ProductCaloriesAddButton>
          <ProductCaloriesCancelButton type="button" onClick={closeModal}>
            Cancel
          </ProductCaloriesCancelButton>
        </ProductCaloriesButtonsWrapper>
      </ProductStyledForm>
    </>
  );
};

export default AddProductForm;
