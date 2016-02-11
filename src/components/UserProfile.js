import React, {
  Component,
  View,
  Text,
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
      return (
        <View style={{ marginTop: 70 }}>
          <Text>{ user.name }</Text>
        </View>
      )
    }
  }
}
