import React from 'react';
import classnames from 'classnames';
import { Button as MaterialButton } from '@material-ui/core';
import './index.css';

const Button = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <MaterialButton onClick={onClick} className={classnames('button', className)} {...props}>
    {children}
  </MaterialButton>
);

export default Button;