import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({
  color = 'primary',
}) => (
  <CircularProgress color={color} className="spinner" />
);

export default Loading;

