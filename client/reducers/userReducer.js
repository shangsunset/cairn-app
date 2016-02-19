export default function user(state={
  accessToken: null,
  id: null,
  name: '',
  picture: ''
  }, action) {

    switch(action.type) {
      case 'SAVE_USER':
        return {
          ...state,
          id: action.user.id,
          accessToken: action.user.accessToken,
          name: action.user.name,
          picture: action.user.picture
        };
      default:
        return state;
    }

}
