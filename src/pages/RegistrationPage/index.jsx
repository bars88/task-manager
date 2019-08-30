import React from 'react';
import Page from '../../components/Page';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { userRegistrationActions } from '../../core/modules/user/actions';
import './index.css';
import RegistrationForm from '../../composed-components/Registration/RegistrationForm';
import userValidation from '../../core/modules/user/validation';

const registrationInitialValues = {
  name: '',
  email: '',
  password: '',
}

const RegistrationPage = ({
  onRegister,
}) => (
  <Page title="Registration Form" className="registration-form">
    <Formik
      initialValues={registrationInitialValues}
      onSubmit={onRegister}
      component={RegistrationForm}
      validate={userValidation}
    />
  </Page>
);

export default connect(
  null,
  {
    onRegister: userRegistrationActions.request,
  }
)(RegistrationPage);