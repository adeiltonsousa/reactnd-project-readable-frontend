import React, { Component } from 'react'
import Categories from './components/Categories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import { Container } from 'react-bootstrap';
import './style.css'



class App extends Component {
  render() {
    return (
      <Container className="container">
        <NavBar />
        <Categories />
        <Posts />
        <NewPost />
      </Container>
    );
  }
}

export default App;
