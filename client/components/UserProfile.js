import React, {
  Component,
  View,
  Text,
  Image
} from 'react-native';

import Loader from './Loader';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { user } = this.props
    if (!user) {

      return <Loader />;
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
