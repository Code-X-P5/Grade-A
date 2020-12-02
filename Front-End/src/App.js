import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Students from './Students';

const App = () => {
	return (
		<Router>
			<Students />
		</Router>
	);
};

export default App;
