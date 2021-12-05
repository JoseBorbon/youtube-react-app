import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
// import Nav from './Nav';

export default class Routings extends Component {
  render() {
    return (
      <Routes>
       
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}
