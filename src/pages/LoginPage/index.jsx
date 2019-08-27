import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import LoginForm from '../../composed-components/LoginForm';
import { userLoginActions } from '../../core/modules/user/actions';
import './index.css';
import Page from '../../components/Page';
import userValidation from '../../core/modules/user/validation';

const LoginPage = ({
  onLogin,
}) => (
  <Page>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onLogin}
      component={LoginForm}
      validate={userValidation}
    />
  </Page>
);

export default connect(null, {
  onLogin: userLoginActions.request,
})(LoginPage)