import React from 'react'
import { Link } from 'react-router-dom'


class Post extends React.Component {

    render() {

    return (
      <div>
        <p>
          <Link to="/">Home</Link>          
        </p>
      </div>
    );
  }
}

export default Post