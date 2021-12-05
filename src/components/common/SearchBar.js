import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleGetSearch = this.handleGetSearch.bind(this);
    this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
  }

  handleGetSearch(e) {
    e.preventDefault();
    this.props.getSearch();
  }

  handleChangeSearchTerm(e) {
    this.props.changeSearchTerm(e);
  }

  render() {
    return (
      <form onSubmit={this.handleGetSearch}>
        <input
          type="text"
          placeholder="Enter Search Here..."
          onChange={this.handleChangeSearchTerm}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
