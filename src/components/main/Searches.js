import React, { Component } from 'react';
import YouTube from 'react-youtube'
import './Searches.css';

export default class Searches extends Component {
  constructor(props) {
    super(props);
    this.onReady = this.onReady.bind(this);
  }

  static defaultProps = {
    opts: {
      height: '220',
      width: '200',
    },
  };

  onReady(evt) {
    evt.target.pauseVideo();
  }

  render() {
    const videos = this.props.searchResults.map(
      ({ title, videoId, channelTitle, thumbnail }) => {
        return (
          <YouTube
            containerClassName="Youtube-video"
            videoId={videoId}
            opts={this.props.opts}
            onReady={this.onReady}
          />
        );
      }
    );

    return <main className="Youtube-searches">{videos}</main>;
  }
}
