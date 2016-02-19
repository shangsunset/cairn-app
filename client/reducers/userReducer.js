export default function user(state={
  accessToken: null,
  id: null,
  name: '',
  picture: ''
  }, action) {

    switch(action.type) {
      case 'SAVE_ACCESS_TOKEN':
        return {
          ...state,
          accessToken: action.token
        };

      case 'SAVE_USER_PROFILE':
        return {
          ...state,
          id: action.user.id,
          name: action.user.name,
          picture: action.user.picture.data.url
        };

      default:
        return state;
    }

}
