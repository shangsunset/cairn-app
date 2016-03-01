import React, {
  Navigator,
  Component,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create(require('../styles.js'));

import * as AuthActions from '../actions/authActions';
import Loader from '../components/Loader';
import LoginContainer from './LoginContainer';
import UserProfileContainer from './UserProfileContainer';


let NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    if (index === 0 || route.id === 'login') {
      return null;
    }

    let previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>

        <Text>
          Back
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <Text>{ route.title }</Text>
    );
  }

}


class App extends Component {
  constructor() {
    super();
    this.state = {
      initialRoute: null
    }
    this.renderScene = this.renderScene.bind(this);
    this.loadInitialState = this.loadInitialState.bind(this);
  }

  componentDidMount() {

    this.loadInitialState().done();

  }

  async loadInitialState() {

    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {

        this.props.actions.loginSuccess(token);
      }
    } catch (error) {
      console.log(`error loading initial state: ${error}`);
    }

  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return <LoginContainer navigator={navigator} />;
      case 'userProfile':
        return <UserProfileContainer navigator={navigator} />;
      default:
        return <UserProfileContainer navigator={navigator} />;
    }
  }
  render() {

    console.log(this.state.initialRoute);
    if (!this.state.initialRoute) {
      return <Loader />
    } else {

      return (
        <Navigator
          initialRoute={{ id: this.state.initialRoute }}
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
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
