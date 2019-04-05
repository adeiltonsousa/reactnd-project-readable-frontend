import React from 'react'
import { ListGroup } from 'react-bootstrap'

class BodyPost extends React.Component {
  
  render() {

    var post = this.props.post

    return (
      <div>
        <ListGroup variant="flush" className="posts separar">             
          <ListGroup.Item variant="secondary">   { post.title }  </ListGroup.Item>
          <ListGroup.Item>   { post.body }  </ListGroup.Item>
        </ListGroup>   
      </div>
    );
  }
}

export default BodyPost