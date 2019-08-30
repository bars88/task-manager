import React from 'react';
import { Form, Field } from 'formik';
import Input from '../../../components/Input';
import './index.css';

const ProfileForm = ({
  disabled,
}) => (
  <Form className="profile-form">
    <Field
      name="email"
      label="E-mail"
      component={Input}
      type="text"
      className="profile-form__input"
      disabled={disabled}
    />
    <Field
      name="name"
      label="Name"
      component={Input}
      type="text"
      className="profile-form__input"
      disabled={disabled}
    />
    <Field
      name="age"
      label="Age"
      component={Input}
      type="number"
      className="profile-form__input"
      disabled={disabled}
    />
  </Form>
);

export default ProfileForm;