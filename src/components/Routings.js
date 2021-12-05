import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './main/Home';
import About from './main/About';

export default class Routings extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home searchResults={this.props.searchResults} />}
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/videos/:id" element={<Media />} /> WORK IN PROGRESS -- Jose --*/}
      </Routes>
    );
  }
}
