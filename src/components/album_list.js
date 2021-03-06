import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album_detail';

export default class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({ albums: response.data });
      })
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    if (!this.state.albums.length > 0) {
      return <Text>Loading...</Text>
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  };
}
