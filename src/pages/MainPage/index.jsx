import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './index.css';

const sideBarItems = [
  {
    icon: () => <PersonIcon />,
    title: 'Profile',
    path: '/main/profile',
  },
  {
    icon: () => <ListAltIcon />,
    title: 'Tasks',
    path: '/main/tasks',
  },
];

const MainPage = () => (
  <div className="main-page">
    <SideBar items={sideBarItems}/>
    <div>
    <Switch>
      <Route path={'/main/profile'} />
      <Route path={'/main/tasks'} />
      <Redirect to={'/main/profile'} />
    </Switch>
    </div>
  </div>
);

export default MainPage;