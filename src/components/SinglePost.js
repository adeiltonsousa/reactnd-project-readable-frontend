import React from 'react'
import * as PostsAPI from '../PostsAPI';
import { connect } from 'react-redux'


class SimplePost extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    PostsAPI.singlePost()
      .then(post => {
        this.setState({ loading: false, data: post })
      })
  }

  render() {

    if (this.state.loading) return <div>Loading...</div>

    return (
      <div>
        Title: {this.state.data.title}      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { singlepost: state.posts.data }
}

export default connect(mapStateToProps)(SimplePost)