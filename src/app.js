import React, {
  Navigator,
  Component,
} from 'react-native';

import Login from './components/Login';
import UserProfile from './components/UserProfile';

export default class App extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return <Login navigator={navigator} />;
      case 'user_profile':
        return <UserProfile navigator={navigator} />;
      default:
        return <Login navigator={navigator} />;

    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'login' }}
        renderScene={this.renderScene}
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
