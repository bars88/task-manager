import React from 'react';
import { connect } from 'react-redux';
import List from '../List';
import ListItem from '../List/ListItem';
import Link from '../Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '../Button';
import './index.css';
import { userLogoutActions } from '../../core/modules/user/actions';


const SideBar = ({
  items,
  onLogout,
}) => (
  <section className="side-bar">
    <List component="nav" className="side-bar__list">
      {items.map(({ icon: Icon, title, path }) => (
        <Link path={path} className="side-bar__link" key={title}>
          <ListItem button>
            <span className="side-bar__icon">
              <Icon />
            </span>
            {title}
          </ListItem>
        </Link>
      ))}
    </List>
    <Button className="side-bar__logout" onClick={onLogout}>
      <ExitToAppIcon />
      <span className="side-bar__logout-text">Log Out</span>
    </Button>
  </section>
);

export default connect(null, 
  {
    onLogout: userLogoutActions.request,
  }
)(SideBar);