// react-native run-ios to launch in simulator

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';

class App extends Component {
  // flex: 1 say expand component to fill entire content area of the device
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  };
}

AppRegistry.registerComponent('albums', () => App);