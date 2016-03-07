import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { FBSDKLoginButton } from 'react-native-fbsdklogin';
import {
   FBSDKAccessToken,
   FBSDKGraphRequest
} from 'react-native-fbsdkcore';


import Loader from '../components/Loader';
const styles = StyleSheet.create(require('../styles.js'));

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <FBSDKLoginButton
          style={styles.loginButton}
          onLoginFinished={(error, result) => {

            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCancelled) {
                alert('Login cancelled.');
              } else {

                this.props.actions.handleFBLoggedInUser();
                this.props.navigator.push({ id: 'userProfile', title: 'My Profile'});
              }
            }
          }}
          onLogoutFinished={() => {
            this.props.actions.logoutUser();
          }}
          readPermissions={['public_profile']}
          publishPermissions={[]}
        />
      </View>
    );
  }
}


export default Login;
