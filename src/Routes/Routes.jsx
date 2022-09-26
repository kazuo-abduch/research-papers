import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';

class RoutesFile extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/favorites" element={ <Favorites /> } />
      </Routes>
    )
  }
}

export default RoutesFile;