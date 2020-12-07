import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

const App = () => {

  return (
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </Router>
  );
};

export default App;





