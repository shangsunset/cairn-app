export default function user(state={
  fbID: null,
  name: '',
  picture: ''
  }, action) {

    switch(action.type) {
      case 'SAVE_USER':
        return {
          ...state,
          fbID: action.user.id,
          name: action.user.name,
          picture: action.user.picture
        };
      default:
        return state;
    }

}
