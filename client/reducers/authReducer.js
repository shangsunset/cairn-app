export default function auth(state = {
  name: null,
  picture: null,
  isAuthenticated: false,
  token: null
  }, action) {

    switch(action.type) {
      case 'SAVE_USER':
        return {
          ...state,
          name: action.user.name,
          picture: action.user.picture,
          token: action.token,
          isAuthenticated: true
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.token
        }
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          token: null
        }
      default:
        return state;
    }

}
