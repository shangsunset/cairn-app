import React, {
  Component,
  View,
  Text,
  Image
} from 'react-native';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.user) {

      return (
        <View style={{ marginTop: 70 }}>
          <Text>Error loading profile</Text>
        </View>
      );
    } else {
      const { user } = this.props
      console.log(user.picture);
      return (
        <View style={{ marginTop: 70 }}>
          <Text>{ user.name }</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{ uri: user.picture }}
          />
        </View>
      )
    }
  }
}
