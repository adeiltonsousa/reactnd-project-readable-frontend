import * as PostsAPI from '../PostsAPI'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'


export const sendPost = (post) => {
    return dispath => {
          return PostsAPI.sendpost(post).then( result => {
               dispath({type: 'ADD_POST', payload: result});
               return result;
          });
    }
}

export function listPosts(posts) {  
    return {
        type: LIST_POSTS,
        payload: posts
    }
}