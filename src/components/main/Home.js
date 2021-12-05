import React, { Component } from 'react';
import Landing from './Landing';
import Searches from './Searches';

export default class Home extends Component {
  render() {
    return this.props.searchResults.length === 0 ? (
      <Landing />
    ) : (
      <Searches searchResults={this.props.searchResults} />
    );
  }
}
