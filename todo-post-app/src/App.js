import React, { Component } from 'react';
import './App.css';
import NewPost from './components/NewPost/NewPost';
import AllPosts from './components/AllPosts';

class App extends Component {
  render () {
    console.log("app");
    return (
      <div className="App">
        <NewPost />
        <AllPosts />
      </div>
    )

  }
}


export default App;
