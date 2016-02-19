import {
   FBSDKAccessToken,
   FBSDKGraphRequest
} from 'react-native-fbsdkcore';


export function requestAccessToken() {

  return (dispatch) => {

    return FBSDKAccessToken.getCurrentAccessToken((response) => {
      dispatch(saveAccessTokenToStore(response.tokenString));
    })
  }
}

export function requestUserProfile() {
  
  return (dispatch) => {
    
    const fetchUserRequest = new FBSDKGraphRequest((error, response) => {
      if (error) {
        console.log('Error making request.');
      } else {
        // Data from request is in result
        dispatch(saveUserProfileToStore(response))
      }
    }, '/me?fields=id,name,picture.width(200)');

    // Start the graph request.
    return fetchUserRequest.start();
  }
}

function saveAccessToken(token) {
  return {
    type: 'SAVE_ACCESS_TOKEN',
    token
  }
}

function saveUserProfileToStore(user) {
  return {
    type: 'SAVE_USER_PROFILE',
    user
  }
}
