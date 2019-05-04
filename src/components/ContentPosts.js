import React from 'react'
import ListPost from './ListPost'

class ContentPosts extends React.Component {

  
    render() {

    return (
      <span>
          <p className="separar categorias">
            Postagens Recentes:
          </p>
        <div className="post">  
          <ListPost />
        </div>
      </span>
    );
  }
}

export default ContentPosts