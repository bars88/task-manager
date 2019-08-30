import React, { useState } from 'react';
import { connect } from 'react-redux';
import List from '../List';
import ListItem from '../List/ListItem';
import Link from '../Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '../Button';
import './index.css';
import { userLogoutActions, userDeleteActions } from '../../core/modules/user/actions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const SideBar = ({
  items,
  onLogout,
  onDeleteProfile,
}) => {
  const [showMenu, setMenuShowing] = useState(false);
  const onCloseMenu = () => setMenuShowing(false);
  const onOpenMenu = () => setMenuShowing(true);
  return (
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
      <div className="side-bar__logout">
        <Button aria-controls="logout" className="side-bar__button" onClick={onOpenMenu}>
          <ExitToAppIcon />
        </Button>
        <Menu
          className="side-bar__menu"
          id="logout"
          anchorEl={showMenu}
          open={showMenu}
          onClose={onCloseMenu}
        >
          <MenuItem onClick={onLogout}>Log Out</MenuItem>
          <MenuItem onClick={onDeleteProfile}>Delete Profile</MenuItem>
        </Menu>
      </div>
    </section>
  );
}

export default connect(null, 
  {
    onLogout: userLogoutActions.request,
    onDeleteProfile: userDeleteActions.request,
  }
)(SideBar);