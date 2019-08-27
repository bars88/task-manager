import React from 'react';
import { Form, Field } from 'formik';
import Input from '../../components/Input';
import './index.css';
import Button from '../../components/Button';

const RegistrationForm = ({
  submitForm
}) => (
  <Form className="registration-form">
    <Field
      name="name"
      label="Name"
      required
      component={Input}
      type="text"
    />
    <Field
      name="age"
      label="Age"
      component={Input}
      type="number"
    />
    <Field
      name="email"
      label="E-mail"
      required
      component={Input}
      type="text"
    />
    <Field
      name="password"
      label="Password"
      required
      component={Input}
      type="password"
    />
    <Field
      name="rePassword"
      label="Re-Password"
      required
      component={Input}
      type="password"
    />
    <Button variant="contained" className="registration-form__button" onClick={submitForm}>
      Register
    </Button>
  </Form>
);

export default RegistrationForm;