import React, { Component } from 'react'
import Categories from './components/ListCategories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import ContentPosts from './components/ContentPosts'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI'


class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    PostsAPI.getCats()
      .then((categories) =>
        this.setState({ categories: categories }));
  };

  render() {

    var listCat = this.state.categories

    return (
      <Container className="container">
        <NavBar />
        <Categories categorias={listCat} />
        <ContentPosts />           
        <NewPost />
      </Container>
    );
  }
}

export default App;
