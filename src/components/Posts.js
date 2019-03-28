import React from 'react'
import { ListGroup } from 'react-bootstrap';


class Posts extends React.Component {

  render() {

    return (
      <ListGroup className="posts separar">
        <ListGroup.Item>Post 01         </ListGroup.Item>
        <ListGroup.Item>Post 02         </ListGroup.Item>
        <ListGroup.Item>Post 03         </ListGroup.Item>
        <ListGroup.Item>Post 04         </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Posts