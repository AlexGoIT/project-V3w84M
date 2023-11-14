import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { RadioOption } from './RadioOption';

import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
  Wrapper,
  WrapperLevel,
  WrappInput,
  IconSvg,
} from './UserForm.styled';

import sprite from '../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const UserForm = () => {
  const user = useSelector(selectUser);
  const userName = user.name;

  const bloodOptions = [
    { id: '1', value: 1, label: '1' },
    { id: '2', value: 2, label: '2' },
    { id: '3', value: 3, label: '3' },
    { id: '4', value: 4, label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'male', label: 'Male' },
    { id: 'Female', value: 'female', label: 'Female' },
  ];

  const levelOptions = [
    {
      id: 'level-1',
      value: 1,
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'level-2',
      value: 2,
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'level-3',
      value: 3,
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'level-4',
      value: 4,
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'level-5',
      value: 5,
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  const initialValues = {
    name: user.name,
    // email: user.email,
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    // email: Yup.string()
    //   .email('Invalid email format')
    //   .required('Email is required'),
    height: Yup.number()
      .min(150, 'Height must be at least 150 cm')
      .positive('Height must be positive')
      .required('Height is required'),
    currentWeight: Yup.number()
      .min(35, 'Current weight must be at least 35 kg')
      .positive('Weight must be positive')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .min(35, 'Desired weight must be at least 35 kg')
      .positive('Weight must be positive')
      .required('Desired weight is required'),
    birthday: Yup.date()
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        'Must be at least 18 years old'
      )
      .required('Birthday is required'),
    blood: Yup.number()
      .oneOf([1, 2, 3, 4], 'Invalid blood type')
      .required('Blood type is required'),
    sex: Yup.string()
      .oneOf(['male', 'female'], 'Invalid gender')
      .required('Gender is required'),
    levelActivity: Yup.number()
      .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
      .required('Activity level is required'),
  });

  const handleSubmit = values => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(values);
    for (let property of formData.entries()) {
      console.log(property[0], ':', property[1]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, ...formik }) => (
        <Form>
          <FormContainer>
            <div>
              <SectionTitle>Basic info</SectionTitle>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={Input}
              />
            </div>
            <div>
              <Field
                type="text"
                name="email"
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                as={Input}
                placeholder="Your email"
                defaultValue={user.email}
                disabled
              />
            </div>
          </FormContainer>

          <WrapperInputField>
            <WrappInput>
              <Field
                type="number"
                inputMode="numeric"
                name="height"
                id="height"
                placeholder="0"
                as={InputField}
              />
              <label htmlFor="height">Height</label>
            </WrappInput>
            <Wrapper>
              <WrappInput>
                <Field
                  type="number"
                  inputMode="numeric"
                  name="currentWeight"
                  id="currentWeight"
                  placeholder="0"
                  as={InputField}
                />
                <label htmlFor="currentWeight">Current Weight</label>
              </WrappInput>
            </Wrapper>
            <Wrapper>
              <WrappInput>
                <Field
                  type="number"
                  inputMode="numeric"
                  name="desiredWeight"
                  id="desiredWeight"
                  placeholder="0"
                  as={InputField}
                />
                <label htmlFor="desiredWeight">Desired Weight</label>
              </WrappInput>
            </Wrapper>
            <Wrapper>
              <WrappInput>
                <Field
                  type="text"
                  inputMode="numeric"
                  name="birthday"
                  id="birthday"
                  placeholder="00-00-0000"
                  as={InputField}
                />
                <label htmlFor="birthday"></label>
                <div style={{ position: 'relative' }}>
                  <IconSvg width="18" height="18">
                    <use href={`${sprite}#calendar`}></use>
                  </IconSvg>
                </div>
              </WrappInput>
            </Wrapper>
          </WrapperInputField>
          <WrapperRadio>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <div style={{ display: 'flex', marginRight: '20px' }}>
                {bloodOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="blood"
                    value={option.value}
                    checked={formik.values.blood === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('blood', option.value)}
                  />
                ))}
              </div>

              <div style={{ display: 'flex' }}>
                {sexOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="sex"
                    value={option.value}
                    checked={formik.values.sex === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('sex', option.value)}
                  />
                ))}
              </div>
            </div>

            <WrapperLevel>
              {levelOptions.map(option => (
                <RadioOption
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  value={option.value}
                  checked={formik.values.levelActivity === option.value}
                  label={option.label}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', option.value)
                  }
                />
              ))}
            </WrapperLevel>
          </WrapperRadio>

          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;