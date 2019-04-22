import React, { Component } from 'react'
import ListCategories from './components/ListCategories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import ContentPosts from './components/ContentPosts'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI';
import listCategories from './action/categories'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    PostsAPI.getCategories()
      .then(categories => {
        dispatch(listCategories(categories));
      })
  }

  render() {

    return (
      <Container className="container">
        <NavBar />
        <ListCategories />
        <ContentPosts />
        <NewPost />
      </Container>
    );
  }
}

export default App;
