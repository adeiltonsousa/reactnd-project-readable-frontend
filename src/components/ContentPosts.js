import React from 'react'
import BodyPost from './BodyPost'

class ContentPosts extends React.Component {

  
    render() {

    return (
      <span>
          <p className="separar categorias">
            Postagens Recentes:
          </p>
        <div className="post">  
          <BodyPost />
        </div>
      </span>
    );
  }
}

export default ContentPosts