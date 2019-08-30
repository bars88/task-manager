import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './index.css';
import ProfilePage from '../ProfilePage';
import { getUserActions } from '../../core/modules/user/actions';

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

const MainPage = ({ getUser }) => {
  useEffect(() => {
    getUser()
  }, []);
  return (
    <div className="main-page">
      <SideBar items={sideBarItems}/>
      <section className="main-page__content">
        <Switch>
          <Route path={'/main/profile'} component={ProfilePage} />      
          <Route path={'/main/tasks'} />
          <Redirect to={'/main/profile'} />
        </Switch>
      </section>
    </div>
  );
};

export default connect(
  null,
  {
    getUser: getUserActions.request,
  })(MainPage);