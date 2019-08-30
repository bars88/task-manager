import React from 'react';
import classnames from 'classnames';
import { Avatar as MaterialAvatar } from '@material-ui/core';
import get from 'lodash/get';
import './index.css';

const Avatar = ({
  src,
  userName,
  alt = 'avatar image',
  className,
}) => (
  <>
    {src ? (
      <MaterialAvatar
        alt={alt}
        src={`data:image/jpeg;base64, ${src}`}
        className={classnames('avatar', className)}
      />
    ) : (
      <MaterialAvatar className={classnames('avatar', className)}>
        {get(userName, '[0]')}
      </MaterialAvatar>
    )}
  </>
);

export default Avatar;