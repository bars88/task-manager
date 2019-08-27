import React from 'react';
import classnames from 'classnames';
import { TextField } from '@material-ui/core';
import './index.css';

const Input = ({ className, onChange, onBlur, form, field, ...props }) => {
  const onInputChange = (e) => {
    onChange ? onChange() : form.setFieldValue(field.name, e.target.value);
  }
  const onInputBlur = () => {
    onBlur ? onBlur() : form.setFieldTouched(field.name);
  }
  const showError = form.touched[field.name] && Object.keys(form.errors).includes(field.name);
  return (
    <TextField
      onChange={onInputChange}
      onBlur={onInputBlur}
      className={classnames('input', className)}
      helperText={showError && form.errors[field.name]}
      error={showError}
      {...props}
    />
  )
};

export default Input;