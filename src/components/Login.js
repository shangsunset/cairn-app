import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { FBSDKLoginButton } from 'react-native-fbsdklogin';
/* import {
   FBSDKAccessToken,
   FBSDKGraphRequest
   } from 'react-native-fbsdkcore'; */

import { loginFinished, logoutFinished } from '../actions/authAction';

const styles = StyleSheet.create(require('../styles.js'));

class Login extends Component {

  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <FBSDKLoginButton
          style={styles.loginButton}
          onLoginFinished={loginFinished}
          onLogoutFinished={logoutFinished}
          readPermissions={[]}
          publishPermissions={[]}
        />
      </View>
    );
  }
}


export default Login;
