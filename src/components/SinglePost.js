import React from 'react'
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