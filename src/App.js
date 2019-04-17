import React, { Component } from 'react'
import ListCategories from './components/ListCategories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import ContentPosts from './components/ContentPosts'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI'


class App extends Component {

  state = {
    posts: []
  }

  // componentDidMount() {
  //   PostsAPI.getCats()
  //     .then((categories) =>
  //       this.setState({ categories: categories }));
  // };

  render() {

    var listCat = this.state.categories

    return (
      <Container className="container">
        <NavBar />
        <ListCategories categorias={listCat} />
        <ContentPosts />           
        <NewPost />
      </Container>
    );
  }
}

export default App;
