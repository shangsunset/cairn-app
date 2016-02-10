import React, {
  Component,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux'

import Login from '../components/Login';

class LoginContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.accessToken) {
      this.navigator.push({ id: 'user_profile' });
    } else {

      return (

        <Login
          user={this.props.user}
          accessToken={this.props.accessToken}
          navigator={this.props.navigator}
          dispatch={this.props.dispatch}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    accessToken: state.accessToken
  } 
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ SubscriptionActions }, dispatch)
//   }
// }

export default connect(mapStateToProps)(LoginContainer);
