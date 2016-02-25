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

  componentDidMount() {

    this.props.actions.fetchAccessToken();
  }

  render() {
    const { user } = this.props
    if (!user) {

      return (
        <View style={{ marginTop: 70 }}>
          <Text>Error loading profile</Text>
        </View>
      );
    } else {
      return (
        <View style={{ marginTop: 70 }}>
          <Image
            style={{width: 200, height: 200}}
            source={{ uri: user.picture }}
          />
          <Text>{ user.name }</Text>
        </View>
      )
    }
  }
}
