import React, {
  Navigator,
  Component,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create(require('./styles.js'));

import LoginContainer from './containers/LoginContainer';
import UserProfile from './components/UserProfile';


let NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null
    }

    let previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>

        <Text>
          Back
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <Text></Text>
    )
  }

}

export default class App extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return <LoginContainer navigator={navigator} />;
      case 'user_profile':
        return <UserProfile navigator={navigator} />;
      default:
        return <UserProfile navigator={navigator} />;

    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'login' }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper}
          />
        }
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
}
