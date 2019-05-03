import * as PostsAPI from '../PostsAPI'

export const LIST_POSTS = 'LIST_POSTS'
export const POST_ADD = 'POST_ADD'


export const sendPost = (post) => {
    return dispath => {
          return PostsAPI.sendpost(post).then( result => {
               dispath({type: 'POST_ADD', payload: result});
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