import React from 'react'
import { ListGroup } from 'react-bootstrap';


class Posts extends React.Component {

  render() {

    return (
      <div>
        <ListGroup className="posts separar">
        { this.props.posts.map((post) => (
          
          <ListGroup.Item key={post.id}>
          <p>
          { post.title } 
          </p>

          </ListGroup.Item>

        ))}
      
        </ListGroup>
      </div>
    );
  }
}

export default Posts