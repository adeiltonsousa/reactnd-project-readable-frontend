import React from 'react'
import InfoPost from './InfoPost'
import BodyPost from './BodyPost'
import * as PostsAPI from '../PostsAPI'

class ContentPosts extends React.Component {

    state = {
        posts: [],
      }

      componentDidMount() {    
        PostsAPI.getPosts()
          .then((posts) =>
            this.setState({ posts: posts }));
      };

    render() {

    var posts = this.state.posts

    return (
      <span>
          <p className="separar categorias">
            Postagens Recentes:
          </p>
        <div className="post">     
          { posts.map((post) => ( 
              <span  key={post.id} >
                  <BodyPost post={ post } />
                  <InfoPost post={ post } />
              </span>
          ))}
        </div>
      </span>
    );
  }
}

export default ContentPosts