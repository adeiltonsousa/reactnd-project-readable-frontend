import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Categories from './components/Categories'
import NewPost from './components/NewPost'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Categories />
        <Posts />
        <NewPost />
      </div>
    );
  }
}

export default App;
