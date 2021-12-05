import React, { Component } from 'react';
import Nav from './common/Nav';
import SearchBar from './common/SearchBar';
import Routings from './Routings';
import Footer from './common/Footer';

export default class YoutubeApp extends Component {
  constructor() {
    super();
    this.state = { searchResults: [], searchTerm: '' };
    this.getSearch = this.getSearch.bind(this);
    this.changeSearchTerm = this.changeSearchTerm.bind(this);
  }

  changeSearchTerm(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  async getSearch() {
    const query = this.state.searchTerm
      .split('')
      .map((char) => (char !== ' ' ? char : '%20'))
      .join('');

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&safeSearch=strict&key=${process.env.REACT_APP_API_KEY}`
    );
    let searches = await response.json();
    searches = searches.items;

    const refinedSearches = searches.map(({ id, snippet }) => {
      const { videoId } = id;
      const { channelTitle, description, publishedAt, thumbnails, title } =
        snippet;

      return {
        title,
        videoId,
        channelTitle,
        description,
        publishedAt,
        thumbnail: thumbnails.default.url,
      };
    });
    this.setState({ searchResults: refinedSearches });
  }

  render() {
    return (
      <div>
        <Nav />
        <SearchBar
          changeSearchTerm={this.changeSearchTerm}
          getSearch={this.getSearch}
        />
        <Routings
          searchResults={this.state.searchResults}
          changeSearchTerm={this.changeSearchTerm}
        />
        <Footer />
      </div>
    );
  }
}
