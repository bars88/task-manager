import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '../../components/Avatar';
import { selectUser } from '../../core/modules/user/selectors';
import ProfileForm from './ProfileForm';
import './index.css';
import ButtonsBlock from './ButtonsBlock';
import { userUpdateActions, userUploadAvatarActions, userDeleteAvatarActions } from '../../core/modules/user/actions';

const Profile = ({
  user,
  updateUser,
  uploadAvatar,
  deleteAvatar,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false);
  const onEdit = () => setEditMode(true);
  const onSave = () => {
    updateUser(props.values);
    setEditMode(false);
  };
  const onCancel = () => {
    props.resetForm();
    setEditMode(false);
  };
  return (
    <div className="profile">
      <Avatar
        src={user.avatar}
        userName={user.name}
        className="profile__avatar"
      />
      <ProfileForm disabled={!editMode} {...props} />
      <ButtonsBlock
        isEditMode={editMode}
        onEditClick={onEdit}
        onSaveClick={onSave}
        onCancelClick={onCancel}
        onUploadAvatar={uploadAvatar}
        onDeleteAvatar={deleteAvatar}
      />
    </div>
  )
}
const mapStateToProps = (state) => ({
  user: selectUser(state),
})

export default connect(
  mapStateToProps,
  {
    updateUser: userUpdateActions.request,
    uploadAvatar: userUploadAvatarActions.request,
    deleteAvatar: userDeleteAvatarActions.request,
  }
  )(Profile);