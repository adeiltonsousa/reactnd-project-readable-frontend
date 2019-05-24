import React from 'react'
import ListCategories from './components/ListCategories'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar'
import BodyPost from './components/BodyPost'
import SinglePost from './components/SinglePost'
import { Container } from 'react-bootstrap'
import './style.css'
import * as PostsAPI from './PostsAPI';
import {  handleInitialData,
          listCategories
        } from '../src/action'
import { connect } from 'react-redux'

class App extends React.Component {

  state = {
          loading: true
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())

    PostsAPI.getCategories()
      .then(categories => {
        this.props.dispatch( listCategories(categories) );
        this.setState({ loading: false })
      })
  }

  render() {

    console.log(this.props)



    if(this.state.loading) return <div>Loading...</div>

    return (
      <Container className="container">
        <NavBar />
        <ListCategories />
        <BodyPost />
        <NewPost />
      </Container>
    );
  }
}

export default connect(null)(App)