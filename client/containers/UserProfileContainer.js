import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as AuthActions from '../actions/authActions';

import UserProfile from '../components/UserProfile';

class UserProfileContainer extends Component {

  render() {
    console.log(this.props);

    return (
      <UserProfile {...this.props} />
    );
    
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
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
)(UserProfileContainer);


