import React from 'react'
import * as PostsAPI from '../PostsAPI';
import { connect } from 'react-redux'
import Post from './Post';
import {
  listPosts  
} from '../action';



class BodyPost extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    PostsAPI.getPosts()
      .then(posts => {
        this.props.dispatch(listPosts(posts));
        this.setState({ loading: false })
      })
  }

  render() {

    if (this.state.loading) return <div>Loading...</div>

    return (
      <div>
        {this.props.allposts.map((p) =>
          
           <Post p={p} />

        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("---> State Posts", state);
  return { allposts: state.posts.data }
}

export default connect(mapStateToProps)(BodyPost)