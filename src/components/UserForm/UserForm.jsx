import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { RadioOption } from './RadioOption';
import format from 'date-fns/format';
import sprite from '../../assets/images/sprite.svg';

import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
  WrapperLevel,
  WrappInput,
  UserFormStyled,
  UserFormFieldWrapper,
  UserFormError,
  UserFormBloodWrapper,
  UserFormBloodSexWrapper,
  UserFormSexWrapper,
} from './UserForm.styled';

import StyledDatepicker from './Datepicker/Datepicker';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/auth/usersOperations';
import { parseISO } from 'date-fns';
import { fetchCalculate } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import { selectIsLoading } from 'redux/api/apiSelectors';

const UserForm = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  const birthdayDateObj = parseISO(
    user.profileData?.birthday.split('-').reverse().join('-')
  );

  const dispatch = useDispatch();

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

  const initialValues = user.profileDataFill
    ? {
        name: user.name,
        height: user.profileData.height,
        currentWeight: user.profileData.currentWeight,
        desiredWeight: user.profileData.desiredWeight,
        birthday: birthdayDateObj,
        levelActivity: user.profileData.levelActivity,
        sex: user.profileData.sex,
        blood: user.profileData.blood,
      }
    : {
        name: user.name,
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: '',
      };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    height: Yup.number()
      .max(250, 'Height must not exceed 250 cm')
      .positive('Height must be positive')
      .required('Height is required')
      .min(150, 'Height must be at least 150 cm'),
    currentWeight: Yup.number()
      .max(200, 'Current weight must not exceed 200 kg')
      .positive('Weight must be positive')
      .required('Current weight is required')
      .min(35, 'Current weight must be at least 35 kg'),
    desiredWeight: Yup.number()
      .max(200, 'Desired weight must not exceed 200 kg')
      .positive('Weight must be positive')
      .required('Desired weight is required')
      .min(35, 'Desired weight must be at least 35 kg'),
    birthday: Yup.date().required('Birthday is required'),
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

  const handleSubmit = async ({ name, ...profileData }) => {
    const user = {
      name,
      profileData: {
        ...profileData,
        birthday: format(profileData.birthday, 'dd-MM-yyyy'),
      },
    };
    await dispatch(updateProfile(user)).unwrap();
    await dispatch(fetchCalculate()).unwrap();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
      enableReinitialize={true}
      noValidate={true}
    >
      {({ isValid, dirty, ...formik }) => (
        <UserFormStyled>
          {isLoading && <Loader />}
          <FormContainer>
            <UserFormFieldWrapper>
              <SectionTitle>Basic info</SectionTitle>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={Input}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <UserFormError>
                  <svg>
                    <use href={`${sprite}#error`}></use>
                  </svg>
                  {formik.errors.name}
                </UserFormError>
              )}
            </UserFormFieldWrapper>
            <UserFormFieldWrapper>
              <Field
                type="text"
                name="email"
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                as={Input}
                placeholder="Your email"
                value={user.email}
                disabled
              />
            </UserFormFieldWrapper>
          </FormContainer>

          <WrapperInputField>
            <WrappInput>
              <label htmlFor="height">Height</label>
              <Field
                type="number"
                inputMode="numeric"
                name="height"
                id="height"
                placeholder="0"
                as={InputField}
                min="150"
                step="1"
              />
              {formik.touched.height && formik.errors.height && (
                <UserFormError>
                  <svg>
                    <use href={`${sprite}#error`}></use>
                  </svg>
                  {formik.errors.height}
                </UserFormError>
              )}
            </WrappInput>

            <WrappInput>
              <label htmlFor="currentWeight">Current Weight</label>
              <Field
                type="number"
                inputMode="numeric"
                name="currentWeight"
                id="currentWeight"
                placeholder="0"
                as={InputField}
                min="35"
                step="1"
              />
              {formik.touched.currentWeight && formik.errors.currentWeight && (
                <UserFormError>
                  <svg>
                    <use href={`${sprite}#error`}></use>
                  </svg>
                  {formik.errors.currentWeight}
                </UserFormError>
              )}
            </WrappInput>

            <WrappInput>
              <label htmlFor="desiredWeight">Desired Weight</label>
              <Field
                type="number"
                inputMode="numeric"
                name="desiredWeight"
                id="desiredWeight"
                placeholder="0"
                as={InputField}
                min="35"
                step="1"
              />
              {formik.touched.desiredWeight && formik.errors.desiredWeight && (
                <UserFormError>
                  <svg>
                    <use href={`${sprite}#error`}></use>
                  </svg>
                  {formik.errors.desiredWeight}
                </UserFormError>
              )}
            </WrappInput>

            <WrappInput>
              <StyledDatepicker
                selectedDate={
                  formik.values.birthday
                    ? new Date(formik.values.birthday)
                    : null
                }
                setSelectedDate={date => {
                  const formattedDate = parseISO(date.toISOString());
                  formik.setFieldValue('birthday', formattedDate);
                }}
              />
              {formik.touched.birthday && formik.errors.birthday && (
                <UserFormError>
                  <svg>
                    <use href={`${sprite}#error`}></use>
                  </svg>
                  {formik.errors.birthday}
                </UserFormError>
              )}
            </WrappInput>
          </WrapperInputField>
          <WrapperRadio>
            <SectionTitle>Blood</SectionTitle>
            <UserFormBloodSexWrapper>
              <UserFormBloodWrapper>
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
              </UserFormBloodWrapper>

              <UserFormSexWrapper>
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
              </UserFormSexWrapper>
            </UserFormBloodSexWrapper>

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

          <Button type="submit" disabled={!(isValid && dirty)}>
            Save
          </Button>
        </UserFormStyled>
      )}
    </Formik>
  );
};

export default UserForm;
