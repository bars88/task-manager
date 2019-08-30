import React, { useRef } from 'react';
import Button from '../Button';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import './index.css';

const UploadImage = ({ form, field, uploadAvatar }) => {
  const fileEl = useRef();
  const onChange = (e) => {
    form.setFieldValue(field.name, e.target.value);
    uploadAvatar(fileEl.current.files[0]);
  }
  return (
    <>
      <input
        name="avatar"
        onChange={onChange}
        accept="image/*"
        className="upload-input"
        id="button-file"
        multiple
        type="file"
        ref={fileEl}
      />
      
      <Button className="upload-button">
        <label htmlFor="button-file">
          <CloudUploadOutlinedIcon />
        </label>
      </Button>
      
    </>
  );
};

export default UploadImage;