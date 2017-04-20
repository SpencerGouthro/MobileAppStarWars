import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import InputJoke from './src/components/InputJoke';
import JokePage from './src/components/JokePage';
import Home from './src/components/Home';

export default class Routing extends Component {
    constructor() {
        super();

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
      if (route.name === 'homePage') {
        return <Home navigator={navigator} />;
      } else if (route.name === 'jokePage') {
        return <JokePage navigator={navigator} />;
      } else if (route.name === 'inputJokePage') {
        return <InputJoke navigator={navigator} />;
      }
    }
    
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'homePage' }}
                renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('newProject', () => Routing);
