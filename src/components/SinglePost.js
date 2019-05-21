import React from 'react'
import * as PostsAPI from '../PostsAPI';
import { connect } from 'react-redux'


class SimplePost extends React.Component {



  render() {

    return (
      <div>
        <p>Commments</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { allposts: state.posts.data }
}

export default connect(mapStateToProps)(SimplePost)