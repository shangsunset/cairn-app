import {
   FBSDKAccessToken,
   FBSDKGraphRequest
} from 'react-native-fbsdkcore';


function requestAccessToken() {

  return dispatch => {

    FBSDKAccessToken.getCurrentAccessToken(response => {
      return dispatch(requestUserProfile(response.tokenString));
    });
  }
}

function requestUserProfile(token) {
  
  return (dispatch) => {
    
    const fetchUserRequest = new FBSDKGraphRequest((error, user) => {
      if (error) {
        console.log('Error making request.');
      } else {
        user['accessToken'] = token;
        user['picture'] = user.picture.data.url;
        dispatch(saveUserToStore(user));
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


function shouldSaveUser(state) {
  const token = fetchAccessToken(); 
  if (!token) {
    return true;
  }
  return false;
}

function fetchAccessToken() {
  return fetch('http://localhost:3000/api/users/token')
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      return json.accessToken;
    })
    .catch(err => {
      console.error(err);
    });
}

export function saveUserIfNeeded() {
  return (dispatch, getState) => {
    if (shouldSaveUser(getState)) {
      return dispatch(requestAccessToken());
    }
  }
}
