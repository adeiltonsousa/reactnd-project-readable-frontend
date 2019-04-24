import React from 'react'
import InfoPost from './InfoPost'
import BodyPost from './BodyPost'
import * as PostsAPI from '../PostsAPI'

class ContentPosts extends React.Component {

  
    render() {

    return (
      <span>
          <p className="separar categorias">
            Postagens Recentes:
          </p>
        <div className="post">  
          <BodyPost />
                  {/* <InfoPost post={ post } /> */}
        </div>
      </span>
    );
  }
}

export default ContentPosts