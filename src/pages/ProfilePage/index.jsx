import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import { selectUserInitialValues, selectUser } from '../../core/modules/user/selectors';
import { userUpdateActions } from '../../core/modules/user/actions';
import Profile from '../../composed-components/Profile';
import Page from '../../components/Page';
import Loading from '../../components/Loading';

const ProfilePage = ({
  userInitialValues,
  updateUser,
  user,
}) => {
  return (
    <>
      {!isEmpty(user) ? (
        <Page className="profile-page">
          <Formik
            initialValues={userInitialValues}
            onSubmit={updateUser}
            component={Profile}
          />
        </Page>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userInitialValues: selectUserInitialValues(state),
  user: selectUser(state),
})

export default connect(
  mapStateToProps,
  {
    updateUser: userUpdateActions.request,
  }
)(ProfilePage);