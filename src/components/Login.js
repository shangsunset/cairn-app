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


import * as AuthActions from '../actions/authAction';

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

                this.props.navigator.push({ id: 'user_profile' });
                this.props.dispatch(AuthActions.getAccessToken());
                this.props.dispatch(AuthActions.getUserProfile());
              }
            }
          }}
          onLogoutFinished={() => {
            alert('you logged out');
          }}
          readPermissions={['public_profile']}
          publishPermissions={[]}
        />
      </View>
    );
  }
}


export default Login;
