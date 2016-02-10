import {
   FBSDKAccessToken,
   FBSDKGraphRequest
} from 'react-native-fbsdkcore';


export function getAccessToken() {

  return (dispatch) => {

    FBSDKAccessToken.getCurrentAccessToken((response) => {
      dispatch(saveAccessToken(response.tokenString));
    })
  }
}

export function getUserProfile() {
  
  return (dispatch) => {
    
    const fetchUserRequest = new FBSDKGraphRequest((error, response) => {
      if (error) {
        console.log('Error making request.');
      } else {
        // Data from request is in result
        dispatch(saveUserProfile(response))
      }
    }, '/me?fields=id,name,picture');

    // Start the graph request.
    fetchUserRequest.start();
  }
}

function saveAccessToken(token) {
  return {
    type: 'SAVE_ACCESS_TOKEN',
    token
  }
}

function saveUserProfile(user) {
  return {
    type: 'SAVE_USER_PROFILE',
    user
  }
}
