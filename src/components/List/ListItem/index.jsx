import { ListItem as MaterialListItem } from '@material-ui/core/';
import React from 'react';

const ListItem = ({
  children,
  ...props
}) => (
  <MaterialListItem {...props}>
    {children}
  </MaterialListItem>
);

export default ListItem;