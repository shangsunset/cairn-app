import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as UserActions from '../actions/userActions';

import UserProfile from '../components/UserProfile';

class UserProfileContainer extends Component {

  render() {

    return (
      <UserProfile {...this.props} />
    );
    
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);


