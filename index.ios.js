import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import About from './src/components/About';
import Home from './src/components/Home';

export default class Routing extends Component {
    constructor() {
        super();

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
      if (route.name === 'homePage') {
        return <Home navigator={navigator} />;
      } else if (route.name === 'aboutPage') {
        return <About navigator={navigator} />;
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
