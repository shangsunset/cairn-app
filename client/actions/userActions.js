import {
   FBSDKAccessToken,
   FBSDKGraphRequest
} from 'react-native-fbsdkcore';

import { AsyncStorage } from 'react-native';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function requestAccessToken() {

  return dispatch => {

    FBSDKAccessToken.getCurrentAccessToken(response => {
      // saveAccessToken(response.tokenString);
      return dispatch(requestUserProfile(response.tokenString));
    });
  }
}


async function saveAccessToken(token) {
  try {
    await AsyncStorage.setItem('accessToken', token);
  } catch (error) {

    console.log(`error saveing access token: ${error}`);
  }
}


function requestUserProfile(token) {
  
  return (dispatch) => {
    
    const fetchUserRequest = new FBSDKGraphRequest((error, user) => {
      if (error) {
        console.log('Error making request.');
      } else {
        user['picture'] = user.picture.data.url;
        dispatch(saveUserToStore(user));
        user['accessToken'] = token;
        postUserToServer(user);

      }
    }, '/me?fields=id,name,picture.width(200)');

    // Start the graph request.
    return fetchUserRequest.start();
  }
}

function postUserToServer(user) {
  
  fetch('http://localhost:3000/api/users', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      fbID: user.id,
      accessToken: user.accessToken,
      name: user.name,
      picture: user.picture
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log('here is result');
    console.log(json);
  })
  .catch(error => {
    console.log('here is an error');
    console.log(error);
  });
}

function saveUserToStore(user) {
  return {
    type: 'SAVE_USER',
    user
  }
}

export function fetchAccessToken() {
  return dispatch => {

    fetch('http://localhost:3000/api/users/token', {
      credentials: 'include' 
    })
    .then(checkStatus)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export function saveUserIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(requestAccessToken());
  }
}
