import React from 'react';
import classnames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import './index.css';

const Link = ({
  path,
  children,
  className,
}) => (
  <RouterLink className={classnames('link', className)} to={path}>{children}</RouterLink>
);

export default Link;