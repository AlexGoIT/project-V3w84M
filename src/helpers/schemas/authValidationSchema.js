import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Doesn't look like a valid email."
    )
    .required('Please enter your email address'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Please enter your password'),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Doesn't look like a valid email."
    )
    .required('Please enter your email address'),
  password: Yup.string()
    .min(6, 'Password must be minimum 6 characters long')
    .required('Please enter your password'),
});
