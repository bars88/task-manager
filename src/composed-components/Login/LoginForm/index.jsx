import React from 'react';
import { Form, Field } from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import './index.css';
import Link from '../../../components/Link';

const LoginForm = ({
  submitForm,
}) => (
  <Form className="login-form">
    <Field
      name="email"
      label="E-mail"
      type="email"
      required
      component={Input}
      className="login-form__input"
    />
    <Field
      name='password'
      label="Password"
      type="password"
      required
      component={Input}
      className="login-form__input"
    />
    <Button variant="contained" onClick={submitForm} className="login-form__button">
      Log In
    </Button>
    <Link path={'/registration'} className="login-form__link">
      Registration
    </Link>
  </Form>
);

export default LoginForm;