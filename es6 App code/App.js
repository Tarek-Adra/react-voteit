import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Feed from './Feed.js';

class App extends Component {
  render() {
    return (
      <div className="App">
			<h2 className="text-center">Cool Ideas</h2>
			<p className="text-center">You Can Vote or Add New Ideas and check top Ideas!!</p>
           <Feed />
      </div>
    );
  }
}

export default App;
