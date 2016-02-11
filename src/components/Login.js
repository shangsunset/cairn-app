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


const styles = StyleSheet.create(require('../styles.js'));

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);
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

                this.props.actions.getAccessToken();
                this.props.actions.getUserProfile();
                this.props.navigator.push({ id: 'userProfile' });
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
