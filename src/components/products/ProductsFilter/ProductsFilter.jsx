import sprite from '../../../assets/images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from 'redux/api/apiOperations';
import { selectCategories } from 'redux/api/apiSelectors';
import {
  ProdFilterCategorySlct,
  ProdFilterForm,
  ProdFilterRecSlct,
  ProdFilterSearchBox,
  ProdFilterSearchField,
  ProdFilterSelectsWrapper,
  ProdSearchCancelBtn,
  ProdSearchIcon,
  ProdSearchSubmitBtn,
} from './ProductsFilter.styled';
import { useFormik } from 'formik';

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const productCategories = useSelector(selectCategories);
  const formik = useFormik({
    initialValues: { title: '', category: '', recommended: '' },
    onSubmit: values => handleSubmit(values),
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (values = formik.values) => {
    const { initialValues } = formik;
    const filledValues = Object.entries(values).filter(
      ([key, value]) => value !== initialValues[key]
    );
    const payload = Object.fromEntries(filledValues);

    dispatch(fetchProducts(payload));
  };

  const handleChange = e => {
    formik.handleChange(e);
    const { initialValues, values } = formik;
    if (e.target.value !== initialValues[e.target.value]) {
      const prePayload = { ...values, [e.target.name]: e.target.value };
      handleSubmit(prePayload);
    }
  };

  return (
    <>
      <ProdFilterForm onSubmit={formik.handleSubmit}>
        <ProdFilterSearchBox>
          <ProdFilterSearchField
            type="search"
            name="title"
            placeholder="Search"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.initialValues.title !== formik.values.title && (
            <ProdSearchCancelBtn
              type="button"
              onClick={() => {
                formik.setFieldValue('title', '');
                formik.handleSubmit();
              }}
            >
              <ProdSearchIcon>
                <use href={`${sprite}#x2`}></use>
              </ProdSearchIcon>
            </ProdSearchCancelBtn>
          )}
          <ProdSearchSubmitBtn type="submit">
            <ProdSearchIcon>
              <use href={`${sprite}#search`}></use>
            </ProdSearchIcon>
          </ProdSearchSubmitBtn>
        </ProdFilterSearchBox>

        <ProdFilterSelectsWrapper>
          <ProdFilterCategorySlct
            name="category"
            value={formik.values.category}
            onChange={handleChange}
          >
            <option value="">Categories</option>
            {productCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </ProdFilterCategorySlct>

          <ProdFilterRecSlct
            name="recommended"
            value={formik.values.recommended}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value={true}>Recommended</option>
            <option value={false}>Not recommended</option>
          </ProdFilterRecSlct>
        </ProdFilterSelectsWrapper>
      </ProdFilterForm>
    </>
  );
};

export default ProductsFilter;
