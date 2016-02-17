import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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


export default connect(mapStateToProps)(UserProfileContainer);

