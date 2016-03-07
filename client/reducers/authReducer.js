export default function auth(state = {
  user: null,
  token: null
  }, action) {

    switch(action.type) {
      case 'SAVE_USER':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.token,
          user: action.user
        }
      case 'LOGIN_FAILURE':
      case 'LOGOUT_USER':
        return {
          ...state,
          isAuthenticated: false,
        }
      default:
        return state;
    }

}
