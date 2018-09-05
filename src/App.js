import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory'
import { connect } from 'react-redux';

import {
  reduxInitApp,
  reduxGetAllUsers,
  reduxAddUser,
} from './actionCreators/usersActionsCreator';


const history = createHistory();

class App extends Component {
  componentDidMount() {
    this.props.reduxInitApp();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            
          </Switch>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  usersList: state.usersReducer,
});

const mapDispatchToProps = {
  reduxInitApp,
  reduxGetAllUsers,
  reduxAddUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
