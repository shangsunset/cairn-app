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

  componentDidMount() {
    // if (this.props.user.accessToken) {
    //   this.props.navigator.push({ id: 'userProfile', title: 'My Profile' });
    // }
  }

  render() {

    // if (!this.props.user.accessToken) {
    //   return <Loader />;
    // } else {
    //   
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

                  this.props.actions.requestAccessToken();
                  this.props.actions.requestUserProfile();
                  this.props.navigator.push({ id: 'userProfile', title: 'My Profile'});
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
    // }
  }
}


export default Login;
