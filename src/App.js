import React from 'react'
import ListCategories from './components/ListCategories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import ContentPosts from './components/ContentPosts'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI';
import {
  listCategories
} from '../src/action/categorias'
import { connect } from 'react-redux'

class App extends React.Component {

  state = {
          loading: true
  }

  componentDidMount() {
    PostsAPI.getCategories()
      .then(categories => {
        this.props.dispatch( listCategories(categories) );

        this.setState({ loading: false })
      })
  }

  render() {


     if(this.state.loading) return <div>Loading...</div>

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

export default connect(null)(App)