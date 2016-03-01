import { FBSDKGraphRequest } from 'react-native-fbsdkcore';
import { AsyncStorage } from 'react-native';

function saveUserToStore(user, token) {
  AsyncStorage.setItem('token', token);
  return {
    type: 'SAVE_USER',
    user,
    token
  }
}

export function loginSuccess(token) {

  return {
    type: 'LOGIN_SUCCESS',
    token
  }
}

function loginFailure() {
  return {
    type: 'LOGIN_FAILURE'
  }
}

function requestUserProfile(cb) {
  
    
  const fetchUserRequest = new FBSDKGraphRequest((error, user) => {
    if (error) {
      console.log('Error making request.');
    } else {

      user['picture'] = user.picture.data.url;
      cb(user);

    }
  }, '/me?fields=id,name,picture.width(200)');

  // Start the graph request.
  fetchUserRequest.start();
}

function registerUser(user, cb) {
  
  fetch('http://localhost:3000/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({
      name: user.name,
      fbID: user.id,
      picture: user.picture
    })
  })
  .then(checkStatus)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    cb(json);
  })
  .catch(error => {
    console.log(error);
  });
}

function authenticateUser(user, cb) {
 
  fetch(`http://localhost:3000/users/${user.id}/authenticate`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => {
      cb(json);
    })
    .catch(error => {
      console.log(error);
    });
}

export function handleFBLoggedInUser() {
  return dispatch => {

    requestUserProfile(user => {

      authenticateUser(user, res => {
        if (!res.success) {

          registerUser(user, res => {
            dispatch(saveUserToStore(res.user, res.token));
          });

        } else {
          // user already exists in the db
          dispatch(saveUserToStore(res.user, res.token));
        }
      });

    });
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error = response.status;
    throw error
  }
}
