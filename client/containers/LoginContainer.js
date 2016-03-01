import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as AuthActions from '../actions/authActions';

import Login from '../components/Login';

class LoginContainer extends Component {

  render() {
    console.log(this.props.navigator.getCurrentRoutes());
    return (

      <Login {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
