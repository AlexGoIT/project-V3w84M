import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { RadioOption } from './RadioOption';
import { parseISO } from 'date-fns';

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
} from './UserForm.styled';

import StyledDatepicker from './Datepicker/Datepicker';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { patchProfile } from 'redux/auth/authOperations';

const UserForm = ({ avatar }) => {
  const user = useSelector(selectUser);

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

  const initialValues = {
    name: user.name || 'Name',
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

  const handleSubmit = ({ name, ...profileData }) => {
    const user = JSON.stringify({ name, profileData });

    console.log(profileData);
    const formData = new FormData();

    formData.append('user', user);

    if (avatar) {
      formData.append('avatar', avatar, avatar.name);
    } else {
      formData.append('avatar', null);
    }

    for (let property of formData.entries()) {
      console.log(property[0], ':', property[1]);
    }

    dispatch(patchProfile(formData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty, ...formik }) => (
        <Form>
          <FormContainer>
            <div>
              <SectionTitle>Basic info</SectionTitle>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={Input}
                value={formik.values.name}
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
                min="150"
                step="1"
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
                  min="35"
                  step="1"
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
                  min="35"
                  step="1"
                />
                <label htmlFor="desiredWeight">Desired Weight</label>
              </WrappInput>
            </Wrapper>

            <Wrapper>
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

          <Button type="submit" disabled={!(isValid && dirty)}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
