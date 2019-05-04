import React from 'react'
import BodyPost from './BodyPost'
import { Row, Col } from 'react-bootstrap'
import * as PostsAPI from '../PostsAPI'



class PostsNaCategoria extends React.Component {

    render() {

    var posts = this.state.posts

    return ( 
        <div className="post">     
          <span>Listar Posts da Mesma Categoria</span>  
        </div>
    );
  }
}

export default PostsNaCategoria