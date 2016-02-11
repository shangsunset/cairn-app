import React, { Component } from 'react-native'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import UserProfile from '../components/UserProfile';

class UserProfileContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { user } = this.props;
    if (user) {

      return (

        <UserProfile {...this.props} />
      );
    } else {
      return (
        <UserProfile />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  } 
}


export default connect(mapStateToProps)(UserProfileContainer);

