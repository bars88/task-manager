import React from 'react';
import { List as MaterialList } from '@material-ui/core';


const List = ({
  items,
  children,
  ...props
}) => (
  <MaterialList {...props}>
    {children}
  </MaterialList>
);

export default List;