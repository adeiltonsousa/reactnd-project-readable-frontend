import React from 'react'
import * as PostsAPI from '../PostsAPI';
import { connect } from 'react-redux'
import Post from '../components/Post'



class SimplePost extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    PostsAPI.singlePost(this.props.match.params.id)
      .then(post => {
        this.setState({ loading: false, data: post })
      })
  }

  render() {

    if (this.state.loading) return <div>Loading...</div>

    return (
      <div>
        <Post p={this.state.data} />     
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { singlepost: state.posts.data }
}

export default connect(mapStateToProps)(SimplePost)