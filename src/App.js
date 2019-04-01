import React, { Component } from 'react'
import Categories from './components/Categories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import Teste from './components/Teste'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI'



class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    PostsAPI.getAll()
      .then((categories) =>
        this.setState({ categories: categories }));
  };

  componentDidMount() {
    PostsAPI.getAll()
      .then((posts) =>
        this.setState({ posts: posts }));
  };

  render() {

    var listCat = this.state.categories
    var listPost = this.state.posts
    console.log(listPost)
    console.log(listCat)

    return (
      <Container className="container">
        <NavBar />
        <Categories categorias={ listCat } />
        <Posts posts={ listPost } />
        <NewPost />
        <Teste />
      </Container>
    );
  }
}

export default App;
