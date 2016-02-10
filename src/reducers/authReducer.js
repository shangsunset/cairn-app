function auth(state={ accessToken: '', user: null }, action) {

    switch(action.type) {
      case 'SAVE_ACCESS_TOKEN':
        return {
          ...state,
          accessToken: action.token
        };

      case 'SAVE_USER_PROFILE':
        return {
          ...state,
          user: action.user
        };

      default:
        return state;
    }

}

export default auth;
