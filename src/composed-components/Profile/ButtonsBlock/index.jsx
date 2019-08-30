import React from 'react';
import Button from '../../../components/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './index.css';
import UploadImage from '../../../components/UploadImage';
import { Field } from 'formik';

const ButtonsBlock = ({
  onEditClick,
  onSaveClick,
  onCancelClick,
  isEditMode,
  onUploadAvatar,
  onDeleteAvatar,
}) => {
  return (
    <div className="profile-buttons">
      {!isEditMode ? (
        <>
          <Button
            onClick={onEditClick}
            className="profile-buttons__button"
          >
            <EditOutlinedIcon />
          </Button>
          <Field
            name="image"
            component={UploadImage}
            uploadAvatar={onUploadAvatar}
          />
          <Button
            onClick={onDeleteAvatar}
            className="profile-buttons__button"
          >
            <DeleteOutlineIcon />
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={onSaveClick}
            className="profile-buttons__button"
          >
            <DoneIcon />
          </Button>
          <Button
            onClick={onCancelClick}
            className="profile-buttons__button"
          >
            <ClearIcon />
          </Button>
        </>
      )}
    </div>
  )
};

export default ButtonsBlock;