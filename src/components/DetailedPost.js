import React from 'react'
import { Link } from 'react-router-dom'
// import * as PostsAPI from './PostsAPI'


class DetailedPost extends React.Component {

    render() {

    return (
      <div>
        <p>
          <Link to="/">Post unico na página</Link>          
        </p>
      </div>
    );
  }
}

export default DetailedPost