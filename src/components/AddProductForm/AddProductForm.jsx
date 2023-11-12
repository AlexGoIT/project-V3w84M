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
import products from '../../resources/products.json';

const AddProductForm = ({ productId, closeModal }) => {
  const formik = useFormik({
    initialValues: { amount: '' },
    validationSchema: addProductSchema,
    onSubmit: ({ amount }) => handleSubmit(amount),
  });

  productId = '5d51694902b2373622ff5e13';
  const product = products.find(product => product._id.$oid === productId);

  const calculateCalories = () => {
    const calories = (formik.values.amount * product.calories) / 100;
    return Math.round(calories);
  };

  const handleSubmit = amount => {
    const data = {
      id: productId,
      date: format(Date.now(), 'dd/MM/yyyy'),
      amount,
      calories: calculateCalories(),
    };
    console.log(data);

    //Відправляємо дані на бек, чекаємо позитивної відповіді після якої закриваємо модалку з формою
  };

  return (
    <>
      <ProductStyledForm onSubmit={formik.handleSubmit}>
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
