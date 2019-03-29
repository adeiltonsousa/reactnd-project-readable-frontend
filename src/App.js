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
  }

  componentDidMount() {
    PostsAPI.getAll()
      .then((categories) =>
        this.setState({ categories: categories }));
  };


  render() {

    var listCat = this.state.categories
    console.log(listCat)

    return (
      <Container className="container">
        <NavBar />
        <Categories categorias={ listCat } />
        <Posts />
        <NewPost />
        <Teste />
      </Container>
    );
  }
}

export default App;
