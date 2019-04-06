import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class BodyPost extends React.Component {
  
  render() {

    var post = this.props.post

    return (
      <div>
        <ListGroup variant="flush" className="posts separar">               
        <Link to={`/${post.category}/${post.id}`}>
          <ListGroup.Item variant="secondary">   { post.title }  </ListGroup.Item>
        </Link>
          <ListGroup.Item>   { post.body }  </ListGroup.Item>
        </ListGroup>   
      </div>
    );
  }
}

export default BodyPost