import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';

export default class Routings extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}
