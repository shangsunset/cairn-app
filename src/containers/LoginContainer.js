import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as AuthActions from '../actions/authAction';
import Login from '../components/Login';

class LoginContainer extends Component {

  render() {
    return (

      <Login {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
