import * as Yup from 'yup';

export const addProductSchema = Yup.object({
  amount: Yup.number()
    .moreThan(0, "Amount can't be 0 or less")
    .required('Please enter consumed amount'),
});
